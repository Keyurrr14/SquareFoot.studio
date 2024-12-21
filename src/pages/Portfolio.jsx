import React from "react";
import Architechture from "../assets/images/Architechture.webp";
import Architechture2 from "../assets/images/Architechture2.webp";
import Commercial from "../assets/images/Commercial.webp";
import Commercial2 from "../assets/images/Commercial2.webp";
import Industrial from "../assets/images/Industrial.webp";
import Industrial2 from "../assets/images/Industrial2.webp";
import PortfolioItem from "../components/PortfolioItem";

function Portfolio() {
  return (
    <>
      <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 mt-6 sm:mt-8 md:mt-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-neutra text-brown">
          Interior
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-neutra text-brown">
          &
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-neutra text-brown">
          Architecture
        </h1>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {/* Row 1 */}
          <PortfolioItem
            src={Industrial}
            alt="Industrial"
            title="Interior"
            subtitle="Oberoi Sky City"
          />
          <PortfolioItem
            src={Commercial}
            alt="Commercial"
            title="Interior"
            subtitle="Oberoi Sky City"
          />
          <PortfolioItem
            src={Architechture}
            alt="Architecture"
            title="Interior"
            subtitle="Oberoi Sky City"
          />

          {/* Row 2 */}
          <PortfolioItem
            src={Industrial2}
            alt="Industrial 2"
            title="Architecture"
            subtitle="Oberoi Sky City"
          />
          <PortfolioItem
            src={Commercial2}
            alt="Commercial 2"
            title="Interior"
            subtitle="Oberoi Sky City"
          />
          <PortfolioItem
            src={Architechture2}
            alt="Architecture 2"
            title="Interior"
            subtitle="Oberoi Sky City"
          />

          {/* Row 3 */}
          <PortfolioItem
            src={Industrial}
            alt="Industrial"
            title="Architecture"
            subtitle="Oberoi Sky City"
          />
          <PortfolioItem
            src={Commercial}
            alt="Commercial"
            title="Interior"
            subtitle="Oberoi Sky City"
          />
          <PortfolioItem
            src={Architechture}
            alt="Architecture"
            title="Interior"
            subtitle="Oberoi Sky City"
          />

          {/* Row 4 */}
          <PortfolioItem
            src={Industrial2}
            alt="Industrial 2"
            title="Interior"
            subtitle="Oberoi Sky City"
          />
          <PortfolioItem
            src={Commercial2}
            alt="Commercial 2"
            title="Interior"
            subtitle="Oberoi Sky City"
          />
          <PortfolioItem
            src={Architechture2}
            alt="Architecture 2"
            title="Architecture"
            subtitle="Oberoi Sky City"
          />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
