import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#1a1a1a] sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-[#666666]">We'd love to hear from you</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-[#f2f2f2] p-8">
            <h2 className="mb-6 text-2xl font-bold text-[#1a1a1a]">Get in Touch</h2>

            <div className="mb-6 flex items-start">
              <MapPin className="mr-4 h-6 w-6 text-[#be4f0a]" />
              <div>
                <h3 className="font-bold text-[#1a1a1a]">Our Office</h3>
                <p className="text-[#666666]">123 Travel Street, New Delhi, India - 110001</p>
              </div>
            </div>

            <div className="mb-6 flex items-start">
              <Phone className="mr-4 h-6 w-6 text-[#be4f0a]" />
              <div>
                <h3 className="font-bold text-[#1a1a1a]">Phone</h3>
                <p className="text-[#666666]">+91 98765 43210</p>
              </div>
            </div>

            <div className="mb-6 flex items-start">
              <Mail className="mr-4 h-6 w-6 text-[#be4f0a]" />
              <div>
                <h3 className="font-bold text-[#1a1a1a]">Email</h3>
                <p className="text-[#666666]">info@chaloghumme.com</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-xl font-bold text-[#1a1a1a]">Business Hours</h3>
              <p className="mb-2 text-[#666666]">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="mb-2 text-[#666666]">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-[#666666]">Sunday: Closed</p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-[#1a1a1a]">Send us a Message</h2>

            <form>
              <div className="mb-4">
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#4d4d4d]">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-[#e6e6e6] p-3 focus:border-[#be4f0a] focus:outline-none focus:ring-1 focus:ring-[#be4f0a]"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#4d4d4d]">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-[#e6e6e6] p-3 focus:border-[#be4f0a] focus:outline-none focus:ring-1 focus:ring-[#be4f0a]"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[#4d4d4d]">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-md border border-[#e6e6e6] p-3 focus:border-[#be4f0a] focus:outline-none focus:ring-1 focus:ring-[#be4f0a]"
                  placeholder="Trip Inquiry"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#4d4d4d]">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full rounded-md border border-[#e6e6e6] p-3 focus:border-[#be4f0a] focus:outline-none focus:ring-1 focus:ring-[#be4f0a]"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-[#be4f0a] px-4 py-3 text-white hover:bg-[#a3450a] focus:outline-none focus:ring-2 focus:ring-[#be4f0a] focus:ring-offset-2"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
