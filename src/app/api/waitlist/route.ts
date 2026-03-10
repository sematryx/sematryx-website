import { NextResponse } from 'next/server';
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { email, useCases, features } = await request.json();

    if (!email) {
      return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });
    }

    const record = {
      email,
      use_cases: Array.isArray(useCases) ? useCases : [],
      features: Array.isArray(features) ? features : [],
      signed_up_at: new Date().toISOString(),
    };

    if (isSupabaseConfigured()) {
      const { error } = await supabaseAdmin
        .from('waitlist_signups')
        .insert(record);

      if (error) {
        console.error('Supabase waitlist insert error:', error);
        // Still log and return success — don't block the user
        console.log('WAITLIST_SIGNUP', JSON.stringify(record));
      }
    } else {
      console.log('WAITLIST_SIGNUP', JSON.stringify(record));
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
