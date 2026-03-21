import { NextResponse } from 'next/server';
import { MAIL_FROM, MAIL_TO, createTransporter, escapeHtml, getMissingMailConfig } from '@/lib/mailer';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    const { name, organisation, email, phone, query, workType, description } = formData;

    if (!name || !email || !query || !workType) {
      return NextResponse.json(
        { message: 'Name, email, query, and type of work are required.' },
        { status: 400 }
      );
    }

    const missingConfig = getMissingMailConfig();
    if (missingConfig) {
      return NextResponse.json(
        { message: 'Email service not configured. Please contact support.' },
        { status: 500 }
      );
    }

    const transporter = createTransporter();

    // Email content
    const mailOptions = {
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: `New Consultation Request from ${escapeHtml(name)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Consultation Request
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">
                Name:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${escapeHtml(name)}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Organisation:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${escapeHtml(organisation || 'Not provided')}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Email:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${escapeHtml(email)}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Phone:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${escapeHtml(phone || 'Not provided')}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Query:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${escapeHtml(query)}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Type of Work:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${escapeHtml(workType)}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Description:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${escapeHtml(description || 'Not provided')}
              </td>
            </tr>
          </table>
          
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            This email was sent from the Qentara Technologies website consultation form.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email';
    
    if (String(error).includes('Invalid login') || String(error).includes('authentication')) {
      errorMessage = 'Email authentication failed. Please check SMTP settings.';
    } else if (String(error).includes('ECONNREFUSED')) {
      errorMessage = 'Unable to connect to email server. Please try again later.';
    } else if (!process.env.SMTP_PASS) {
      errorMessage = 'Email service not configured. Please contact support.';
    }
    
    return NextResponse.json(
      { message: errorMessage, error: String(error) },
      { status: 500 }
    );
  }
}

