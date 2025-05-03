"use client"

import { motion } from "framer-motion"
import { CalendarDays } from "lucide-react"
import { Link } from "react-router-dom"

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

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Hidden Gems in Himachal Pradesh",
    date: "May 15, 2023",
    description: "Discover the lesser-known but breathtaking destinations in Himachal Pradesh that most tourists miss.",
    image: "https://source.unsplash.com/random/600x400/?Himachal,Pradesh,mountains",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
  },
  {
    id: 2,
    title: "A Foodie's Guide to South Indian Cuisine",
    date: "June 2, 2023",
    description: "Explore the rich and diverse flavors of South Indian cuisine beyond idli and dosa.",
    image: "https://source.unsplash.com/random/600x400/?South,Indian,food",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
  },
  {
    id: 3,
    title: "Monsoon Travel: Best Places to Visit During Rainy Season",
    date: "July 10, 2023",
    description: "Embrace the rain and explore these beautiful destinations that come alive during the monsoon season.",
    image: "https://source.unsplash.com/random/600x400/?India,monsoon,travel",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
  },
  {
    id: 4,
    title: "Budget Travel: Exploring India Under ₹20,000",
    date: "August 5, 2023",
    description: "Tips and destinations for travelers looking to explore India without breaking the bank.",
    image: "https://source.unsplash.com/random/600x400/?India,budget,travel",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
  },
  {
    id: 5,
    title: "The Ultimate Guide to Ladakh: When to Go and What to See",
    date: "September 12, 2023",
    description: "Everything you need to know about planning a trip to the breathtaking region of Ladakh.",
    image: "https://source.unsplash.com/random/600x400/?Ladakh,mountains",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
  },
  {
    id: 6,
    title: "Wildlife Tourism in India: Top National Parks and Sanctuaries",
    date: "October 8, 2023",
    description: "Explore India's rich biodiversity through its magnificent national parks and wildlife sanctuaries.",
    image: "https://source.unsplash.com/random/600x400/?India,wildlife,tiger",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
  },
]

export default function Blog() {
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
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#1a1a1a] sm:text-5xl">Our Travel Blog</h1>
          <p className="mt-4 text-lg text-[#666666]">Travel tips, destination guides, and stories from the road</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
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
                  <button className="w-full rounded-md bg-[#be4f0a] px-4 py-2 text-white hover:bg-[#a3450a] focus:outline-none focus:ring-2 focus:ring-[#be4f0a] focus:ring-offset-2">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  )
}
