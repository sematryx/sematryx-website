#!/usr/bin/env node

// Test script to verify encryption is working
// Run: node scripts/test-encryption.js

const crypto = require('crypto');

// Check if env var is set
const encryptionKey = process.env.API_KEY_ENCRYPTION_KEY;

if (!encryptionKey) {
  console.error('❌ API_KEY_ENCRYPTION_KEY is not set');
  console.log('\nTo set it:');
  console.log('  export API_KEY_ENCRYPTION_KEY="your-key-here"');
  console.log('\nOr in Vercel:');
  console.log('  Go to Project Settings → Environment Variables');
  console.log('  Add: API_KEY_ENCRYPTION_KEY = <your-key>');
  process.exit(1);
}

console.log('✅ API_KEY_ENCRYPTION_KEY is set');
console.log('   Length:', encryptionKey.length);
console.log('   First 10 chars:', encryptionKey.substring(0, 10) + '...');

// Test encryption
try {
  const key = crypto.createHash('sha256').update(encryptionKey).digest();
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  
  const plaintext = 'test-api-key-12345';
  let encrypted = cipher.update(plaintext, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const authTag = cipher.getAuthTag();
  
  const encryptedString = `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
  console.log('\n✅ Encryption test successful');
  console.log('   Encrypted length:', encryptedString.length);
  
  // Test decryption
  const parts = encryptedString.split(':');
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(parts[0], 'hex'));
  decipher.setAuthTag(Buffer.from(parts[1], 'hex'));
  let decrypted = decipher.update(parts[2], 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  if (decrypted === plaintext) {
    console.log('✅ Decryption test successful');
    console.log('   Decrypted:', decrypted);
  } else {
    console.error('❌ Decryption failed - values do not match');
    process.exit(1);
  }
  
  console.log('\n✅ All encryption tests passed!');
} catch (error) {
  console.error('❌ Encryption test failed:', error.message);
  process.exit(1);
}
