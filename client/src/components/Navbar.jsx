"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Search, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#be4f0a]">ChaloGhumme</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="search"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 rounded-full border border-gray-300 py-2 pl-9 pr-4 focus:border-[#be4f0a] focus:outline-none focus:ring-2 focus:ring-[#be4f0a]"
              />
            </form>
          </nav>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-[#4d4d4d] hover:text-[#be4f0a]">
              Home
            </Link>
            <Link to="/tour" className="text-[#4d4d4d] hover:text-[#be4f0a]">
              Tour
            </Link>
            <Link to="/blog" className="text-[#4d4d4d] hover:text-[#be4f0a]">
              Blog
            </Link>
            <Link to="/about" className="text-[#4d4d4d] hover:text-[#be4f0a]">
              About
            </Link>
            <Link to="/contact" className="text-[#4d4d4d] hover:text-[#be4f0a]">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-[#be4f0a]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <form onSubmit={handleSearch} className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="search"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-gray-300 py-2 pl-9 pr-4 focus:border-[#be4f0a] focus:outline-none focus:ring-2 focus:ring-[#be4f0a]"
              />
            </form>
            <Link
              to="/"
              className="block py-2 text-[#4d4d4d] hover:text-[#be4f0a]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/tour"
              className="block py-2 text-[#4d4d4d] hover:text-[#be4f0a]"
              onClick={() => setIsMenuOpen(false)}
            >
              Tour
            </Link>
            <Link
              to="/blog"
              className="block py-2 text-[#4d4d4d] hover:text-[#be4f0a]"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="block py-2 text-[#4d4d4d] hover:text-[#be4f0a]"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-[#4d4d4d] hover:text-[#be4f0a]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
