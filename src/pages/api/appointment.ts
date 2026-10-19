import type { APIRoute } from "astro"
import path from "path"
import fs from "fs"
import { appointmentSchema } from "../../lib/schema"
import { transporter } from "../../lib/nodemailer"

export const prerender = false

const templatePath = path.join(process.cwd(), "src", "templates", "appointment.html")

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json()
    const validatedData = appointmentSchema.parse(data)

    let html = fs.readFileSync(templatePath, "utf8")

    html = html
      .replace("{{name}}", validatedData.name)
      .replace("{{email}}", validatedData.email)
      .replace("{{phone}}", validatedData.phone)
      .replace("{{address}}", validatedData.address)
      .replace("{{age}}", validatedData.age.toString())
      .replace("{{sex}}", validatedData.sex)
      .replace("{{serviceCategory}}", validatedData.serviceCategory)
      .replace("{{testName}}", validatedData.testName)
      .replace("{{collectionOption}}", validatedData.collectionOption)
      .replace("{{additionalMessage}}", validatedData.additionalMessage || "N/A")

    await transporter.sendMail({
      from: '"EC Laboratory Website" <michaelolsen184@gmail.com>',
      to: "info@eclaboratory.com",
      subject: "New Appointment Booking Request",
      html: html,
    })

    return Response.json(
      {
        message:
          "Thank you for booking an appointment. Your request has been received and we will get back to you shortly.",
      },
      { status: 201 },
    )
  } catch (err: any) {
    console.error(err)
    if (err.name === "ZodError") {
      return Response.json({ message: "Validation error", errors: err.errors }, { status: 400 })
    }
    return Response.json(
      { message: "Error occured while submitting your booking request" },
      { status: 500 },
    )
  }
}
