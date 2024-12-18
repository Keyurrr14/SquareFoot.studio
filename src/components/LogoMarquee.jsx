import React from "react";
import Adani from "../assets/images/logos/Adani.webp";
import Aditya from "../assets/images/logos/Aditya.webp";
import Tata from "../assets/images/logos/Tata.webp";
import Lodha from "../assets/images/logos/Lodha.webp";
import IRCTC from "../assets/images/logos/IRCTC.webp";
import IndiaBulls from "../assets/images/logos/IndiaBulls.webp";
import Oberoi from "../assets/images/logos/Oberoi.webp";
import Pantaloons from "../assets/images/logos/Pantaloons.webp";
import Lupin from "../assets/images/logos/Lupin.webp";
import NCR from "../assets/images/logos/NCR.webp";
import OCWEN from "../assets/images/logos/OCWEN.webp";
import Sybase from "../assets/images/logos/Sybase.webp";
import Symantec from "../assets/images/logos/Symantec.webp";
import GeneralMills from "../assets/images/logos/GeneralMills.webp";
import GIA from "../assets/images/logos/Gia.webp";
import CDKGlobal from "../assets/images/logos/CDKGlobal.webp";
import Fiserv from "../assets/images/logos/Fiserv.webp";
import BNY from "../assets/images/logos/BNY.webp";
import Amdocs from "../assets/images/logos/Amdocs.webp";
import ADP from "../assets/images/logos/ADP.webp";
import Amazon from "../assets/images/logos/Amazon.webp";
import AsianPaints from "../assets/images/logos/AsianPaints.webp";
import BalajiExotica from "../assets/images/logos/BalajiExotica.webp";
import BMC from "../assets/images/logos/BMC.webp";
import CCCInfra from "../assets/images/logos/CCCInfra.webp";
import CMC from "../assets/images/logos/CMC.webp";
import Deloitte from "../assets/images/logos/Deloitte.webp";
import DreamDigit from "../assets/images/logos/DreamDigit.webp";
import FirstSource from "../assets/images/logos/FirstSource.webp";
import Google from "../assets/images/logos/Google.webp";
import Hindustan from "../assets/images/logos/Hindustan.webp";
import HSBC from "../assets/images/logos/HSBC.webp";
import IKEA from "../assets/images/logos/IKEA.webp";
import Infosys from "../assets/images/logos/Infosys.webp";
import ITPO from "../assets/images/logos/ITPO.webp";
import JuhiDevelopers from "../assets/images/logos/JuhiDevelopers.webp";
import Kotak from "../assets/images/logos/Kotak.webp";
import LNT from "../assets/images/logos/LNT.webp";
import MasterCard from "../assets/images/logos/MasterCard.webp";
import MorganStanley from "../assets/images/logos/MorganStanley.webp";
import MMC from "../assets/images/logos/MMC.webp";
import Netflix from "../assets/images/logos/Netflix.webp";
import NisargGroup from "../assets/images/logos/NisargGroup.webp";
import NSE from "../assets/images/logos/NSE.webp";
import OKAY from "../assets/images/logos/OKAY.webp";
import Posco from "../assets/images/logos/POSCO.webp";
import RBS from "../assets/images/logos/RBS.webp";
import Regency from "../assets/images/logos/Regency.webp";
import SaiMiracle from "../assets/images/logos/SaiMiracle.webp";
import StandardChartered from "../assets/images/logos/StandardChartered.webp";
import Today from "../assets/images/logos/Today.webp";
import UMC from "../assets/images/logos/UMC.webp";
import Wipro from "../assets/images/logos/Wipro.webp";

// Create the allLogos array with all the imported logos
const allLogos = [
  { src: Adani, alt: "Adani" },
  { src: Aditya, alt: "Aditya" },
  { src: Tata, alt: "Tata" },
  { src: Lodha, alt: "Lodha" },
  { src: IRCTC, alt: "IRCTC" },
  { src: IndiaBulls, alt: "IndiaBulls" },
  { src: Oberoi, alt: "Oberoi" },
  { src: Pantaloons, alt: "Pantaloons" },
  { src: Lupin, alt: "Lupin" },
  { src: NCR, alt: "NCR" },
  { src: OCWEN, alt: "OCWEN" },
  { src: Sybase, alt: "Sybase" },
  { src: Symantec, alt: "Symantec" },
  { src: GeneralMills, alt: "GeneralMills" },
  { src: GIA, alt: "GIA" },
  { src: CDKGlobal, alt: "CDKGlobal" },
  { src: Fiserv, alt: "Fiserv" },
  { src: BNY, alt: "BNY" },
  { src: Amdocs, alt: "Amdocs" },
  { src: ADP, alt: "ADP" },
  { src: Amazon, alt: "Amazon" },
  { src: AsianPaints, alt: "AsianPaints" },
  { src: BalajiExotica, alt: "BalajiExotica" },
  { src: BMC, alt: "BMC" },
  { src: Wipro, alt: "Wipro" },
  { src: Hindustan, alt: "Hindustan" },
  { src: HSBC, alt: "HSBC" },
  { src: IKEA, alt: "IKEA" },
  { src: Infosys, alt: "Infosys" },
  { src: ITPO, alt: "ITPO" },
  { src: JuhiDevelopers, alt: "JuhiDevelopers" },
  { src: Kotak, alt: "Kotak" },
  { src: LNT, alt: "LNT" },
  { src: MasterCard, alt: "MasterCard" },
  { src: MorganStanley, alt: "MorganStanley" },
  { src: MMC, alt: "MMC" },
  { src: Netflix, alt: "Netflix" },
  { src: NisargGroup, alt: "NisargGroup" },
  { src: NSE, alt: "NSE" },
  { src: OKAY, alt: "OKAY" },
  { src: Posco, alt: "POSCO" },
  { src: RBS, alt: "RBS" },
  { src: Regency, alt: "Regency" },
  { src: SaiMiracle, alt: "SaiMiracle" },
  { src: StandardChartered, alt: "StandardChartered" },
  { src: Today, alt: "Today" },
  { src: UMC, alt: "UMC" },
];


// Modify the batch creation logic
const LogoMarqueeBatches = {
  mobile: [], // 5 logos per row
  tablet: [], // 8 logos per row
  desktop: [], // 12 logos per row
};

// Create different batches for different screen sizes
allLogos.forEach((logo, index) => {
  if (index % 5 === 0) LogoMarqueeBatches.mobile.push([]);
  if (index % 8 === 0) LogoMarqueeBatches.tablet.push([]);
  if (index % 12 === 0) LogoMarqueeBatches.desktop.push([]);
  
  LogoMarqueeBatches.mobile[Math.floor(index / 5)].push(logo);
  LogoMarqueeBatches.tablet[Math.floor(index / 8)].push(logo);
  LogoMarqueeBatches.desktop[Math.floor(index / 12)].push(logo);
});

function LogoMarquee({ direction = 'horizontal', verticalDirection = 'up' }) {
  const isVertical = direction === 'vertical';

  return (
    <div className="space-y-1">
      {/* Mobile view (default) */}
      <div className="md:hidden">
        {LogoMarqueeBatches.mobile.map((batch, batchIndex) => (
          <MarqueeBatch 
            key={batchIndex} 
            batch={batch} 
            isVertical={isVertical} 
            verticalDirection={verticalDirection} 
          />
        ))}
      </div>

      {/* Tablet view */}
      <div className="hidden md:block lg:hidden">
        {LogoMarqueeBatches.tablet.map((batch, batchIndex) => (
          <MarqueeBatch 
            key={batchIndex} 
            batch={batch} 
            isVertical={isVertical} 
            verticalDirection={verticalDirection} 
          />
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden lg:block">
        {LogoMarqueeBatches.desktop.map((batch, batchIndex) => (
          <MarqueeBatch 
            key={batchIndex} 
            batch={batch} 
            isVertical={isVertical} 
            verticalDirection={verticalDirection} 
          />
        ))}
      </div>
    </div>
  );
}

// Extract the marquee batch component
function MarqueeBatch({ batch, isVertical, verticalDirection }) {
  return (
    <div className={`${isVertical ? 'flex-col h-full' : 'flex'} overflow-hidden relative`}>
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
            whitespace-nowrap flex
            ${isVertical ? 'flex-col' : 'flex-row'}
            items-center justify-around
            ${isVertical ? 'min-h-full' : 'min-w-full'}
          `}
          {...(i === 1 ? { "aria-hidden": "true" } : {})}
        >
          {batch.map((logo, index) => (
            <div
              key={index}
              className={`
                flex items-center justify-center
                ${isVertical ? 'py-8' : 'px-3 sm:px-4 md:px-5 lg:px-6'}
                ${isVertical ? 'w-full' : 'flex-1'}
              `}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`
                  object-contain flex-shrink-0
                  ${logo.alt === "Meta"
                    ? "h-16 sm:h-18 md:h-20 lg:h-24"
                    : "h-14 w-32 sm:h-16 sm:w-36 md:h-18 md:w-40 lg:h-20 lg:w-44"}
                  ${isVertical ? 'rotate-90' : ''}
                `}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default LogoMarquee;
