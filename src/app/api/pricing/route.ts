import { NextResponse } from 'next/server';
import { MAIL_FROM, MAIL_TO, createTransporter, escapeHtml, getMissingMailConfig } from '@/lib/mailer';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const { planName, price, description, features, name, email, phone } = formData;

    if (!planName || !price || !description || !Array.isArray(features)) {
      return NextResponse.json(
        { message: 'Plan details are required.' },
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

    const featuresList = features
      .map((feature: string) => `<li style="padding: 5px 0;">&#10003; ${escapeHtml(feature)}</li>`)
      .join('');

    const mailOptions = {
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: `New Pricing Inquiry - ${escapeHtml(planName)} Plan`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Pricing Inquiry
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">
                Plan Name:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${escapeHtml(planName)}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Price:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${escapeHtml(price)}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Description:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${escapeHtml(description)}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Features:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <ul style="margin: 0; padding-left: 20px;">
                  ${featuresList}
                </ul>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Customer Name:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${escapeHtml(name || 'Not provided')}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Email:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${escapeHtml(email || 'Not provided')}
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
          </table>

          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            This email was sent from the Qentara Technologies website pricing section.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
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
