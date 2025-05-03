"use client"

import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Phone, MapPin, Calendar, Users, Search } from "lucide-react"

// Animation variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
}

// Import tour data
const tours = [
  {
    id: 1,
    name: "Magical Manali",
    state: "Himachal Pradesh",
    image: "https://source.unsplash.com/random/600x400/?Manali,mountains",
    description: "Experience the beauty of snow-capped mountains and lush valleys in Manali.",
    price: "₹15,999",
    duration: "5 Days / 4 Nights",
    groupSize: "2-10 People",
    trending: true,
  },
  {
    id: 2,
    name: "Goa Beach Retreat",
    state: "Goa",
    image: "https://source.unsplash.com/random/600x400/?Goa,beach",
    description: "Relax on pristine beaches and enjoy vibrant nightlife in Goa.",
    price: "₹12,499",
    duration: "4 Days / 3 Nights",
    groupSize: "2-8 People",
    trending: true,
  },
  {
    id: 3,
    name: "Kerala Backwaters",
    state: "Kerala",
    image: "https://source.unsplash.com/random/600x400/?Kerala,backwaters",
    description: "Explore the serene backwaters and lush green landscapes of Kerala.",
    price: "₹18,999",
    duration: "6 Days / 5 Nights",
    groupSize: "2-6 People",
    trending: false,
  },
  {
    id: 4,
    name: "Royal Rajasthan",
    state: "Rajasthan",
    image: "https://source.unsplash.com/random/600x400/?Rajasthan,palace",
    description: "Discover the royal heritage and magnificent palaces of Rajasthan.",
    price: "₹16,499",
    duration: "7 Days / 6 Nights",
    groupSize: "2-12 People",
    trending: false,
  },
  {
    id: 5,
    name: "Ladakh Adventure",
    state: "Ladakh",
    image: "https://source.unsplash.com/random/600x400/?Ladakh,mountains",
    description: "Adventure through the breathtaking landscapes of the Himalayas in Ladakh.",
    price: "₹22,999",
    duration: "8 Days / 7 Nights",
    groupSize: "4-10 People",
    trending: true,
  },
  {
    id: 6,
    name: "Andaman Island Escape",
    state: "Andaman",
    image: "https://source.unsplash.com/random/600x400/?Andaman,beach",
    description: "Discover pristine beaches and crystal-clear waters of Andaman Islands.",
    price: "₹24,499",
    duration: "6 Days / 5 Nights",
    groupSize: "2-8 People",
    trending: true,
  },
  {
    id: 7,
    name: "Darjeeling Tea Trails",
    state: "West Bengal",
    image: "https://source.unsplash.com/random/600x400/?Darjeeling,tea",
    description: "Enjoy the scenic beauty of tea gardens and mountain views in Darjeeling.",
    price: "₹17,999",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    trending: true,
  },
  {
    id: 8,
    name: "Varanasi Spiritual Journey",
    state: "Uttar Pradesh",
    image: "https://source.unsplash.com/random/600x400/?Varanasi,ghats",
    description: "Experience the spiritual essence of India's oldest city, Varanasi.",
    price: "₹14,499",
    duration: "4 Days / 3 Nights",
    groupSize: "2-10 People",
    trending: false,
  },
]

// Add domestic places data
const domesticPlaces = [
  {
    id: 101,
    image: "https://source.unsplash.com/random/600x400/?manali,mountains",
    name: "Manali",
    description: "Experience the beauty of snow-capped mountains and lush valleys.",
    price: "₹15,999",
    state: "Himachal Pradesh",
  },
  {
    id: 102,
    image: "https://source.unsplash.com/random/600x400/?goa,beach,sunset",
    name: "Goa",
    description: "Relax on pristine beaches and enjoy vibrant nightlife.",
    price: "₹12,499",
    state: "Goa",
  },
  {
    id: 103,
    image: "https://source.unsplash.com/random/600x400/?kerala,backwaters",
    name: "Kerala",
    description: "Explore the serene backwaters and lush green landscapes.",
    price: "₹18,999",
    state: "Kerala",
  },
  {
    id: 104,
    image: "https://source.unsplash.com/random/600x400/?rajasthan,palace",
    name: "Rajasthan",
    description: "Discover the royal heritage and magnificent palaces.",
    price: "₹16,499",
    state: "Rajasthan",
  },
]

// Combine all searchable data
const allSearchableData = [...tours, ...domesticPlaces]

export default function SearchResults() {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const query = params.get("q") || ""
    setSearchQuery(query)

    if (query) {
      performSearch(query)
    } else {
      setSearchResults([])
    }
    setIsLoading(false)
  }, [location.search])

  const performSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase()

    // Search through all data
    const results = allSearchableData.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerCaseQuery) ||
        item.state.toLowerCase().includes(lowerCaseQuery) ||
        item.description.toLowerCase().includes(lowerCaseQuery),
    )

    // Remove duplicates (based on name and state)
    const uniqueResults = Array.from(new Map(results.map((item) => [`${item.name}-${item.state}`, item])).values())

    setSearchResults(uniqueResults)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleRequestCallback = (item) => {
    // Extract days and nights from duration string if available
    let days = 3
    let nights = 2

    if (item.duration) {
      const durationMatch = item.duration.match(/(\d+)\s*Days\s*\/\s*(\d+)\s*Nights/)
      if (durationMatch) {
        days = Number.parseInt(durationMatch[1])
        nights = Number.parseInt(durationMatch[2])
      }
    }

    // Create enhanced item object with days and nights
    const enhancedItem = {
      ...item,
      days,
      nights,
    }

    // Navigate to the trip customization page with the item data
    navigate("/customize-trip", { state: { place: enhancedItem } })
  }

  return (
    <motion.main
      className="min-h-screen py-16"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#1a1a1a] sm:text-4xl">Search Results</h1>
          <p className="mt-2 text-lg text-[#666666]">
            {searchQuery ? `Showing results for "${searchQuery}"` : "Enter a search term to find destinations"}
          </p>
        </div>

        {/* Search form */}
        <div className="mx-auto mb-8 max-w-xl">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            <input
              type="search"
              placeholder="Search destinations, states, or experiences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-gray-300 py-3 pl-10 pr-4 focus:border-[#be4f0a] focus:outline-none focus:ring-2 focus:ring-[#be4f0a]"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#be4f0a] px-4 py-1 text-white hover:bg-[#a3450a]"
            >
              Search
            </button>
          </form>
        </div>

        {/* Results */}
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#be4f0a] border-t-transparent"></div>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {searchResults.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative h-48 w-full">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-full object-cover" />
                  {item.trending && (
                    <div className="absolute right-0 top-0 bg-[#be4f0a] px-3 py-1 text-sm font-bold text-white">
                      Trending
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-[#1a1a1a]">{item.name}</h3>
                  <div className="mb-2 flex items-center text-sm text-[#808080]">
                    <MapPin className="mr-1 h-4 w-4 text-[#be4f0a]" />
                    {item.state}
                  </div>
                  <p className="mb-4 text-[#666666]">{item.description}</p>

                  {item.duration && (
                    <div className="mb-4 flex flex-wrap gap-3 text-sm">
                      <div className="flex items-center text-[#666666]">
                        <Calendar className="mr-1 h-4 w-4 text-[#be4f0a]" />
                        {item.duration}
                      </div>
                      {item.groupSize && (
                        <div className="flex items-center text-[#666666]">
                          <Users className="mr-1 h-4 w-4 text-[#be4f0a]" />
                          {item.groupSize}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-[#be4f0a]">{item.price}</span>
                    <span className="text-sm text-[#808080]">Per person</span>
                  </div>

                  <button
                    className="flex w-full items-center justify-center rounded-md bg-[#be4f0a] px-4 py-2 text-white hover:bg-[#a3450a] focus:outline-none focus:ring-2 focus:ring-[#be4f0a] focus:ring-offset-2"
                    onClick={() => handleRequestCallback(item)}
                  >
                    <Phone className="mr-2 h-4 w-4" /> Request Callback
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : searchQuery ? (
          <div className="py-12 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-[#1a1a1a]">No results found</h2>
            <p className="text-[#666666]">
              We couldn't find any destinations matching "{searchQuery}". Try a different search term or browse our
              tours.
            </p>
            <button
              onClick={() => navigate("/tour")}
              className="mt-6 rounded-md bg-[#be4f0a] px-6 py-2 text-white hover:bg-[#a3450a] focus:outline-none focus:ring-2 focus:ring-[#be4f0a] focus:ring-offset-2"
            >
              Browse All Tours
            </button>
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-[#1a1a1a]">Search for destinations</h2>
            <p className="text-[#666666]">
              Enter a destination, state, or experience in the search box above to find your perfect trip.
            </p>
            <button
              onClick={() => navigate("/tour")}
              className="mt-6 rounded-md bg-[#be4f0a] px-6 py-2 text-white hover:bg-[#a3450a] focus:outline-none focus:ring-2 focus:ring-[#be4f0a] focus:ring-offset-2"
            >
              Browse All Tours
            </button>
          </div>
        )}
      </div>
    </motion.main>
  )
}
