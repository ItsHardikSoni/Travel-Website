import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-[#be4f0a]">ChaloGhumme</h3>
            <p className="mb-4 text-[#b3b3b3]">
              Your trusted partner for unforgettable travel experiences across India.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-[#b3b3b3] hover:text-[#be4f0a]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="text-[#b3b3b3] hover:text-[#be4f0a]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="#" className="text-[#b3b3b3] hover:text-[#be4f0a]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#" className="text-[#b3b3b3] hover:text-[#be4f0a]">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#b3b3b3] hover:text-[#be4f0a]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#b3b3b3] hover:text-[#be4f0a]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/tour" className="text-[#b3b3b3] hover:text-[#be4f0a]">
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#b3b3b3] hover:text-[#be4f0a]">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#b3b3b3] hover:text-[#be4f0a]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tour?destination=kerala" className="text-[#b3b3b3] hover:text-[#be4f0a]">
                  Kerala
                </Link>
              </li>
              <li>
                <Link to="/tour?destination=rajasthan" className="text-[#b3b3b3] hover:text-[#be4f0a]">
                  Rajasthan
                </Link>
              </li>
              <li>
                <Link to="/tour?destination=himachal" className="text-[#b3b3b3] hover:text-[#be4f0a]">
                  Himachal Pradesh
                </Link>
              </li>
              <li>
                <Link to="/tour?destination=goa" className="text-[#b3b3b3] hover:text-[#be4f0a]">
                  Goa
                </Link>
              </li>
              <li>
                <Link to="/tour?destination=andaman" className="text-[#b3b3b3] hover:text-[#be4f0a]">
                  Andaman
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-[#be4f0a]" />
                <span className="text-[#b3b3b3]">123 Travel Street, New Delhi, India - 110001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-[#be4f0a]" />
                <span className="text-[#b3b3b3]">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-[#be4f0a]" />
                <span className="text-[#b3b3b3]">info@chaloghumme.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#333333] pt-8 text-center">
          <p className="text-[#b3b3b3]">&copy; {new Date().getFullYear()} ChaloGhumme. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
