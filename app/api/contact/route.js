import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body || {};

    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required.' }, { status: 400 });
    }

    const subject = `New Contact Form Submission${name ? ` from ${name}` : ''}`;
    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; line-height:1.6; color:#111">
        <h2 style="margin:0 0 12px;">Morning Peace - Contact Form</h2>
        <p><strong>Name:</strong> ${name || '—'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '—'}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;">${(message || '').replace(/</g, '&lt;')}</p>
      </div>
    `;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'mylapacis@morningpeace.org',
      reply_to: email,
      subject,
      html,
    });

    if (error) {
      return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}


