import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    const { planName, price, description, features, name, email, phone } = formData;

    // Configure nodemailer transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'qentara.web@gmail.com',
        pass: process.env.SMTP_PASS,
      },
    });

    // Build features list HTML
    const featuresList = features.map((feature: string) => `<li style="padding: 5px 0;">✓ ${feature}</li>`).join('');

    // Email content
    const mailOptions = {
      from: 'qentara.web@gmail.com',
      to: 'qentara.web@gmail.com',
      subject: `New Pricing Inquiry - ${planName} Plan`,
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
                ${planName}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Price:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${price}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Description:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${description}
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
                ${name || 'Not provided'}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Email:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${email || 'Not provided'}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Phone:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${phone || 'Not provided'}
              </td>
            </tr>
          </table>
          
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            This email was sent from the Qentara Technologies website pricing section.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log('Pricing inquiry submitted and email sent:', {
      planName,
      price,
      name,
      email,
      phone,
      submittedAt: new Date().toISOString()
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: String(error) },
      { status: 500 }
    );
  }
}

