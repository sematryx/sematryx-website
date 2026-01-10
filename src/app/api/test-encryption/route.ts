import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

/**
 * GET /api/test-encryption
 * Test endpoint to verify encryption is working
 * Only accessible when authenticated
 */
export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const encryptionKey = process.env.API_KEY_ENCRYPTION_KEY
    
    // Debug: List all env vars (safely, first 50)
    const allEnvVarKeys = Object.keys(process.env).slice(0, 50)
    const apiKeyEnvVars = Object.keys(process.env)
      .filter(key => key.includes('API_KEY') || key.includes('ENCRYPTION') || key.includes('CLERK') || key.includes('STRIPE'))
      .reduce((acc, key) => {
        acc[key] = process.env[key] ? `Set (length: ${process.env[key]!.length})` : 'Not set'
        return acc
      }, {} as Record<string, string>)
    
    // Check for common variations
    const variations = [
      'API_KEY_ENCRYPTION_KEY',
      'API_KEY_ENCRYPTION_KEY ',
      ' API_KEY_ENCRYPTION_KEY',
      'API_KEY_ENCRYPTION_KEY\n',
      'API_KEY_ENCRYPTION_KEY\r',
    ]
    const variationChecks = variations.reduce((acc, variant) => {
      acc[variant] = !!process.env[variant.trim()]
      return acc
    }, {} as Record<string, boolean>)
    
    // Test encryption
    let encryptionTest = {
      envVarSet: !!encryptionKey,
      envVarLength: encryptionKey?.length || 0,
      canEncrypt: false,
      canDecrypt: false,
      error: null as string | null,
      // Debug info
      allEnvVarsWithAPI: apiKeyEnvVars,
      allEnvVarCount: Object.keys(process.env).length,
      sampleEnvVars: allEnvVarKeys.slice(0, 10),
      variationChecks: variationChecks,
      nodeEnv: process.env.NODE_ENV,
      vercelEnv: process.env.VERCEL_ENV,
      vercelUrl: process.env.VERCEL_URL,
    }

    if (encryptionKey) {
      try {
        const crypto = require('crypto')
        const key = crypto.createHash('sha256').update(encryptionKey).digest()
        const iv = crypto.randomBytes(16)
        const cipher = crypto.createCipheriv('aes-256-gcm', key, iv)
        
        const plaintext = 'test-value-12345'
        let encrypted = cipher.update(plaintext, 'utf8', 'hex')
        encrypted += cipher.final('hex')
        const authTag = cipher.getAuthTag()
        
        const encryptedString = `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`
        encryptionTest.canEncrypt = true
        
        // Test decryption
        const parts = encryptedString.split(':')
        const decipher = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(parts[0], 'hex'))
        decipher.setAuthTag(Buffer.from(parts[1], 'hex'))
        let decrypted = decipher.update(parts[2], 'hex', 'utf8')
        decrypted += decipher.final('utf8')
        
        encryptionTest.canDecrypt = (decrypted === plaintext)
      } catch (error) {
        encryptionTest.error = error instanceof Error ? error.message : String(error)
      }
    }

    return NextResponse.json({
      success: true,
      encryption: encryptionTest,
      message: encryptionTest.envVarSet 
        ? (encryptionTest.canEncrypt && encryptionTest.canDecrypt 
          ? '✅ Encryption is working correctly' 
          : `❌ Encryption test failed: ${encryptionTest.error || 'Unknown error'}`)
        : '❌ API_KEY_ENCRYPTION_KEY environment variable is not set'
    })
  } catch (error) {
    return NextResponse.json(
      { 
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
