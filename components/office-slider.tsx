"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const officeImages = [
  {
    src: "/office-space-1.png",
    alt: "IMPACT Yangon Office - Open workspace with city views",
  },
  {
    src: "/office-space-2.jpg",
    alt: "IMPACT Yangon Office - Reception area",
  },
  {
    src: "/team-launch-party.jpg",
    alt: "IMPACT Team - Launch party celebration",
  },
]

export function OfficeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === officeImages.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? officeImages.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === officeImages.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="group relative aspect-[16/10] overflow-hidden rounded-lg shadow-2xl">
      {/* Images */}
      {officeImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" priority />
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/90 opacity-0 transition-opacity hover:bg-white group-hover:opacity-100"
      >
        <ChevronLeft className="h-6 w-6 text-primary" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/90 opacity-0 transition-opacity hover:bg-white group-hover:opacity-100"
      >
        <ChevronRight className="h-6 w-6 text-primary" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {officeImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-accent" : "w-2 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
