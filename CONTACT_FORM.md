# Contact Form Documentation

A production-ready contact form with full validation, error handling, loading states, and optional email integration.

## Features

- **Client-side Validation** - Real-time form validation with Zod
- **Server-side Validation** - Additional validation on the API
- **Loading States** - Spinner while submitting
- **Success/Error Messages** - User feedback with animations
- **Email Integration** - Optional email sending (Nodemailer, SendGrid, Resend)
- **Accessibility** - WCAG compliant form inputs
- **Responsive Design** - Mobile-friendly form layout
- **Rate Limiting Ready** - Easy to add rate limiting
- **Type-Safe** - Full TypeScript support

## File Structure

```
├── components/
│   └── contact-form.tsx          # Form component with validation
├── app/api/contact/
│   └── route.ts                  # API route for form handling
├── app/contact/
│   └── page.tsx                  # Contact page
├── lib/
│   └── email.ts                  # Email utilities and templates
├── EMAIL_SETUP.md                # Email integration guide
└── CONTACT_FORM.md              # This file
```

## Usage

### Basic Implementation

The contact form is already integrated into the contact page at `/contact`.

### Standalone Usage

Use the `ContactForm` component anywhere in your app:

```tsx
import { ContactForm } from "@/components/contact-form"

export default function MyPage() {
  return (
    <div>
      <ContactForm
        serviceOptions={["Consulting", "Development"]}
        budgetOptions={["$0-5k", "$5k-25k", "$25k+"]}
      />
    </div>
  )
}
```

### Props

```tsx
interface ContactFormProps {
  serviceOptions?: string[]        // Custom service options
  budgetOptions?: string[]         // Custom budget options
  className?: string               // Additional CSS classes
}
```

## Form Fields

| Field | Type | Required | Validation |
|-------|------|----------|-----------|
| firstName | text | Yes | 2-50 characters |
| lastName | text | Yes | 2-50 characters |
| email | email | Yes | Valid email format |
| phone | tel | No | - |
| company | text | No | - |
| services | checkbox[] | No | - |
| message | textarea | Yes | 10-5000 characters |
| budget | select | No | - |

## API Endpoint

### POST /api/contact

Handles form submissions and validation.

**Request:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 123-4567",
  "company": "Acme Corp",
  "services": ["Web Development", "UI/UX Design"],
  "message": "I'd like to discuss a new project...",
  "budget": "$25,000 - $50,000"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Your message has been sent successfully. We'll get back to you within 24 hours.",
  "submissionId": "1704067200000-abc123def"
}
```

**Validation Error Response (400):**
```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "message",
      "message": "Message must be at least 10 characters"
    }
  ]
}
```

**Server Error Response (500):**
```json
{
  "success": false,
  "message": "An error occurred while processing your request. Please try again later."
}
```

### GET /api/contact

Retrieve all submissions (admin only).

**Query Parameters:**
- `limit` (default: 50) - Number of results to return
- `offset` (default: 0) - Number of results to skip

**Response:**
```json
{
  "success": true,
  "total": 42,
  "limit": 50,
  "offset": 0,
  "count": 42,
  "submissions": [
    {
      "id": "1704067200000-abc123def",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "message": "I'd like to discuss a new project...",
      "timestamp": "2024-01-01T12:00:00.000Z"
    }
  ]
}
```

## Testing

### Test Locally

1. Start dev server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000/contact`

3. Fill out and submit the form

4. Check browser DevTools Console for API response

5. Check terminal for server logs

### Test with Valid Inputs

```javascript
// Example valid form data
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "phone": "+1 (555) 987-6543",
  "company": "Tech Startup",
  "services": ["Web Development"],
  "message": "We're looking for help building our MVP. Can you tell me about your development process?",
  "budget": "$25,000 - $50,000"
}
```

### Test Validation Errors

Try submitting with:
- Empty fields (required fields)
- Short message (< 10 chars)
- Invalid email format
- Message exceeding 5000 characters

### Test Loading State

The loading spinner appears while form is submitting. To see it clearly:
1. Open DevTools (F12)
2. Go to Network tab
3. Set throttling to "Slow 3G"
4. Submit form

### Test Success State

After successful submission:
- Form hides and success message appears
- Success message auto-dismisses after 5 seconds
- User can submit another message

## Email Integration

By default, the form works without email setup (demo mode). To enable actual email sending:

1. **Choose an email service**
   - Nodemailer (Gmail, Outlook)
   - SendGrid
   - Resend

2. **Follow EMAIL_SETUP.md** for your chosen service

3. **Update API route** with your email implementation

4. **Set environment variables** in `.env.local`

See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed instructions.

## Security Considerations

### Current Implementation
- ✅ Zod schema validation (server-side)
- ✅ Error messages sanitized
- ✅ CORS headers safe
- ✅ No sensitive data logging

### TODO for Production
- [ ] Add rate limiting (see below)
- [ ] Add CSRF protection
- [ ] Add honeypot field for spam
- [ ] Add reCAPTCHA integration
- [ ] Implement authentication for admin endpoints
- [ ] Add request size limits

### Rate Limiting Example

```typescript
// Add to /app/api/contact/route.ts
import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 h"),
})

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown"
  const { success } = await ratelimit.limit(ip)

  if (!success) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again later." },
      { status: 429 }
    )
  }

  // ... rest of handler
}
```

## Customization

### Change Form Fields

Edit `components/contact-form.tsx`:
```tsx
const contactFormSchema = z.object({
  // Add new fields
  website: z.string().url("Invalid URL").optional(),
  // Modify existing fields
  message: z.string().min(20).max(10000),
  // Remove fields by deleting the property
})
```

### Change Email Templates

Edit `lib/email.ts`:
```tsx
export function generateAdminEmailHTML(data: ContactFormData): string {
  // Customize HTML template
  return `<html><!-- Your custom template --></html>`
}
```

### Change Success/Error Messages

Edit `components/contact-form.tsx`:
```tsx
return NextResponse.json(
  {
    success: true,
    message: "Your custom success message",
  },
  { status: 200 }
)
```

### Add Custom Styling

Edit `components/contact-form.tsx`:
```tsx
className={cn(
  "space-y-8",
  // Add custom classes
  "dark:bg-slate-900"
)}
```

## Deployment

### Vercel

1. Add environment variables in Vercel dashboard
2. Deploy as usual
3. Verify form works on production URL

### Other Platforms

Set environment variables based on your hosting provider:
- `EMAIL_SERVICE`
- `EMAIL_USER`
- `EMAIL_PASSWORD`
- `CONTACT_EMAIL`

## Troubleshooting

### Form doesn't submit
- Check browser console for JavaScript errors
- Check Network tab for API response
- Verify all required fields are filled

### API returns 400 error
- Check error messages in response
- Verify field values match validation rules
- Check message length (10-5000 characters)

### Success message appears but form doesn't reset
- This is expected behavior (auto-reset in `handleSubmit`)
- Try reloading page

### Emails not sending
- Check environment variables are set
- Verify email service credentials
- Check EMAIL_SETUP.md for your service
- Check email service dashboard for errors

### Performance issues
- Form is lightweight (no heavy dependencies)
- Check for network issues
- Consider adding service worker for offline support

## Support & Further Development

For questions or issues:
1. Check [EMAIL_SETUP.md](./EMAIL_SETUP.md) for email help
2. Review [README.md](./README.md) for general project info
3. Check server logs for detailed error messages

## Version History

- v1.0 (Initial) - Basic form with validation, loading states, success/error handling
- Future: Spam protection, multi-step forms, file uploads
