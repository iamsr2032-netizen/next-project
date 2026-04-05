import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

// Email validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  services: z.array(z.string()).optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  budget: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

// Simple in-memory storage for demo (replace with database)
const submissions: ContactFormData[] = []

/**
 * POST /api/contact
 * Handles contact form submissions
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // Store the submission (in production, save to database)
    submissions.push(validatedData)

    // Log submission (in production, send email or integrate with service)
    console.log("New contact form submission:", {
      timestamp: new Date().toISOString(),
      ...validatedData,
    })

    // Simulate sending email (replace with actual email service)
    // Example: await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New contact form submission from ${validatedData.firstName}`,
    //   ...
    // })

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully. We'll get back to you soon.",
        submissionId: submissions.length,
      },
      { status: 200 }
    )
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
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

    // Handle other errors
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request. Please try again.",
      },
      { status: 500 }
    )
  }
}

/**
 * GET /api/contact
 * Retrieve all submissions (admin only - should be protected in production)
 */
export async function GET(request: NextRequest) {
  // In production, add authentication/authorization check
  // const authHeader = request.headers.get("authorization")
  // if (!authHeader || !isAdmin(authHeader)) {
  //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  // }

  return NextResponse.json({
    total: submissions.length,
    submissions: submissions.sort(
      (a, b) =>
        submissions.indexOf(b) - submissions.indexOf(a)
    ),
  })
}
