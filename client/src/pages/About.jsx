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
          </div>
        </div>
      </main>
    )
  }
  