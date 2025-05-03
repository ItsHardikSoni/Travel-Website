import { Github, Instagram, Linkedin, Twitter } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#1a1a1a] sm:text-5xl">About ChaloGhumme</h1>
          <p className="mt-4 text-lg text-[#666666]">Your trusted travel partner in India</p>
        </div>

        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-lg text-[#4d4d4d]">
            ChaloGhumme is a premier travel agency specializing in curated travel experiences across India. Founded in
            2015, we have been helping travelers discover the beauty and diversity of India.
          </p>

          <p className="mb-6 text-lg text-[#4d4d4d]">
            Our mission is to provide authentic, immersive travel experiences that showcase the rich cultural heritage,
            stunning landscapes, and warm hospitality of India.
          </p>

          <p className="mb-12 text-lg text-[#4d4d4d]">
            With a team of experienced travel experts and local guides, we ensure that every journey with ChaloGhumme is
            memorable, comfortable, and enriching.
          </p>

          <div className="mb-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-[#f2f2f2] p-6 text-center">
              <h3 className="mb-4 text-xl font-bold text-[#be4f0a]">Our Vision</h3>
              <p className="text-[#666666]">To be the most trusted name in Indian travel experiences.</p>
            </div>

            <div className="rounded-lg bg-[#f2f2f2] p-6 text-center">
              <h3 className="mb-4 text-xl font-bold text-[#be4f0a]">Our Mission</h3>
              <p className="text-[#666666]">
                To showcase the true essence of India through authentic travel experiences.
              </p>
            </div>

            <div className="rounded-lg bg-[#f2f2f2] p-6 text-center">
              <h3 className="mb-4 text-xl font-bold text-[#be4f0a]">Our Values</h3>
              <p className="text-[#666666]">Authenticity, Sustainability, Excellence, and Customer Satisfaction.</p>
            </div>
          </div>

          {/* Developer Section for SEO */}
          <article className="mb-16">
            <header className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-[#1a1a1a]">Meet the Developer</h2>
              <p className="mt-2 text-lg text-[#666666]">The creative mind behind ChaloGhumme's digital experience</p>
            </header>

            <div className="rounded-lg bg-white p-8 shadow-lg">
              <div className="flex flex-col items-center">
                {/* Developer Image */}
                <div className="mb-6">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-[#be4f0a]">
                    <img
                      src="/ayush.jpg"
                      alt="Ayush - Software Developer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Developer Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#1a1a1a]">Ayush</h3>
                  <p className="mb-4 text-lg font-medium text-[#be4f0a]">Software Developer</p>

                  <p className="mb-6 max-w-2xl text-[#4d4d4d]">
                    I'm a passionate software developer specializing in creating immersive web experiences. With
                    expertise in modern web technologies, I designed and developed the ChaloGhumme travel platform to
                    showcase the beauty of India while providing a seamless user experience for travelers planning their
                    next adventure.
                  </p>

                  {/* Social Links */}
                  <div className="mb-6 flex justify-center space-x-4">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#f2f2f2] p-3 text-[#666666] transition-colors hover:bg-[#be4f0a] hover:text-white"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                    <a
                      href="https://instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#f2f2f2] p-3 text-[#666666] transition-colors hover:bg-[#be4f0a] hover:text-white"
                      aria-label="Instagram Profile"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#f2f2f2] p-3 text-[#666666] transition-colors hover:bg-[#be4f0a] hover:text-white"
                      aria-label="Twitter Profile"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#f2f2f2] p-3 text-[#666666] transition-colors hover:bg-[#be4f0a] hover:text-white"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-[#e6e6e6] pt-6 text-center">
                <p className="text-[#4d4d4d]">
                  "I believe in creating websites that not only look beautiful but also provide intuitive, seamless
                  experiences for users. With ChaloGhumme, my goal was to inspire travelers to explore the diverse
                  beauty of India through a platform that's as visually stunning as the destinations it showcases."
                </p>
              </div>

              <div className="mt-6 text-center text-sm text-[#666666]">
                <p>
                  <span className="font-medium">Last updated:</span>{" "}
                  {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
