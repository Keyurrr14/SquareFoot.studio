import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import CaraCaraHyderabad from "../assets/images/projects/CaraCaraHydrebad.webp";
import CecconisSoho from "../assets/images/projects/CecconisSoho.webp";
import ChhatrasagarHotel from "../assets/images/projects/ChhatrasagarHotel.webp";
import HyattAhemdabad from "../assets/images/projects/HyattAhemdabad.webp";
import ITCMaratha from "../assets/images/projects/ITCMaratha.webp";
import LalitDelhi from "../assets/images/projects/LalitDelhi.webp";
import LeelaMumbai from "../assets/images/projects/LeelaMumbai.webp";
import LeelaPalaceDelhi from "../assets/images/projects/LeelaPalaceDelhi.webp";
import OberoiNewDelhi from "../assets/images/projects/OberoiNewDelhi.webp";
import RadissonHotel from "../assets/images/projects/RadissonHotel.webp";
import TajKatraJammu from "../assets/images/projects/TajKatraJammu.webp";
import TajBanglore from "../assets/images/projects/TajMGRoadBanglore.webp";
import PortfolioItem from "../components/PortfolioItem";

export default function Portfolio() {
  const imageClass = "snap-center w-full sm:w-1/3 flex-shrink-0";
  const [activeIndex, setActiveIndex] = useState(1);
  const carouselRef = useRef(null);

  const content = [
    {
      image: CaraCaraHyderabad,
      alt: "CaraCaraHyderabad",
      subtitle: "CaraCara Hyderabad",
    },

    {
      image: CecconisSoho,
      alt: "CecconisSoho",
      subtitle: "Cecconis Soho",
    },

    {
      image: ChhatrasagarHotel,
      alt: "ChhatrasagarHotel",
      subtitle: "Chhatrasagar Hotel",
    },
    {
      image: HyattAhemdabad,
      alt: "HyattAhemdabad",
      subtitle: "Hyatt Ahemdabad",
    },
    {
      image: ITCMaratha,
      alt: "ITCMaratha",
      subtitle: "ITC Maratha",
    },
    {
      image: LalitDelhi,
      alt: "LalitDelhi",
      subtitle: "Lalit Delhi",
    },
    {
      image: LeelaMumbai,
      alt: "LeelaMumbai",
      subtitle: "Leela Mumbai",
    },
    {
      image: LeelaPalaceDelhi,
      alt: "LeelaPalaceDelhi",
      subtitle: "Leela Palace Delhi",
    },
    {
      image: OberoiNewDelhi,
      alt: "OberoiNewDelhi",
      subtitle: "Oberoi New Delhi",
    },
    {
      image: RadissonHotel,
      alt: "RadissonHotel",
      subtitle: "Radisson Hotel",
    },
    {
      image: TajKatraJammu,
      alt: "TajKatraJammu",
      subtitle: "Taj Katra Jammu",
    },
    {
      image: TajBanglore,
      alt: "TajBanglore",
      subtitle: "Taj Banglore",
    },
  ];

  const seamlessContent = [
    ...content,
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
        // className="flex justify-start items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 mt-6 sm:mt-8 md:mt-10"
        className="ml-8 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-helvatica text-black">
          Our Projects
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
              ${index === activeIndex ? "opacity-100" : "opacity-20"}
              transition-all duration-400 ease-linear ${imageClass}`}
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
