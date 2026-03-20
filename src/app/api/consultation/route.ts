import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    const { name, organisation, email, phone, query, workType, description } = formData;

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

    // Email content
    const mailOptions = {
      from: 'qentara.web@gmail.com',
      to: 'qentara.web@gmail.com',
      subject: `New Consultation Request from ${name}`,
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
                ${name}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Organisation:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${organisation || 'Not provided'}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Email:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${email}
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
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Query:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${query}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Type of Work:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${workType}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Description:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${description || 'Not provided'}
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

    console.log('Consultation form submitted and email sent:', {
      name,
      organisation,
      email,
      phone,
      query,
      workType,
      description,
      submittedAt: new Date().toISOString()
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
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

