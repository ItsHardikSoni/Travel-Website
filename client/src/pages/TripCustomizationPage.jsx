"use client"

import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { ArrowLeft, ArrowRight, Users, Calendar, Baby, ChevronLeft, User, UserPlus } from "lucide-react"

export default function TripCustomizationPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [place, setPlace] = useState(null)
  const [formData, setFormData] = useState({
    // Trip details
    tripType: "family", // Default to family trip (other options: solo, couple)
    adults: 2,
    children: 0,
    days: 3,
    nights: 2,
    // Personal info
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Get place data from location state
    if (location.state && location.state.place) {
      setPlace(location.state.place)

      // Set default message with place details
      const defaultMessage = `I'm interested in the ${location.state.place.name} package priced at ${location.state.place.price} for ${formData.days} days and ${formData.nights} nights.`
      setFormData((prev) => ({
        ...prev,
        message: defaultMessage,
      }))
    } else {
      // If no place data, redirect back to home
      navigate("/")
    }
  }, [location, navigate])

  // Update message when days/nights change
  useEffect(() => {
    if (place) {
      const defaultMessage = `I'm interested in the ${place.name} package priced at ${place.price} for ${formData.days} days and ${formData.nights} nights.`
      setFormData((prev) => ({
        ...prev,
        message: defaultMessage,
      }))
    }
  }, [formData.days, formData.nights, place])

  // Handle trip type change
  const handleTripTypeChange = (type) => {
    setFormData((prev) => {
      const newData = { ...prev, tripType: type }

      // Update adults based on trip type
      if (type === "solo") {
        newData.adults = 1
      } else if (type === "couple") {
        newData.adults = 2
      }

      return newData
    })
  }

  const handleChange = (e) => {
    const { name, value, type } = e.target

    // Convert to number for number inputs
    const processedValue = type === "number" ? Number.parseInt(value, 10) || 0 : value

    setFormData((prev) => ({ ...prev, [name]: processedValue }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateStep1 = () => {
    const newErrors = {}
    if (formData.adults < 1) newErrors.adults = "At least 1 adult is required"
    if (formData.days < 1) newErrors.days = "At least 1 day is required"
    if (formData.nights < 0) newErrors.nights = "Nights cannot be negative"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    else if (!/^[0-9]{10}$/.test(formData.phone.trim())) newErrors.phone = "Enter a valid 10-digit phone number"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email address"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateStep2()) {
      setIsSubmitting(true)

      // Format the message for WhatsApp
      const message = encodeURIComponent(
        `*New Trip Request*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n\n*Trip Details:*\n*Destination:* ${place?.name || "Not specified"}\n*Price:* ${place?.price || "Not specified"}\n*Trip Type:* ${formData.tripType.charAt(0).toUpperCase() + formData.tripType.slice(1)} Trip\n*Adults:* ${formData.adults}\n*Children:* ${formData.children}\n*Days:* ${formData.days}\n*Nights:* ${formData.nights}\n\n*Message:* ${formData.message}`,
      )

      // WhatsApp API URL with the phone number
      const whatsappUrl = `https://wa.me/919661850789?text=${message}`

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank")

      // Reset form and navigate back
      setIsSubmitting(false)
      navigate("/")
    }
  }

  if (!place) {
    return <div className="container mx-auto px-4 py-16 text-center">Loading...</div>
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button onClick={() => navigate(-1)} className="mb-6 flex items-center text-[#666666] hover:text-[#be4f0a]">
          <ChevronLeft className="h-5 w-5 mr-1" /> Back to destinations
        </button>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-[#be4f0a] text-white p-6">
            <h1 className="text-2xl font-bold">{place.name} - Trip Customization</h1>
            <p className="mt-2">Customize your trip details and request information</p>
          </div>

          {/* Step indicator */}
          <div className="border-b px-6 py-4 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep === 1 ? "bg-[#be4f0a] text-white" : "bg-gray-200 text-gray-700"}`}
                >
                  1
                </div>
                <div className="mx-2 h-1 w-8 bg-gray-200">
                  <div className={`h-full ${currentStep === 2 ? "bg-[#be4f0a]" : "bg-gray-200"}`}></div>
                </div>
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep === 2 ? "bg-[#be4f0a] text-white" : "bg-gray-200 text-gray-700"}`}
                >
                  2
                </div>
              </div>
              <div className="text-sm font-medium text-gray-500">Step {currentStep} of 2</div>
            </div>
          </div>

          {/* Form content */}
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Trip Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-800">Customize Your Trip</h2>

                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium">Selected Package:</span>
                      <span className="font-bold text-[#be4f0a]">{place.price}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Customize your trip details below to get a personalized experience.
                    </p>
                  </div>

                  {/* Trip Type Selection */}
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">Trip Type</label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => handleTripTypeChange("solo")}
                        className={`flex flex-col items-center justify-center rounded-lg border p-3 ${
                          formData.tripType === "solo"
                            ? "border-[#be4f0a] bg-[#be4f0a]/10 text-[#be4f0a]"
                            : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <User className="h-6 w-6 mb-1" />
                        <span className="text-sm font-medium">Solo Trip</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTripTypeChange("couple")}
                        className={`flex flex-col items-center justify-center rounded-lg border p-3 ${
                          formData.tripType === "couple"
                            ? "border-[#be4f0a] bg-[#be4f0a]/10 text-[#be4f0a]"
                            : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <UserPlus className="h-6 w-6 mb-1" />
                        <span className="text-sm font-medium">Couple Trip</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTripTypeChange("family")}
                        className={`flex flex-col items-center justify-center rounded-lg border p-3 ${
                          formData.tripType === "family"
                            ? "border-[#be4f0a] bg-[#be4f0a]/10 text-[#be4f0a]"
                            : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <Users className="h-6 w-6 mb-1" />
                        <span className="text-sm font-medium">Family Trip</span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="mb-1 flex items-center text-sm font-medium text-gray-700">
                        <Users className="mr-2 h-4 w-4 text-[#be4f0a]" />
                        Number of Adults
                      </label>
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="h-10 w-10 rounded-l-md border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200"
                          onClick={() => setFormData((prev) => ({ ...prev, adults: Math.max(1, prev.adults - 1) }))}
                          disabled={formData.tripType === "solo"}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          name="adults"
                          value={formData.adults}
                          onChange={handleChange}
                          min="1"
                          className="h-10 w-16 border-y border-gray-300 p-0 text-center"
                          readOnly={formData.tripType === "solo"}
                        />
                        <button
                          type="button"
                          className="h-10 w-10 rounded-r-md border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200"
                          onClick={() => setFormData((prev) => ({ ...prev, adults: prev.adults + 1 }))}
                          disabled={formData.tripType === "solo"}
                        >
                          +
                        </button>
                      </div>
                      {errors.adults && <p className="mt-1 text-sm text-red-500">{errors.adults}</p>}
                    </div>

                    <div>
                      <label className="mb-1 flex items-center text-sm font-medium text-gray-700">
                        <Baby className="mr-2 h-4 w-4 text-[#be4f0a]" />
                        Number of Children
                      </label>
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="h-10 w-10 rounded-l-md border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200"
                          onClick={() => setFormData((prev) => ({ ...prev, children: Math.max(0, prev.children - 1) }))}
                          disabled={formData.tripType === "solo" || formData.tripType === "couple"}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          name="children"
                          value={formData.children}
                          onChange={handleChange}
                          min="0"
                          className="h-10 w-16 border-y border-gray-300 p-0 text-center"
                          readOnly={formData.tripType === "solo" || formData.tripType === "couple"}
                        />
                        <button
                          type="button"
                          className="h-10 w-10 rounded-r-md border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200"
                          onClick={() => setFormData((prev) => ({ ...prev, children: prev.children + 1 }))}
                          disabled={formData.tripType === "solo" || formData.tripType === "couple"}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 flex items-center text-sm font-medium text-gray-700">
                        <Calendar className="mr-2 h-4 w-4 text-[#be4f0a]" />
                        Duration
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="mb-1 block text-xs text-gray-500">Days</label>
                          <div className="flex items-center">
                            <button
                              type="button"
                              className="h-10 w-10 rounded-l-md border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200"
                              onClick={() => setFormData((prev) => ({ ...prev, days: Math.max(1, prev.days - 1) }))}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              name="days"
                              value={formData.days}
                              onChange={handleChange}
                              min="1"
                              className="h-10 w-16 border-y border-gray-300 p-0 text-center"
                            />
                            <button
                              type="button"
                              className="h-10 w-10 rounded-r-md border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200"
                              onClick={() => setFormData((prev) => ({ ...prev, days: prev.days + 1 }))}
                            >
                              +
                            </button>
                          </div>
                          {errors.days && <p className="mt-1 text-sm text-red-500">{errors.days}</p>}
                        </div>
                        <div>
                          <label className="mb-1 block text-xs text-gray-500">Nights</label>
                          <div className="flex items-center">
                            <button
                              type="button"
                              className="h-10 w-10 rounded-l-md border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200"
                              onClick={() => setFormData((prev) => ({ ...prev, nights: Math.max(0, prev.nights - 1) }))}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              name="nights"
                              value={formData.nights}
                              onChange={handleChange}
                              min="0"
                              className="h-10 w-16 border-y border-gray-300 p-0 text-center"
                            />
                            <button
                              type="button"
                              className="h-10 w-10 rounded-r-md border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200"
                              onClick={() => setFormData((prev) => ({ ...prev, nights: prev.nights + 1 }))}
                            >
                              +
                            </button>
                          </div>
                          {errors.nights && <p className="mt-1 text-sm text-red-500">{errors.nights}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-800">Your Information</h2>

                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2">
                      <span className="font-medium">Trip Summary:</span>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>
                        <span className="font-medium">Destination:</span> {place.name}
                      </li>
                      <li>
                        <span className="font-medium">Package:</span> {place.price}
                      </li>
                      <li>
                        <span className="font-medium">Trip Type:</span>{" "}
                        {formData.tripType.charAt(0).toUpperCase() + formData.tripType.slice(1)} Trip
                      </li>
                      <li>
                        <span className="font-medium">Travelers:</span> {formData.adults} Adults, {formData.children}{" "}
                        Children
                      </li>
                      <li>
                        <span className="font-medium">Duration:</span> {formData.days} Days, {formData.nights} Nights
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full rounded-md border ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        } px-3 py-2 focus:border-[#be4f0a] focus:outline-none focus:ring-1 focus:ring-[#be4f0a]`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full rounded-md border ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        } px-3 py-2 focus:border-[#be4f0a] focus:outline-none focus:ring-1 focus:ring-[#be4f0a]`}
                        placeholder="9876543210"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-md border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } px-3 py-2 focus:border-[#be4f0a] focus:outline-none focus:ring-1 focus:ring-[#be4f0a]`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Query
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#be4f0a] focus:outline-none focus:ring-1 focus:ring-[#be4f0a]"
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="mt-8 flex justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#be4f0a] focus:ring-offset-2"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#be4f0a] focus:ring-offset-2"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Cancel
                  </button>
                )}

                {currentStep < 2 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="flex items-center rounded-md bg-[#be4f0a] px-4 py-2 text-sm font-medium text-white hover:bg-[#a3450a] focus:outline-none focus:ring-2 focus:ring-[#be4f0a] focus:ring-offset-2"
                  >
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center rounded-md bg-[#be4f0a] px-4 py-2 text-sm font-medium text-white hover:bg-[#a3450a] focus:outline-none focus:ring-2 focus:ring-[#be4f0a] focus:ring-offset-2 disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
