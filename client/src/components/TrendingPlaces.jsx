import { Link } from "react-router-dom"
import { Phone } from "lucide-react"

const trendingPlaces = [
  {
    id: 1,
    image: "/ladakh.jpg",
    name: "Ladakh",
    description: "Adventure through the breathtaking landscapes of the Himalayas.",
    price: "₹22,999",
  },
  {
    id: 2,
    image: "/andaman.jpg",
    name: "Andaman",
    description: "Discover pristine beaches and crystal-clear waters.",
    price: "₹24,499",
  },
  {
    id: 3,
    image: "/darjeeling.jpg",
    name: "Darjeeling",
    description: "Enjoy the scenic beauty of tea gardens and mountain views.",
    price: "₹17,999",
  },
  {
    id: 4,
    image: "varanasi.avif",
    name: "Varanasi",
    description: "Experience the spiritual essence of India's oldest city.",
    price: "₹14,499",
  },
]

export default function TrendingPlaces() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] sm:text-4xl">Trending Destinations</h2>
          <p className="mt-4 text-lg text-[#666666]">
            Discover the most popular destinations that travelers are loving right now
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trendingPlaces.map((place) => (
            <div
              key={place.id}
              className="overflow-hidden rounded-lg bg-[#f2f2f2] shadow-lg transition-transform hover:scale-105"
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
              View More Trending Trips
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
