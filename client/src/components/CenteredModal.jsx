"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"

export default function CenteredModal({ isOpen, onClose, title, children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false)
  const modalRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      // Small delay to trigger animation
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 10)

      // Focus trap inside modal
      modalRef.current?.focus()

      // Add escape key listener
      const handleEscape = (e) => {
        if (e.key === "Escape") onClose()
      }
      document.addEventListener("keydown", handleEscape)

      // Prevent scrolling on body
      document.body.style.overflow = "hidden"

      return () => {
        clearTimeout(timer)
        document.removeEventListener("keydown", handleEscape)
        document.body.style.overflow = ""
      }
    } else {
      setIsVisible(false)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 p-4"
      onClick={(e) => {
        // Close when clicking the backdrop
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className={`relative w-full max-w-md rounded-lg bg-white shadow-xl transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } ${className}`}
        style={{
          maxHeight: "90vh",
        }}
        tabIndex={-1}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between border-b p-4">
          <h2 id="modal-title" className="text-xl font-bold text-gray-800">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal content */}
        <div className="overflow-y-auto p-6" style={{ maxHeight: "calc(90vh - 70px)" }}>
          {children}
        </div>
      </div>
    </div>
  )
}
