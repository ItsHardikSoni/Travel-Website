import { Link } from "react-router-dom"
import { CalendarDays } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Hidden Gems in Himachal Pradesh",
    date: "May 15, 2023",
    description: "Discover the lesser-known but breathtaking destinations in Himachal Pradesh that most tourists miss.",
    image: "https://source.unsplash.com/random/600x400/?Himachal,Pradesh,mountains",
  },
  {
    id: 2,
    title: "A Foodie's Guide to South Indian Cuisine",
    date: "June 2, 2023",
    description: "Explore the rich and diverse flavors of South Indian cuisine beyond idli and dosa.",
    image: "https://source.unsplash.com/random/600x400/?South,Indian,food",
  },
  {
    id: 3,
    title: "Monsoon Travel: Best Places to Visit During Rainy Season",
    date: "July 10, 2023",
    description: "Embrace the rain and explore these beautiful destinations that come alive during the monsoon season.",
    image: "https://source.unsplash.com/random/600x400/?India,monsoon,travel",
  },
  {
    id: 4,
    title: "Budget Travel: Exploring India Under ₹20,000",
    date: "August 5, 2023",
    description: "Tips and destinations for travelers looking to explore India without breaking the bank.",
    image: "https://source.unsplash.com/random/600x400/?India,budget,travel",
  },
]

export default function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] sm:text-4xl">Latest from Our Blog</h2>
          <p className="mt-4 text-lg text-[#666666]">Travel tips, destination guides, and stories from the road</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="overflow-hidden rounded-lg bg-[#f2f2f2] shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-48 w-full">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center text-sm text-[#808080]">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {post.date}
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#1a1a1a]">{post.title}</h3>
                <p className="mb-4 text-[#666666]">{post.description}</p>
                <Link to={`/blog/${post.id}`}>
                  <button className="w-full rounded-md border border-[#be4f0a] bg-transparent px-4 py-2 text-[#be4f0a] hover:bg-[#be4f0a] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#be4f0a] focus:ring-offset-2">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/blog">
            <button className="rounded-md bg-[#be4f0a] px-6 py-3 text-white hover:bg-[#a3450a] focus:outline-none focus:ring-2 focus:ring-[#be4f0a] focus:ring-offset-2">
              View All Blog Posts
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
