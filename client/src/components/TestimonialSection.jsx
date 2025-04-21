"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "https://source.unsplash.com/random/100x100/?Indian,woman,portrait",
    description:
      "Our trip to Kerala was absolutely amazing! ChaloGhumme took care of everything, from accommodations to transportation. The backwater cruise was the highlight of our journey.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Verma",
    image: "https://source.unsplash.com/random/100x100/?Indian,man,portrait",
    description:
      "I've traveled with many agencies before, but ChaloGhumme stands out for their attention to detail and personalized service. Our Rajasthan tour was perfectly planned.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya Patel",
    image: "https://source.unsplash.com/random/100x100/?young,Indian,woman,portrait",
    description:
      "The Ladakh trip organized by ChaloGhumme was a life-changing experience. The guides were knowledgeable, and the itinerary allowed us to experience both adventure and culture.",
    rating: 4,
  },
  {
    id: 4,
    name: "Vikram Singh",
    image: "https://source.unsplash.com/random/100x100/?Indian,man,beard,portrait",
    description:
      "ChaloGhumme made our family trip to Himachal Pradesh memorable. The accommodations were excellent, and the team was always available to address our concerns.",
    rating: 5,
  },
  {
    id: 5,
    name: "Meera Reddy",
    image: "https://source.unsplash.com/random/100x100/?South,Indian,woman,portrait",
    description:
      "The Andaman trip was well-organized and hassle-free. ChaloGhumme's team was professional and ensured we had the best experience possible.",
    rating: 4,
  },
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState([])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1))
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleTestimonials(testimonials.slice(currentIndex, currentIndex + 1))
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(testimonials.slice(currentIndex, currentIndex + 2))
      } else {
        setVisibleTestimonials(testimonials.slice(currentIndex, currentIndex + 3))
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [currentIndex])

  return (
    <section className="py-16 bg-[#f2f2f2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] sm:text-4xl">What Our Travelers Say</h2>
          <p className="mt-4 text-lg text-[#666666]">Read testimonials from our satisfied customers</p>
        </div>

        <div className="relative">
          <button
            onClick={prevTestimonial}
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-[#f2f2f2] md:-left-6"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-[#be4f0a]" />
          </button>

          <div className="flex flex-wrap justify-center gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full rounded-lg bg-white p-6 shadow-lg sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="mb-4 flex items-center">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-[#1a1a1a]">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "fill-[#be4f0a] text-[#be4f0a]" : "fill-[#e6e6e6] text-[#e6e6e6]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[#666666]">"{testimonial.description}"</p>
              </div>
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-[#f2f2f2] md:-right-6"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-[#be4f0a]" />
          </button>
        </div>
      </div>
    </section>
  )
}
