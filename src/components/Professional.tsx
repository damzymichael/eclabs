import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import axios from "axios"
import { contactSchema } from "../lib/schema"

type ContactFormData = z.infer<typeof contactSchema>

function Professional() {
  const [isOpen, setIsOpen] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setErrorMsg("")
    try {
      const response = await axios.post("/api/contact", data)
      setSuccessMessage(response.data.message)
      reset()
    } catch (err) {
      setErrorMsg("Failed to send your request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setIsOpen(false)
    setSuccessMessage("")
    setErrorMsg("")
    reset()
  }

  return (
    <div>
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-[#9B0100] text-white px-8 py-3 text-lg font-medium rounded-full transition duration-200 hover:scale-x-105 cursor-pointer"
      >
        Speak to a professional
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative my-8">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold cursor-pointer"
            >
              &times;
            </button>
            
            <h2 className="text-2xl font-bold text-[#01329C] mb-6">Contact a Professional</h2>

            {successMessage ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg text-center">
                <p className="font-medium text-lg">{successMessage}</p>
                <button
                  onClick={closeModal}
                  className="mt-6 bg-[#01329C] text-white px-6 py-2 rounded-full font-medium hover:opacity-90 cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-red-50 text-red-600 rounded border border-red-200">
                    {errorMsg}
                  </div>
                )}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Name</label>
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01329C] focus:outline-none"
                    placeholder="Your Full Name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Phone number</label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01329C] focus:outline-none"
                    placeholder="Your Phone Number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Date and time</label>
                  <input
                    {...register("datetime")}
                    type="datetime-local"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01329C] focus:outline-none text-gray-800"
                  />
                  {errors.datetime && <p className="text-red-500 text-sm mt-1">{errors.datetime.message}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Brief background information</label>
                  <textarea
                    {...register("background")}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01329C] focus:outline-none"
                    placeholder="Provide some details..."
                  ></textarea>
                  {errors.background && <p className="text-red-500 text-sm mt-1">{errors.background.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#9B0100] text-white py-3 rounded-lg font-bold text-lg hover:opacity-90 transition disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Professional
