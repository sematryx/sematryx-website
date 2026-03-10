import { NextResponse } from 'next/server';
import { appendFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
  try {
    const { email, useCase, features } = await request.json();
    
    // CSV format: timestamp, email, useCase, features
    const timestamp = new Date().toISOString();
    const csvLine = `"${timestamp}","${email}","${useCase}","${features.join('; ')}"\n`;
    
    // Append to waitlist.csv in project root
    const filePath = join(process.cwd(), 'waitlist.csv');
    
    try {
      await appendFile(filePath, csvLine);
    } catch (err) {
      // If file doesn't exist, create with header
      const header = 'Timestamp,Email,Use Case,Features\n';
      await appendFile(filePath, header + csvLine);
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save signup' },
      { status: 500 }
    );
  }
}
