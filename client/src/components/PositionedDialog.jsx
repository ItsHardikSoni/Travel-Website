"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"

export default function PositionedDialog({
  isOpen,
  onClose,
  title,
  children,
  className = "",
  position = { x: 0, y: 0 },
}) {
  const [isVisible, setIsVisible] = useState(false)
  const dialogRef = useRef(null)
  const [dialogPosition, setDialogPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (isOpen) {
      // Calculate position to ensure dialog stays within viewport
      const calculatePosition = () => {
        if (!dialogRef.current) return { x: position.x, y: position.y }

        const dialogRect = dialogRef.current.getBoundingClientRect()
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight

        // Initial position centered on click point
        let x = position.x - dialogRect.width / 2
        let y = position.y - dialogRect.height / 2

        // Adjust if dialog would go off screen
        if (x < 10) x = 10
        if (y < 10) y = 10
        if (x + dialogRect.width > viewportWidth - 10) x = viewportWidth - dialogRect.width - 10
        if (y + dialogRect.height > viewportHeight - 10) y = viewportHeight - dialogRect.height - 10

        return { x, y }
      }

      // Small delay to trigger animation and calculate position
      const timer = setTimeout(() => {
        const pos = calculatePosition()
        setDialogPosition(pos)
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
  }, [isOpen, position, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50" onClick={onClose} style={{ pointerEvents: "all" }}>
      <div
        ref={dialogRef}
        className={`absolute bg-white rounded-lg shadow-xl transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } ${className}`}
        style={{
          left: `${dialogPosition.x}px`,
          top: `${dialogPosition.y}px`,
          maxHeight: "80vh",
          maxWidth: "90vw",
          width: "500px",
          transform: isVisible ? "translate(0, 0)" : "translate(0, 20px)",
          pointerEvents: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
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
    </div>
  )
}
