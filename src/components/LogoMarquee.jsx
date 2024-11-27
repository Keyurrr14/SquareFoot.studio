import React from "react";
import Adani from "../assets/images/logos/Adani.webp";
import AdityaBirla from "../assets/images/logos/AdityaBirla.webp";
import Tata from "../assets/images/logos/Tata.webp";
import Lodha from "../assets/images/logos/Lodha.webp";
import IRCTC from "../assets/images/logos/IRCTC.webp";
import IndiaBulls from "../assets/images/logos/IndiaBulls.webp";
import Oberoi from "../assets/images/logos/Oberoi.webp";
import Pantaloons from "../assets/images/logos/Pantaloons.webp"

const LogoMarqueeContent = [
  { src: Adani, alt: "Adani" },
  { src: AdityaBirla, alt: "AdityaBirla" },
  { src: Tata, alt: "Tata" },
  { src: Lodha, alt: "Lodha" },
  { src: IRCTC, alt: "IRCTC" },
  { src: IndiaBulls, alt: "IndiaBulls" },
  { src: Oberoi, alt: "Oberoi" },
  { src: Pantaloons, alt: "Pantaloons" },
];

function LogoMarquee({ direction = 'horizontal', verticalDirection = 'up' }) {
  const isVertical = direction === 'vertical';
  
  return (
    <div className={`${isVertical ? 'flex-col h-full' : 'flex'} overflow-hidden  relative`}>
      {[0, 1].map((_, i) => (
        <div
          key={i}
          className={`
            ${isVertical 
              ? verticalDirection === 'up' 
                ? 'animate-marqueeVertical' 
                : 'animate-marqueeVerticalReverse'
              : 'animate-marquee'
            } 
            py-4 whitespace-nowrap flex
            ${isVertical ? 'flex-col' : 'flex-row'}
            items-center justify-around
            ${isVertical ? 'min-h-full' : 'min-w-full'}
          `}
          {...(i === 1 ? { "aria-hidden": "true" } : {})}
        >
          {LogoMarqueeContent.map((logo, index) => (
            <div 
              key={index} 
              className={`
                flex items-center justify-center
                ${isVertical ? 'py-14' : 'px-2 sm:px-4 md:px-6'}
                ${isVertical ? 'w-full' : 'flex-1'}
              `}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`object-contain flex-shrink-0 ${
                  logo.alt === "Meta" 
                    ? "h-12 sm:h-12 md:h-16 lg:h-20" 
                    : "h-8 w-20 sm:h-8 sm:w-20 md:h-10 md:w-24 lg:h-12 lg:w-32"
                } ${isVertical ? 'rotate-90' : ''}`}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default LogoMarquee;
