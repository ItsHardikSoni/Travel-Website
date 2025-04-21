"use client"

import { useRef } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"

const states = [
  {
    id: 1,
    name: "Himachal Pradesh",
    image: "/manali-vista.png",
  },
  {
    id: 2,
    name: "Rajasthan",
    image: "/rajasthan.jpg",
  },
  {
    id: 3,
    name: "Kerala",
    image: "kerala.jpg",
  },
  {
    id: 4,
    name: "Goa",
    image: "/goan-sunset-serenity.png",
  },
  {
    id: 5,
    name: "Uttarakhand",
    image: "https://source.unsplash.com/random/300x300/?Uttarakhand,mountains",
  },
  {
    id: 6,
    name: "Maharashtra",
    image: "https://source.unsplash.com/random/300x300/?Maharashtra,forts",
  },
  {
    id: 7,
    name: "Tamil Nadu",
    image: "https://source.unsplash.com/random/300x300/?Tamil,Nadu,temples",
  },
  {
    id: 8,
    name: "Gujarat",
    image: "https://source.unsplash.com/random/300x300/?Gujarat,Rann,Kutch",
  },
]

export default function DomesticStates() {
  const carouselRef = useRef(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 bg-[#f2f2f2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] sm:text-4xl">Explore Indian States</h2>
          <p className="mt-4 text-lg text-[#666666]">Discover the diverse beauty of India's states</p>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-[#f2f2f2] md:-left-6"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-[#be4f0a]" />
          </button>

          <div
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {states.map((state) => (
              <Link
                key={state.id}
                to={`/tour?state=${state.name}`}
                className="flex-shrink-0 transition-transform hover:scale-105"
              >
                <div className="relative h-48 w-48 overflow-hidden rounded-lg sm:h-56 sm:w-56">
                  <img
                    src={state.image || "/placeholder.svg"}
                    alt={state.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 w-full p-4">
                    <h3 className="text-center text-lg font-bold text-white">{state.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-[#f2f2f2] md:-right-6"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-[#be4f0a]" />
          </button>
        </div>
      </div>
    </section>
  )
}
