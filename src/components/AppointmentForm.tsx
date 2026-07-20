import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { appointmentSchema } from "../lib/schema"
import { tabs } from "../lib/data"

type AppointmentFormData = z.infer<typeof appointmentSchema>

export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [isError, setIsError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  })

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true)
    setSubmitMessage("")
    setIsError(false)

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Failed to book appointment")
      }

      setSubmitMessage(result.message)
      reset()
    } catch (error: any) {
      console.error(error)
      setIsError(true)
      setSubmitMessage(error.message || "An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01329C] focus:border-transparent transition"
  const labelClass = "block text-sm font-medium text-gray-700 mb-1"

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 md:px-12 lg:px-24">
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold text-[#01329C] mb-6 border-b pb-4">Book an Appointment</h2>
        
        {submitMessage && (
          <div className={`p-4 mb-6 rounded-md ${isError ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
            {submitMessage}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Full Name</label>
              <input type="text" {...register("name")} className={inputClass} placeholder="John Doe" />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>
            
            <div>
              <label className={labelClass}>Email Address</label>
              <input type="email" {...register("email")} className={inputClass} placeholder="john@example.com" />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label className={labelClass}>Phone Number</label>
              <input type="tel" {...register("phone")} className={inputClass} placeholder="08012345678" />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
            </div>

            <div>
              <label className={labelClass}>Address</label>
              <input type="text" {...register("address")} className={inputClass} placeholder="123 Main St" />
              {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
            </div>

            <div>
              <label className={labelClass}>Age</label>
              <input type="number" {...register("age")} className={inputClass} placeholder="30" />
              {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>}
            </div>

            <div>
              <label className={labelClass}>Sex</label>
              <select {...register("sex")} className={inputClass}>
                <option value="">Select Sex...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.sex && <p className="mt-1 text-sm text-red-600">{errors.sex.message}</p>}
            </div>

            <div>
              <label className={labelClass}>Service Category</label>
              <select {...register("serviceCategory")} className={inputClass}>
                <option value="">Select Category...</option>
                {tabs.map((tab) => (
                  <option key={tab.id} value={tab.label}>{tab.label}</option>
                ))}
              </select>
              {errors.serviceCategory && <p className="mt-1 text-sm text-red-600">{errors.serviceCategory.message}</p>}
            </div>

            <div>
              <label className={labelClass}>Name of Test</label>
              <input type="text" {...register("testName")} className={inputClass} placeholder="e.g. Complete Blood Count" />
              {errors.testName && <p className="mt-1 text-sm text-red-600">{errors.testName.message}</p>}
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>Preferred Collection Option</label>
              <select {...register("collectionOption")} className={inputClass}>
                <option value="">Select Collection Option...</option>
                <option value="Home">Home Collection</option>
                <option value="Office">Office Collection</option>
                <option value="Lab">Visit Lab</option>
              </select>
              {errors.collectionOption && <p className="mt-1 text-sm text-red-600">{errors.collectionOption.message}</p>}
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>Additional Message or Clinical Information (Optional)</label>
              <textarea 
                {...register("additionalMessage")} 
                className={`${inputClass} resize-none`} 
                rows={4}
                placeholder="Any other details we should know about..."
              ></textarea>
              {errors.additionalMessage && <p className="mt-1 text-sm text-red-600">{errors.additionalMessage.message}</p>}
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3 bg-[#01329C] text-white font-semibold rounded-md hover:bg-blue-800 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Appointment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
