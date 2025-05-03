"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"

export default function SlideDownDialog({ isOpen, onClose, title, children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false)
  const dialogRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      // Small delay to trigger animation
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 10)

      // Add escape key listener
      const handleEscape = (e) => {
        if (e.key === "Escape") onClose()
      }
      document.addEventListener("keydown", handleEscape)

      return () => {
        clearTimeout(timer)
        document.removeEventListener("keydown", handleEscape)
      }
    } else {
      setIsVisible(false)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-center" onClick={(e) => e.stopPropagation()}>
      <div
        ref={dialogRef}
        className={`absolute top-0 w-full max-w-4xl bg-white shadow-xl transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${className}`}
        style={{ maxHeight: "80vh" }}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-2xl font-bold text-[#0a5045]">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500 focus:outline-none" aria-label="Close">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Dialog content */}
        <div className="overflow-y-auto p-6" style={{ maxHeight: "calc(80vh - 70px)" }}>
          {children}
        </div>
      </div>

      {/* Invisible overlay to capture clicks outside */}
      {isVisible && <div className="fixed inset-0 bg-transparent -z-10" onClick={onClose} aria-hidden="true" />}
    </div>
  )
}
