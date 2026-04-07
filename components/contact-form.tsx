"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CheckCircle2, AlertCircle, Loader } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  services: z.array(z.string()).optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  budget: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  serviceOptions?: string[]
  budgetOptions?: string[]
  className?: string
}

export function ContactForm({
  serviceOptions = [
    "Brand Design",
    "Web Development",
    "UI/UX Design",
    "Digital Strategy",
    "Mobile Apps",
    "E-commerce",
  ],
  budgetOptions = ["$5,000 - $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000+"],
  className,
}: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const selectedServices = watch("services") || []

  const onSubmit = async (data: ContactFormData) => {
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.message || "Failed to send message")
      }

      setIsSubmitted(true)
      reset()
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  if (isSubmitted) {
    return (
      <div className={cn("text-center py-20 animate-fade-up", className)}>
        <div className="h-24 w-24 mx-auto flex items-center justify-center rounded-full bg-accent/10 text-accent mb-8 animate-scale-in shadow-glow">
          <CheckCircle2 className="h-12 w-12" />
        </div>
        <h3 className="text-3xl font-bold mb-4">Message sent successfully!</h3>
        <p className="text-muted-foreground mb-10 max-w-sm mx-auto leading-relaxed">
          Thank you for reaching out. We&apos;ll review your message and get back to you within 24 hours.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-8", className)}>
      {/* Name Fields */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="block text-sm font-medium">
            First Name
          </label>
          <input
            {...register("firstName")}
            id="firstName"
            placeholder="John"
            className={cn(
              "w-full px-4 py-3 rounded-xl border bg-card/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-border/80",
              errors.firstName ? "border-destructive bg-destructive/5" : "border-border/50"
            )}
          />
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm font-medium">
            Last Name
          </label>
          <input
            {...register("lastName")}
            id="lastName"
            placeholder="Doe"
            className={cn(
              "w-full px-4 py-3 rounded-xl border bg-card/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-border/80",
              errors.lastName ? "border-destructive bg-destructive/5" : "border-border/50"
            )}
          />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email and Phone */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="john@example.com"
            className={cn(
              "w-full px-4 py-3 rounded-xl border bg-card/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-border/80",
              errors.email ? "border-destructive bg-destructive/5" : "border-border/50"
            )}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone (Optional)
          </label>
          <input
            {...register("phone")}
            id="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            className="w-full px-4 py-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-border/80"
          />
        </div>
      </div>

      {/* Company and Budget */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium">
            Company (Optional)
          </label>
          <input
            {...register("company")}
            id="company"
            placeholder="Your Company"
            className="w-full px-4 py-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-border/80"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="budget" className="block text-sm font-medium">
            Budget (Optional)
          </label>
          <select
            {...register("budget")}
            id="budget"
            className="w-full px-4 py-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-border/80"
          >
            <option value="">Select a budget range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Services */}
      <div className="space-y-3">
        <label className="block text-sm font-medium">Services (Optional)</label>
        <div className="grid grid-cols-2 gap-3">
          {serviceOptions.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => {
                const current = selectedServices || []
                const updated = current.includes(service)
                  ? current.filter((s) => s !== service)
                  : [...current, service]
                setValue("services", updated)
              }}
              className={cn(
                "px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border",
                selectedServices?.includes(service)
                  ? "bg-accent text-accent-foreground border-accent shadow-glow hover:scale-105"
                  : "border-border/50 bg-card/50 hover:border-border hover:bg-card"
              )}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          {...register("message")}
          id="message"
          placeholder="Tell us about your project..."
          rows={6}
          className={cn(
            "w-full px-4 py-3 rounded-xl border bg-card/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 resize-none hover:border-border/80",
            errors.message ? "border-destructive bg-destructive/5" : "border-border/50"
          )}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive animate-fade-up">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full mt-4"
      >
        {isSubmitting ? (
          <>
            <Loader className="h-4 w-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
