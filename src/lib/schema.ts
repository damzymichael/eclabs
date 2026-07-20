import { z } from "zod"

// Todo: How much more should the user enter for background info
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone number is required"),
  datetime: z.string().min(1, "Date and time is required"),
  background: z.string().min(1, "Brief background information is required"),
})

export const appointmentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  age: z.union([z.string().min(1, "Age is required"), z.number()]),
  //@ts-ignore
  sex: z.enum(["Male", "Female", "Other"], { errorMap: () => ({ message: "Gender is required" }) }),
  testName: z.string().min(1, "Name of test is required"),
  serviceCategory: z.string().min(1, "Service category is required"),
  //@ts-ignore
  collectionOption: z.enum(["Home", "Office", "Lab"], {
    errorMap: () => ({ message: "Please select your sample collection option" }),
  }),
  additionalMessage: z.string().optional(),
})
