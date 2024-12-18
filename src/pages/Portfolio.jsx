import React, { useState, useEffect } from 'react'
import Industrial from "../assets/images/Industrial.webp"
import Industrial2 from "../assets/images/Industrial2.webp"
import Commercial from "../assets/images/Commercial.webp"
import Commercial2 from "../assets/images/Commercial2.webp"
import Architechture from "../assets/images/Architechture.webp"
import Architechture2 from "../assets/images/Architechture2.webp"

function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const slides = [
    {
      image: Industrial,
      title: "[Industrial]",
      subtitle: "Oberoi Sky City"
    },
    {
      image: Commercial,
      title: "[Commercial]",
      subtitle: "Business Complex"
    },
    {
      image: Architechture,
      title: "[Architecture]",
      subtitle: "Modern Design"
    },
    {
      image: Industrial2,
      title: "[Industrial]",
      subtitle: "Oberoi Sky City"
    },
    {
      image: Commercial2,
      title: "[Commercial]",
      subtitle: "Business Complex"
    },
    {
      image: Architechture2,
      title: "[Architecture]",
      subtitle: "Modern Design"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsTransitioning(false)
      }, 500)
    }, 3000) // Increased to 5 seconds for better viewing

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center items-center min-h-screen relative overflow-hidden lg:-mt-20 md:mt-0 sm:mt-0 bg-white">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 flex justify-center items-center transition-all duration-1000 ease-in-out px-4 ${
            currentSlide === index 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-110'
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="h-auto max-h-96 w-full object-contain md:h-96 sm:h-72"
          />
        </div>
      ))}
      
      <div 
        className={`absolute bottom-8 left-4 md:left-12 lg:left-36 text-brown transition-opacity duration-500 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <p className="font-marbley text-lg md:text-xl tracking-wider">{slides[currentSlide].title}</p>
        <h3 className="font-marbley text-3xl md:text-4xl lg:text-6xl font-bold mt-2">{slides[currentSlide].subtitle}</h3>
      </div>

      <div className="absolute bottom-8 right-4 md:right-8 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white transition-all ${
              currentSlide === index 
                ? 'bg-white scale-100' 
                : 'bg-transparent scale-90 hover:scale-100'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
