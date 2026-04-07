# Email Setup Guide

This guide explains how to set up email sending for the contact form.

## Quick Start (Development)

For development/testing, the contact form will work without email setup. Check your server console logs to see form submissions.

## Production Email Setup

Choose one of the email services below:

### Option 1: Nodemailer (Recommended for Gmail/Outlook)

#### Setup Steps:

1. **Install Nodemailer**
   ```bash
   npm install nodemailer
   # or
   pnpm add nodemailer
   ```

2. **For Gmail:**
   - Go to [Google Account Settings](https://myaccount.google.com/security)
   - Enable 2-Step Verification
   - Generate an [App Password](https://myaccount.google.com/apppasswords)
   - Copy the 16-character password

3. **Set Environment Variables**
   ```bash
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   CONTACT_EMAIL=your-email@gmail.com
   ```

4. **Update the API Route**
   
   Replace the `sendEmailNotification` function in `/app/api/contact/route.ts`:

   ```typescript
   import nodemailer from "nodemailer"

   async function sendEmailNotification(data: ContactFormData, submissionId: string) {
     const transporter = nodemailer.createTransport({
       service: process.env.EMAIL_SERVICE,
       auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASSWORD,
       },
     })

     // Send to admin
     await transporter.sendMail({
       from: process.env.EMAIL_USER,
       to: process.env.CONTACT_EMAIL,
       subject: `New contact form submission from ${data.firstName} ${data.lastName}`,
       html: generateEmailTemplate(data, submissionId),
     })

     // Send confirmation to user
     await transporter.sendMail({
       from: process.env.EMAIL_USER,
       to: data.email,
       subject: "We received your message",
       html: generateConfirmationTemplate(data),
     })
   }
   ```

#### For Outlook/Hotmail:
   ```bash
   EMAIL_SERVICE=outlook
   EMAIL_USER=your-email@outlook.com
   EMAIL_PASSWORD=your-password
   CONTACT_EMAIL=your-email@outlook.com
   ```

---

### Option 2: SendGrid (Best for Production)

1. **Create SendGrid Account**
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Create an API key from Settings → API Keys

2. **Install SendGrid**
   ```bash
   npm install @sendgrid/mail
   ```

3. **Set Environment Variables**
   ```bash
   SENDGRID_API_KEY=your-sendgrid-api-key
   SENDGRID_FROM_EMAIL=noreply@yourdomain.com
   CONTACT_EMAIL=your-email@yourdomain.com
   ```

4. **Update the API Route**
   ```typescript
   import sgMail from "@sendgrid/mail"

   sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

   async function sendEmailNotification(data: ContactFormData, submissionId: string) {
     const msg = {
       to: process.env.CONTACT_EMAIL!,
       from: process.env.SENDGRID_FROM_EMAIL!,
       subject: `New contact form submission from ${data.firstName} ${data.lastName}`,
       html: generateEmailTemplate(data, submissionId),
     }

     const confirmationMsg = {
       to: data.email,
       from: process.env.SENDGRID_FROM_EMAIL!,
       subject: "We received your message",
       html: generateConfirmationTemplate(data),
     }

     await Promise.all([
       sgMail.send(msg),
       sgMail.send(confirmationMsg),
     ])
   }
   ```

---

### Option 3: Resend (Modern Alternative)

1. **Create Resend Account**
   - Sign up at [resend.com](https://resend.com)
   - Create an API key from Settings

2. **Install Resend**
   ```bash
   npm install resend
   ```

3. **Set Environment Variables**
   ```bash
   RESEND_API_KEY=your-resend-api-key
   CONTACT_EMAIL=your-email@yourdomain.com
   ```

4. **Update the API Route**
   ```typescript
   import { Resend } from "resend"

   const resend = new Resend(process.env.RESEND_API_KEY)

   async function sendEmailNotification(data: ContactFormData, submissionId: string) {
     await Promise.all([
       resend.emails.send({
         from: "Contact Form <onboarding@resend.dev>",
         to: process.env.CONTACT_EMAIL!,
         subject: `New contact form submission from ${data.firstName} ${data.lastName}`,
         html: generateEmailTemplate(data, submissionId),
       }),
       resend.emails.send({
         from: "Contact Form <onboarding@resend.dev>",
         to: data.email,
         subject: "We received your message",
         html: generateConfirmationTemplate(data),
       }),
     ])
   }
   ```

---

## Testing Email Setup

1. **Test Locally**
   ```bash
   npm run dev
   ```
   - Fill out the form at `http://localhost:3000/contact`
   - Check your console logs for submission details
   - Check your email inbox for test emails

2. **Check API Response**
   - Open browser DevTools (F12)
   - Submit the form
   - Check Network tab for `/api/contact` response

3. **Debug Failed Emails**
   - Enable debug logs in the API route
   - Check email service dashboard for bounces/errors
   - Verify environment variables are set correctly

---

## Email Templates

The contact form includes pre-built email templates:
- `generateEmailTemplate()` - Admin notification
- `generateConfirmationTemplate()` - User confirmation

Customize these functions in `/app/api/contact/route.ts` to match your branding.

---

## Troubleshooting

### "EAUTH" Error with Gmail
- Ensure 2-Step Verification is enabled
- Use an App Password (not your regular Gmail password)
- App Password must be 16 characters

### "Invalid Credentials" Error
- Double-check environment variable names
- Ensure no extra spaces in credentials
- Test credentials directly with the email service

### Emails Not Sent but No Error
- Check spam/junk folder
- Verify `CONTACT_EMAIL` is correct
- Check email service dashboard for failures
- Enable error logging in the API route

### Rate Limiting
- SendGrid: 100 emails/second
- Gmail: 300 emails/day (limited by Google)
- Resend: No rate limits for free tier

---

## Production Best Practices

1. **Security**
   - Never commit `.env.local` to git
   - Use environment variables from hosting provider (Vercel, etc.)
   - Rotate API keys regularly

2. **Monitoring**
   - Log all form submissions
   - Set up alerts for failed emails
   - Monitor bounce rates

3. **Compliance**
   - Add GDPR compliance notice
   - Store submissions securely
   - Implement email unsubscribe option

4. **Performance**
   - Use async email sending (don't wait for completion)
   - Implement rate limiting to prevent spam
   - Cache DNS lookups for email servers

---

## Support

For issues or questions:
- Check the [Nodemailer docs](https://nodemailer.com)
- Check the [SendGrid docs](https://sendgrid.com/docs)
- Check the [Resend docs](https://resend.com/docs)
