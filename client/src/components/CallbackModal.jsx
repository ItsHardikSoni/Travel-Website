"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"

export default function CallbackModal({ isOpen, onClose, position, place }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const modalRef = useRef(null)

  useEffect(() => {
    if (isOpen && place) {
      // Pre-fill the message with the place name
      setFormData((prev) => ({
        ...prev,
        message: `I'm interested in the ${place.name} package priced at ${place.price}.`,
      }))
    }
  }, [isOpen, place])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    else if (!/^[0-9]{10}$/.test(formData.phone.trim())) newErrors.phone = "Enter a valid 10-digit phone number"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email address"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)

      // Format the message for WhatsApp
      const message = encodeURIComponent(
        `*New Callback Request*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Destination:* ${place?.name || "Not specified"}\n*Price:* ${place?.price || "Not specified"}\n*Message:* ${formData.message}`,
      )

      // WhatsApp API URL with the phone number
      const whatsappUrl = `https://wa.me/919661850789?text=${message}`

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank")

      // Reset form and close modal
      setFormData({ name: "", phone: "", email: "", message: "" })
      setIsSubmitting(false)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div
        ref={modalRef}
        className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
        style={{
          maxHeight: "calc(100vh - 40px)",
          overflowY: "auto",
        }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="mb-6 text-center text-2xl font-bold text-[#1a1a1a]">Request a Callback</h3>

        {place && (
          <div className="mb-6 rounded-lg bg-[#f2f2f2] p-4">
            <h4 className="font-medium text-[#1a1a1a]">Selected Destination:</h4>
            <p className="text-[#be4f0a] font-bold">
              {place.name} - {place.price}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#4d4d4d]">
              Your Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full rounded-md border ${
                errors.name ? "border-red-500" : "border-[#e6e6e6]"
              } p-3 focus:border-[#be4f0a] focus:outline-none focus:ring-1 focus:ring-[#be4f0a]`}
              placeholder="John Doe"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#4d4d4d]">
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full rounded-md border ${
                errors.phone ? "border-red-500" : "border-[#e6e6e6]"
              } p-3 focus:border-[#be4f0a] focus:outline-none focus:ring-1 focus:ring-[#be4f0a]`}
              placeholder="9876543210"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#4d4d4d]">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full rounded-md border ${
                errors.email ? "border-red-500" : "border-[#e6e6e6]"
              } p-3 focus:border-[#be4f0a] focus:outline-none focus:ring-1 focus:ring-[#be4f0a]`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#4d4d4d]">
              Your Query*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`w-full rounded-md border ${
                errors.message ? "border-red-500" : "border-[#e6e6e6]"
              } p-3 focus:border-[#be4f0a] focus:outline-none focus:ring-1 focus:ring-[#be4f0a]`}
              placeholder="I'm interested in booking a trip to..."
            ></textarea>
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-[#be4f0a] px-4 py-3 text-white hover:bg-[#a3450a] focus:outline-none focus:ring-2 focus:ring-[#be4f0a] focus:ring-offset-2 disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>

          <p className="mt-3 text-center text-xs text-[#666666]">We'll get back to you as soon as possible!</p>
        </form>
      </div>
    </div>
  )
}
