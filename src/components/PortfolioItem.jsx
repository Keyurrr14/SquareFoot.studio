import React from "react";

function PortfolioItem({ src, alt, title, subtitle }) {
  return (
    <div className="aspect-square relative">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 p-4 opacity-100 w-full">
        <p className="font-helvatica text-2xl text-white transform translate-y-0 transition-transform duration-300">
          {title}
        </p>
        <p className="font-helvatica text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white transform translate-y-0 transition-transform duration-300 delay-75">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem;
