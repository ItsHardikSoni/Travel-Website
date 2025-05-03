"use client"

import { motion } from "framer-motion"
import HeroSection from "../components/HeroSection"
import DomesticPlaces from "../components/DomesticPlaces"
import DomesticStates from "../components/DomesticStates"
import BlogSection from "../components/BlogSection"
import TestimonialSection from "../components/TestimonialSection"

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

export default function Home() {
  return (
    <motion.main
      className="min-h-screen"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <HeroSection />
      <DomesticPlaces />
      <DomesticStates />
      <BlogSection />
      <TestimonialSection />
    </motion.main>
  )
}
