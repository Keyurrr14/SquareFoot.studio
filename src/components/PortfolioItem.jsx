import React from "react";

function PortfolioItem({ src, alt, title, subtitle }) {
  return (
    <div className="aspect-square relative group">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
        <p className="font-helvatica text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {title}
        </p>
        <p className="font-helvatica text-5xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem;
