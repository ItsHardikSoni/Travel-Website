import { Link } from "react-router-dom"
import { Phone } from "lucide-react"

const domesticPlaces = [
  {
    id: 1,
    image: "/manali-vista.png",
    name: "Manali",
    description: "Experience the beauty of snow-capped mountains and lush valleys.",
    price: "₹15,999",
  },
  {
    id: 2,
    image: "/goan-sunset-serenity.png",
    name: "Goa",
    description: "Relax on pristine beaches and enjoy vibrant nightlife.",
    price: "₹12,499",
  },
  {
    id: 3,
    image: "/kerala.jpg",
    name: "Kerala",
    description: "Explore the serene backwaters and lush green landscapes.",
    price: "₹18,999",
  },
  {
    id: 4,
    image: "/rajasthan.jpg",
    name: "Rajasthan",
    description: "Discover the royal heritage and magnificent palaces.",
    price: "₹16,499",
  },
]

export default function DomesticPlaces() {
  return (
    <section className="py-16 bg-[#f2f2f2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] sm:text-4xl">Popular Domestic Destinations</h2>
          <p className="mt-4 text-lg text-[#666666]">Explore the beauty of India with our curated domestic trips</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {domesticPlaces.map((place) => (
            <div
              key={place.id}
              className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-48 w-full">
                <img src={place.image || "/placeholder.svg"} alt={place.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#1a1a1a]">{place.name}</h3>
                <p className="mb-4 text-[#666666]">{place.description}</p>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-[#be4f0a]">{place.price}</span>
                  <span className="text-sm text-[#808080]">Per person</span>
                </div>
                <button className="flex w-full items-center justify-center rounded-md bg-[#be4f0a] px-4 py-2 text-white hover:bg-[#a3450a] focus:outline-none focus:ring-2 focus:ring-[#be4f0a] focus:ring-offset-2">
                  <Phone className="mr-2 h-4 w-4" /> Request Callback
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/tour">
            <button className="rounded-md border border-[#be4f0a] bg-transparent px-6 py-3 text-[#be4f0a] hover:bg-[#be4f0a] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#be4f0a] focus:ring-offset-2">
              View More Domestic Trips
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
