import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, company, phone, serviceType, message } = body;

        // Validate required fields
        if (!fullName || !phone || !serviceType || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'NCJM Website <onboarding@resend.dev>', // Resend's test email
            to: ['ncjmlandscapeandcleaning@gmail.com'],
            replyTo: company ? `${fullName} <noreply@example.com>` : undefined,
            subject: `New Quote Request - ${serviceType}`,
            html: `
        <h2>New Quote Request from Website</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This email was sent from the NCJM website contact form.</em></p>
      `,
        });

        if (error) {
            console.error('Resend error:', JSON.stringify(error, null, 2));
            return NextResponse.json(
                { error: 'Failed to send email', details: error },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, messageId: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
