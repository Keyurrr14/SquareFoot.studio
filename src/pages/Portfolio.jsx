import React, { useState, useEffect } from 'react'
import Industrial from "../assets/images/Industrial.webp"
import Industrial2 from "../assets/images/Industrial2.webp"
import Commercial from "../assets/images/Commercial.webp"
import Commercial2 from "../assets/images/Commercial2.webp"
import Architechture from "../assets/images/Architechture.webp"
import Architechture2 from "../assets/images/Architechture2.webp"
import LogoMarquee from "../components/LogoMarquee"

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
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[80vh] lg:min-h-[90vh] relative overflow-hidden bg-white">

        <div className="relative flex-1 w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col gap-5 justify-center items-center transition-all duration-1000 ease-in-out px-4 ${currentSlide === index
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-110'
                }`}
            >
              <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 z-10 px-2 sm:px-4 w-full mb-4">
                {['Industrial', 'Commercial', 'Architecture'].map((category) => (
                  <span
                    key={category}
                    className={`font-marbley text-sm sm:text-base md:text-lg lg:text-2xl transition-all px-1 sm:px-3 md:px-4 py-1 sm:py-2 rounded ${slides[currentSlide].title.includes(category)
                        ? 'text-brown border-b-2 border-brown'
                        : 'text-brown'
                      }`}
                  >
                    {category}
                  </span>
                ))}
              </div>
              <img
                src={slide.image}
                alt={slide.title}
                className="h-auto w-full max-w-4xl object-contain sm:h-64 md:h-80 lg:h-96"
              />
            </div>
          ))}
        </div>

        <div className="w-full flex justify-between items-end px-4 sm:px-8 md:px-12 lg:px-20 mb-8 lg:ml-96">
          <div className={`text-brown transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <p className="font-marbley text-base sm:text-lg md:text-xl tracking-wider">{slides[currentSlide].title}</p>
            <h3 className="font-marbley text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">{slides[currentSlide].subtitle}</h3>
          </div>

          <div className="flex gap-2 md:gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white transition-all ${currentSlide === index
                    ? 'bg-white scale-100'
                    : 'bg-transparent scale-90 hover:scale-100'
                  }`}
              />
            ))}
          </div>
        </div>

      </div>
      {/* <LogoMarquee/> */}
    </>
  )
}

export default Portfolio
