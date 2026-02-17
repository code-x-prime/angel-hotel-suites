
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, phone, email, checkIn, checkOut } = body;

        if (!name || !phone || !checkIn || !checkOut) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Configure Nodemailer Transporter for Brevo
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // 1. Email to Admin
        const adminMailOptions = {
            from: `"${name}" <${process.env.FROM_EMAIL}>`, // Sender address
            to: 'angelhotel.gurgaon@gmail.com', // Admin Email
            replyTo: email || undefined,
            subject: `New Booking Inquiry - ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #066F89; margin-bottom: 20px;">New Booking Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 10px 0;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0;">${email || 'Not provided'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold;">Check-in:</td>
              <td style="padding: 10px 0;">${checkIn}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Check-out:</td>
              <td style="padding: 10px 0;">${checkOut}</td>
            </tr>
          </table>
          <br />
          <p style="font-size: 12px; color: #777;">Received via Angel Hotel Website.</p>
        </div>
      `,
        };

        await transporter.sendMail(adminMailOptions);

        // 2. Email to User (only if email is provided)
        if (email) {
            const userMailOptions = {
                from: `"Angel Hotel & Suites" <${process.env.FROM_EMAIL}>`,
                to: email,
                subject: 'Thank You for Choosing Angel Hotel',
                html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #066F89;">Booking Inquiry Received</h2>
            <p>Dear ${name},</p>
            <p>Thank you for contacting <strong>Angel Hotel & Suites</strong>.</p>
            <p>We have received your request for a stay from <strong>${checkIn}</strong> to <strong>${checkOut}</strong>.</p>
            <p>Our team will check availability and call you shortly at <strong>${phone}</strong> to confirm the best rates.</p>
            <br />
            <p>For urgent queries, call us directly at <strong>+91-9958800961</strong>.</p>
            <br />
            <p>Warm Regards,<br/>Angel Hotel Team</p>
          </div>
        `,
            };
            await transporter.sendMail(userMailOptions);
        }

        return NextResponse.json({ success: true, message: 'Emails sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Email handling error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
