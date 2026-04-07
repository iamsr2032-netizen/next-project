/**
 * Email utility functions
 * 
 * This file provides email sending functionality for the contact form.
 * To enable actual email sending, choose one of the services below
 * and uncomment the implementation.
 */

// ============================================
// Email Template Generator
// ============================================

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  services?: string[]
  message: string
  budget?: string
}

export function generateAdminEmailHTML(
  data: ContactFormData,
  submissionId: string
): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .section { margin-bottom: 20px; }
          .section-title { font-weight: 600; color: #000; margin-bottom: 8px; }
          .field { margin-bottom: 12px; }
          .field-label { font-weight: 500; color: #666; font-size: 12px; text-transform: uppercase; }
          .field-value { color: #000; margin-top: 4px; }
          .message-box { background: #f9f9f9; border-left: 4px solid #007bff; padding: 16px; border-radius: 4px; margin-top: 12px; }
          .footer { color: #666; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
            <p style="margin: 8px 0 0 0; color: #666;">Submission ID: <code>${submissionId}</code></p>
          </div>

          <div class="section">
            <div class="field">
              <div class="field-label">Name</div>
              <div class="field-value">${data.firstName} ${data.lastName}</div>
            </div>
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            ${data.phone ? `
            <div class="field">
              <div class="field-label">Phone</div>
              <div class="field-value"><a href="tel:${data.phone}">${data.phone}</a></div>
            </div>
            ` : ""}
            ${data.company ? `
            <div class="field">
              <div class="field-label">Company</div>
              <div class="field-value">${data.company}</div>
            </div>
            ` : ""}
            ${data.services && data.services.length > 0 ? `
            <div class="field">
              <div class="field-label">Services Interested In</div>
              <div class="field-value">${data.services.join(", ")}</div>
            </div>
            ` : ""}
            ${data.budget ? `
            <div class="field">
              <div class="field-label">Budget</div>
              <div class="field-value">${data.budget}</div>
            </div>
            ` : ""}
          </div>

          <div class="section">
            <div class="section-title">Message</div>
            <div class="message-box">
              ${data.message.replace(/\n/g, "<br>")}
            </div>
          </div>

          <div class="footer">
            <p>This is an automated email from your contact form. Please reply directly to the sender's email address.</p>
          </div>
        </div>
      </body>
    </html>
  `
}

export function generateUserConfirmationHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px; }
          .header h1 { margin: 0; font-size: 28px; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .section { margin-bottom: 20px; }
          .section-title { font-weight: 600; color: #000; margin-bottom: 12px; font-size: 18px; }
          .message-box { background: white; padding: 16px; border-radius: 4px; border: 1px solid #e0e0e0; }
          .footer { text-align: center; color: #666; font-size: 12px; margin-top: 30px; }
          .button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; border-radius: 4px; text-decoration: none; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You, ${data.firstName}! 🎉</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">We received your message</p>
          </div>

          <div class="content">
            <div class="section">
              <p>We appreciate you reaching out. Your message is important to us, and we'll review it carefully.</p>
              <p><strong>What happens next:</strong></p>
              <ul>
                <li>We'll review your inquiry within 24 hours</li>
                <li>Our team will get back to you at <strong>${data.email}</strong></li>
                <li>If you provided a phone number, we may call to discuss further</li>
              </ul>
            </div>

            <div class="section">
              <div class="section-title">Your Message Summary</div>
              <div class="message-box">
                ${data.message.replace(/\n/g, "<br>")}
              </div>
            </div>

            <div style="text-align: center;">
              <p style="color: #666;">Have questions in the meantime? Feel free to reply to this email.</p>
            </div>
          </div>

          <div class="footer">
            <p>This is an automated email from our contact form. Please don't reply to this message.</p>
            <p>© 2024 All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `
}

// ============================================
// Email Sending Implementation
// ============================================

/**
 * Send email notification
 * 
 * Currently logs to console. To enable actual email sending:
 * 1. Install your chosen email service (nodemailer, sendgrid, resend, etc.)
 * 2. Set up environment variables
 * 3. Uncomment the implementation below
 * 4. See EMAIL_SETUP.md for detailed instructions
 */
export async function sendContactFormEmail(
  data: ContactFormData,
  submissionId: string
): Promise<{ success: boolean; error?: string }> {
  try {
    console.log("[Email] Sending contact form emails", {
      submissionId,
      to: data.email,
      adminEmail: process.env.CONTACT_EMAIL || "admin@example.com",
    })

    // ============================================
    // Uncomment below to use Nodemailer
    // ============================================
    /*
    import nodemailer from 'nodemailer'

    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    await Promise.all([
      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.CONTACT_EMAIL,
        subject: `New contact form submission from ${data.firstName} ${data.lastName}`,
        html: generateAdminEmailHTML(data, submissionId),
      }),
      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: data.email,
        subject: "We received your message",
        html: generateUserConfirmationHTML(data),
      }),
    ])
    */

    // ============================================
    // Uncomment below to use SendGrid
    // ============================================
    /*
    import sgMail from '@sendgrid/mail'

    sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

    await Promise.all([
      sgMail.send({
        to: process.env.CONTACT_EMAIL!,
        from: process.env.SENDGRID_FROM_EMAIL!,
        subject: `New contact form submission from ${data.firstName} ${data.lastName}`,
        html: generateAdminEmailHTML(data, submissionId),
      }),
      sgMail.send({
        to: data.email,
        from: process.env.SENDGRID_FROM_EMAIL!,
        subject: "We received your message",
        html: generateUserConfirmationHTML(data),
      }),
    ])
    */

    // ============================================
    // Uncomment below to use Resend
    // ============================================
    /*
    import { Resend } from 'resend'

    const resend = new Resend(process.env.RESEND_API_KEY)

    await Promise.all([
      resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: process.env.CONTACT_EMAIL!,
        subject: `New contact form submission from ${data.firstName} ${data.lastName}`,
        html: generateAdminEmailHTML(data, submissionId),
      }),
      resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: data.email,
        subject: "We received your message",
        html: generateUserConfirmationHTML(data),
      }),
    ])
    */

    return { success: true }
  } catch (error) {
    console.error("[Email] Error sending emails:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send emails",
    }
  }
}
