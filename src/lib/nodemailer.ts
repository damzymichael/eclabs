import nodemailer from "nodemailer"

// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: import.meta.env.ADMIN_EMAIL,
//     pass: import.meta.env.ADMIN_PASSWORD,
//   },
// })

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: import.meta.env.ADMIN_EMAIL,
    pass: import.meta.env.ADMIN_PASSWORD,
  },
})

export { transporter }
