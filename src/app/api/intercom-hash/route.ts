import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
  const { email } = (await request.json()) as { email: string };
  
  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const secretKey = process.env.INTERCOM_SECRET_KEY;
  
  if (!secretKey) {
    return NextResponse.json({ error: 'Secret key not configured' }, { status: 500 });
  }

  const hash = crypto
    .createHmac('sha256', secretKey)
    .update(email)
    .digest('hex');

  return NextResponse.json({ hash });
}