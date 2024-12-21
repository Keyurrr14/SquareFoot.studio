import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Architechture from "../assets/images/Architechture.webp";
import Architechture2 from "../assets/images/Architechture2.webp";
import Commercial from "../assets/images/Commercial.webp";
import Commercial2 from "../assets/images/Commercial2.webp";
import Industrial from "../assets/images/Industrial.webp";
import Industrial2 from "../assets/images/Industrial2.webp";
import PortfolioItem from "../components/PortfolioItem";

function Portfolio() {
  const imageClass = "snap-center w-1/3 flex-shrink-0";
  const [activeIndex, setActiveIndex] = useState(1);
  const carouselRef = useRef(null);

  const content = [
    {
      image: Architechture,
      alt: "Architecture",
      title: "Architecture",
      subtitle: "Oberoi Sky City",
    },
    {
      image: Architechture2,
      alt: "Architecture",
      title: "Architecture",
      subtitle: "Oberoi Sky City",
    },
    {
      image: Commercial,
      alt: "Commercial",
      title: "Commercial",
      subtitle: "Oberoi Sky City",
    },
    {
      image: Commercial2,
      alt: "Commercial",
      title: "Commercial",
      subtitle: "Oberoi Sky City",
    },
    {
      image: Industrial,
      alt: "Industrial",
      title: "Industrial",
      subtitle: "Oberoi Sky City",
    },
    {
      image: Industrial2,
      alt: "Industrial",
      title: "Industrial",
      subtitle: "Oberoi Sky City",
    },
  ];

  const seamlessContent = [
    ...content,
    ...content,
    ...content,
    ...content,
    ...content,
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        const centerPosition = carousel.scrollLeft + carousel.offsetWidth / 2;
        const childElements = Array.from(carousel.children);
        let closestIndex = 0;
        let closestDistance = Infinity;

        childElements.forEach((child, index) => {
          const elementCenter = child.offsetLeft + child.offsetWidth / 2;
          const distance = Math.abs(centerPosition - elementCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setActiveIndex(closestIndex);
      }
    };

    const carousel = carouselRef.current;
    carousel.addEventListener("scroll", handleScroll);

    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="flex justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 mt-6 sm:mt-8 md:mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-neutra text-brown">
          Interior
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-neutra text-brown">
          &
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-neutra text-brown">
          Architecture
        </h1>
      </motion.div>
      <div className="container mx-auto px-4 py-8">
        <div
          ref={carouselRef}
          className="snap-x snap-mandatory overflow-x-scroll max-w-full gap-12 flex mx-auto no-scrollbar"
        >
          {seamlessContent.map((data, index) => (
            <div
              className={`
              ${index === activeIndex ? "opacity-100" : "opacity-40"}
              transition-all duration-300 ease-linear ${imageClass}`}
              key={index}
            >
              <PortfolioItem
                src={data.image}
                alt={data.alt}
                title={data.title}
                subtitle={data.subtitle}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
