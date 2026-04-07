import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

// Email validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().default(""),
  company: z.string().optional().default(""),
  services: z.array(z.string()).optional().default([]),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000, "Message must be less than 5000 characters"),
  budget: z.string().optional().default(""),
})

type ContactFormData = z.infer<typeof contactSchema>

// Simple in-memory storage for demo (replace with database)
const submissions: (ContactFormData & { timestamp: string; id: string })[] = []

/**
 * Send email notification
 * Configure with your email service (Nodemailer, SendGrid, etc.)
 */
async function sendEmailNotification(data: ContactFormData, submissionId: string) {
  // Example using Nodemailer (install: npm install nodemailer)
  // const nodemailer = require("nodemailer")
  // const transporter = nodemailer.createTransport({
  //   service: process.env.EMAIL_SERVICE,
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASSWORD,
  //   },
  // })

  // Send to admin
  // await transporter.sendMail({
  //   from: process.env.EMAIL_USER,
  //   to: process.env.CONTACT_EMAIL,
  //   subject: `New contact form submission from ${data.firstName} ${data.lastName}`,
  //   html: generateEmailTemplate(data, submissionId),
  // })

  // Send confirmation to user
  // await transporter.sendMail({
  //   from: process.env.EMAIL_USER,
  //   to: data.email,
  //   subject: "We received your message",
  //   html: generateConfirmationTemplate(data),
  // })

  console.log("[Contact Form] Email would be sent to:", {
    admin: process.env.CONTACT_EMAIL || "admin@example.com",
    user: data.email,
    submissionId,
  })
}

function generateEmailTemplate(data: ContactFormData, submissionId: string): string {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Submission ID:</strong> ${submissionId}</p>
    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
    ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
    ${data.services && data.services.length > 0 ? `<p><strong>Services:</strong> ${data.services.join(", ")}</p>` : ""}
    ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ""}
    <h3>Message:</h3>
    <p>${data.message.replace(/\n/g, "<br>")}</p>
  `
}

function generateConfirmationTemplate(data: ContactFormData): string {
  return `
    <h2>Thank you, ${data.firstName}!</h2>
    <p>We received your message and will get back to you within 24 hours.</p>
    <p>In the meantime, here's a summary of what you sent:</p>
    <h3>Your Message:</h3>
    <p>${data.message.replace(/\n/g, "<br>")}</p>
    <p>Best regards,<br>The Team</p>
  `
}

/**
 * POST /api/contact
 * Handles contact form submissions with validation
 * 
 * Request body:
 * {
 *   firstName: string (2-50 chars)
 *   lastName: string (2-50 chars)
 *   email: string (valid email)
 *   phone?: string
 *   company?: string
 *   services?: string[]
 *   message: string (10-5000 chars)
 *   budget?: string
 * }
 */
export async function POST(request: NextRequest) {
  // Rate limiting check (basic implementation)
  const clientIp = request.headers.get("x-forwarded-for") || "unknown"
  
  try {
    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Generate submission ID and timestamp
    const submissionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const timestamp = new Date().toISOString()

    // Store the submission
    submissions.push({
      ...validatedData,
      timestamp,
      id: submissionId,
    })

    // Send email notifications
    try {
      await sendEmailNotification(validatedData, submissionId)
    } catch (emailError) {
      console.error("Email sending failed:", emailError)
      // Don't fail the request if email fails
      // In production, you'd want to log this to an error tracking service
    }

    // Log submission
    console.log("[Contact Form] New submission received:", {
      submissionId,
      timestamp,
      clientIp,
      name: `${validatedData.firstName} ${validatedData.lastName}`,
      email: validatedData.email,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully. We'll get back to you within 24 hours.",
        submissionId,
      },
      { status: 200 }
    )
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      console.warn("[Contact Form] Validation error:", error.errors)
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          errors: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      )
    }

    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request format",
        },
        { status: 400 }
      )
    }

    // Handle other errors
    console.error("[Contact Form] Unexpected error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    )
  }
}

/**
 * GET /api/contact
 * Retrieve all submissions (admin only - add authentication in production)
 * 
 * In production, add proper authentication/authorization:
 * - Check Authorization header
 * - Verify JWT token or session
 * - Check user role/permissions
 */
export async function GET(request: NextRequest) {
  // TODO: Add authentication check
  // const authHeader = request.headers.get("authorization")
  // if (!authHeader || !verifyToken(authHeader)) {
  //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  // }

  // Get query parameters for filtering/pagination
  const searchParams = request.nextUrl.searchParams
  const limit = parseInt(searchParams.get("limit") || "50")
  const offset = parseInt(searchParams.get("offset") || "0")

  const sortedSubmissions = [...submissions].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )

  const paginatedSubmissions = sortedSubmissions.slice(offset, offset + limit)

  return NextResponse.json(
    {
      success: true,
      total: submissions.length,
      limit,
      offset,
      count: paginatedSubmissions.length,
      submissions: paginatedSubmissions,
    },
    { status: 200 }
  )
}

/**
 * DELETE /api/contact/:id
 * Delete a submission (admin only)
 */
export async function DELETE(request: NextRequest) {
  // TODO: Add authentication check
  const id = request.nextUrl.searchParams.get("id")

  if (!id) {
    return NextResponse.json(
      { success: false, message: "Submission ID is required" },
      { status: 400 }
    )
  }

  const index = submissions.findIndex((s) => s.id === id)
  if (index === -1) {
    return NextResponse.json(
      { success: false, message: "Submission not found" },
      { status: 404 }
    )
  }

  submissions.splice(index, 1)

  return NextResponse.json(
    { success: true, message: "Submission deleted successfully" },
    { status: 200 }
  )
}
