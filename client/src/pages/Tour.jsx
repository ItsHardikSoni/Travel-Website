"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Phone, Filter, MapPin, Calendar, Users } from "lucide-react"

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

export default function Tour() {
  const [filteredTours, setFilteredTours] = useState([])
  const [filter, setFilter] = useState({
    state: "",
    trending: false,
  })

  const location = useLocation()

  useEffect(() => {
    // Get query parameters from URL
    const searchParams = new URLSearchParams(location.search)
    const stateParam = searchParams.get("state")

    if (stateParam) {
      setFilter((prev) => ({ ...prev, state: stateParam }))
    }

    // Apply filters
    applyFilters()
  }, [location.search])

  useEffect(() => {
    applyFilters()
  }, [filter])

  const applyFilters = () => {
    let result = [...tours]

    if (filter.state) {
      result = result.filter((tour) => tour.state === filter.state)
    }

    if (filter.trending) {
      result = result.filter((tour) => tour.trending)
    }

    setFilteredTours(result)
  }

  const handleStateChange = (e) => {
    setFilter((prev) => ({ ...prev, state: e.target.value }))
  }

  const handleTrendingChange = (e) => {
    setFilter((prev) => ({ ...prev, trending: e.target.checked }))
  }

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#1a1a1a] sm:text-5xl">Our Tours</h1>
          <p className="mt-4 text-lg text-[#666666]">Discover the best travel experiences across India</p>
        </div>

        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="rounded-lg bg-[#f2f2f2] p-6">
              <h2 className="mb-4 flex items-center text-xl font-bold text-[#1a1a1a]">
                <Filter className="mr-2 h-5 w-5 text-[#be4f0a]" /> Filters
              </h2>

              <div className="mb-4">
                <label htmlFor="state" className="mb-2 block text-sm font-medium text-[#4d4d4d]">
                  State
                </label>
                <select
                  id="state"
                  value={filter.state}
                  onChange={handleStateChange}
                  className="w-full rounded-md border border-[#e6e6e6] p-2 focus:border-[#be4f0a] focus:outline-none focus:ring-1 focus:ring-[#be4f0a]"
                >
                  <option value="">All States</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Goa">Goa</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Andaman">Andaman</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                </select>
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="trending"
                  checked={filter.trending}
                  onChange={handleTrendingChange}
                  className="h-4 w-4 rounded border-[#e6e6e6] text-[#be4f0a] focus:ring-[#be4f0a]"
                />
                <label htmlFor="trending" className="ml-2 text-sm font-medium text-[#4d4d4d]">
                  Trending Only
                </label>
              </div>

              <button
                onClick={() => setFilter({ state: "", trending: false })}
                className="mt-4 w-full rounded-md border border-[#be4f0a] bg-transparent px-4 py-2 text-[#be4f0a] hover:bg-[#be4f0a] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#be4f0a] focus:ring-offset-2"
              >
                Reset Filters
              </button>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTours.length > 0 ? (
                filteredTours.map((tour) => (
                  <div
                    key={tour.id}
                    className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
                  >
                    <div className="relative h-48 w-full">
                      <img
                        src={tour.image || "/placeholder.svg"}
                        alt={tour.name}
                        className="h-full w-full object-cover"
                      />
                      {tour.trending && (
                        <div className="absolute right-0 top-0 bg-[#be4f0a] px-3 py-1 text-sm font-bold text-white">
                          Trending
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-xl font-bold text-[#1a1a1a]">{tour.name}</h3>
                      <div className="mb-2 flex items-center text-sm text-[#808080]">
                        <MapPin className="mr-1 h-4 w-4 text-[#be4f0a]" />
                        {tour.state}
                      </div>
                      <p className="mb-4 text-[#666666]">{tour.description}</p>

                      <div className="mb-4 flex flex-wrap gap-3 text-sm">
                        <div className="flex items-center text-[#666666]">
                          <Calendar className="mr-1 h-4 w-4 text-[#be4f0a]" />
                          {tour.duration}
                        </div>
                        <div className="flex items-center text-[#666666]">
                          <Users className="mr-1 h-4 w-4 text-[#be4f0a]" />
                          {tour.groupSize}
                        </div>
                      </div>

                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-lg font-bold text-[#be4f0a]">{tour.price}</span>
                        <span className="text-sm text-[#808080]">Per person</span>
                      </div>

                      <button className="flex w-full items-center justify-center rounded-md bg-[#be4f0a] px-4 py-2 text-white hover:bg-[#a3450a] focus:outline-none focus:ring-2 focus:ring-[#be4f0a] focus:ring-offset-2">
                        <Phone className="mr-2 h-4 w-4" /> Request Callback
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-12 text-center">
                  <p className="text-lg text-[#666666]">No tours found matching your filters.</p>
                  <button
                    onClick={() => setFilter({ state: "", trending: false })}
                    className="mt-4 rounded-md bg-[#be4f0a] px-4 py-2 text-white hover:bg-[#a3450a] focus:outline-none focus:ring-2 focus:ring-[#be4f0a] focus:ring-offset-2"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
