import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, service, budget, message } = data;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    const recipientEmail = 'madishettikalyan55@gmail.com';
    const emailSubject = `🎨 New Portfolio Design Inquiry: ${service} from ${name}`;

    // Payload for email dispatch
    const payload = {
      name,
      email,
      service,
      budget: budget || 'Flexible / Discuss Later',
      message,
      _subject: emailSubject,
      _template: 'table',
      _captcha: 'false',
    };

    // Forward to email delivery endpoint in background
    let delivered = false;

    // 1. Try FormSubmit API
    try {
      const fsRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'Origin': 'https://madishettikalyan.com',
          'Referer': 'https://madishettikalyan.com/'
        },
        body: JSON.stringify(payload)
      });
      if (fsRes.ok) {
        delivered = true;
      }
    } catch (e) {
      console.error('FormSubmit error:', e);
    }

    // 2. Try Formspree / Webhook fallback if needed
    if (!delivered) {
      try {
        await fetch(`https://formsubmit.co/${recipientEmail}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            name,
            email,
            service,
            budget: budget || 'Flexible',
            message,
            _subject: emailSubject,
            _captcha: 'false'
          }).toString()
        });
        delivered = true;
      } catch (e) {
        console.error('Fallback error:', e);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully!'
    });
  } catch (error: any) {
    console.error('API Contact route error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
