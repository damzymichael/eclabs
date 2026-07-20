import type { APIRoute } from "astro"
import path from "path"
import fs from "fs"
import { contactSchema } from "../../lib/schema"
import { transporter } from "../../lib/nodemailer"

export const prerender = false

const templatePath = path.join(process.cwd(), "src", "templates", "contact.html")

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json()
    const validatedData = contactSchema.parse(data)

    let html = fs.readFileSync(templatePath, "utf8")

    const date = new Date(validatedData.datetime)

    const dateStr =
      date.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }) +
      " " +
      date.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Africa/Lagos",
      })

    html = html
      .replace("{{name}}", validatedData.name)
      .replace("{{phone}}", validatedData.phone)
      .replace("{{datetime}}", dateStr)
      .replace("{{background}}", validatedData.background)

    await transporter.sendMail({
      from: "EC Laboratory Website",
      to: "damzymike@gmail.com",
      subject: "New Professional Contact Request",
      html: html,
    })

    return Response.json(
      {
        message:
          "Thank you for your response, your message has been received and we would get back to you within 24 - 48 hours",
      },
      { status: 201 },
    )
  } catch (err) {
    console.error(err)
    return Response.json({ message: "Error occured while sending your message" }, { status: 500 })
  }
}
