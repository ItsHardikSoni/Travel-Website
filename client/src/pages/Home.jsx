import HeroSection from "../components/HeroSection"
import DomesticPlaces from "../components/DomesticPlaces"
import TrendingPlaces from "../components/TrendingPlaces"
import DomesticStates from "../components/DomesticStates"
import BlogSection from "../components/BlogSection"
import TestimonialSection from "../components/TestimonialSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <DomesticPlaces />
      <TrendingPlaces />
      <DomesticStates />
      <BlogSection />
      <TestimonialSection />
    </main>
  )
}
