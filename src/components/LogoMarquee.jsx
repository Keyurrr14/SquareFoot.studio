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

// Split logos into batches of 15
const LogoMarqueeBatches = [];
const allLogos = [
  { src: Adani, alt: "Adani" },
  { src: Aditya, alt: "AdityaBirla" },
  { src: Tata, alt: "Tata" },
  { src: Lodha, alt: "Lodha" },
  { src: IRCTC, alt: "IRCTC" },
  { src: IndiaBulls, alt: "IndiaBulls" },
  { src: Oberoi, alt: "Oberoi" },
  { src: Pantaloons, alt: "Pantaloons" },
  { src: Lupin, alt: "Lupin" },
  { src: Sybase, alt: "Sybase" },
  { src: GIA, alt: "GIA" },
  { src: BNY, alt: "BNY" },
  { src: Amdocs, alt: "Amdocs" },
  { src: Amazon, alt: "Amazon" },
  { src: AsianPaints, alt: "AsianPaints" },
  { src: BalajiExotica, alt: "BalajiExotica" },
  { src: BMC, alt: "BMC" },
  { src: CCCInfra, alt: "CCCInfra" },
  { src: CMC, alt: "CMC" },
  { src: Deloitte, alt: "Deloitte" },
  { src: DreamDigit, alt: "DreamDigit" },
  { src: FirstSource, alt: "FirstSource" },
  { src: Hindustan, alt: "Hindustan" },
  { src: HSBC, alt: "HSBC" },
  { src: IKEA, alt: "IKEA" },
  { src: Infosys, alt: "Infosys" },
  { src: ITPO, alt: "ITPO" },
  { src: JuhiDevelopers, alt: "JuhiDevelopers" },
  { src: Kotak, alt: "Kotak" },
  { src: LNT, alt: "LNT" },
  { src: MasterCard, alt: "MasterCard" },
  { src: MMC, alt: "MMC" },
  { src: Netflix, alt: "Netflix" },
  { src: NisargGroup, alt: "NisargGroup" },
  { src: NSE, alt: "NSE" },
  { src: OKAY, alt: "OKAY" },
  { src: Posco, alt: "Posco" },
  { src: RBS, alt: "RBS" },
  { src: Regency, alt: "Regency" },
  { src: SaiMiracle, alt: "SaiMiracle" },
  { src: StandardChartered, alt: "StandardChartered" },
  { src: Today, alt: "Today" },
  { src: UMC, alt: "UMC" },
  { src: Wipro, alt: "Wipro" },
];

// Create batches of 15 logos
for (let i = 0; i < allLogos.length; i += 13) {
  LogoMarqueeBatches.push(allLogos.slice(i, i + 13));
}

function LogoMarquee({ direction = 'horizontal', verticalDirection = 'up' }) {
  const isVertical = direction === 'vertical';
  
  return (
    <div className="space-y-1">
      {LogoMarqueeBatches.map((batch, batchIndex) => (
        <div 
          key={batchIndex}
          className={`${isVertical ? 'flex-col h-full' : 'flex'} overflow-hidden relative`}
        >
          {[0, 1].map((_, i) => (
            <div
              key={i}
              className={`
                ${isVertical 
                  ? verticalDirection === 'up' 
                    ? 'animate-marqueeVertical' 
                    : 'animate-marqueeVerticalReverse'
                  : batchIndex % 2 === 0 
                    ? 'animate-marquee' 
                    : 'animate-marqueeReverse'
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
                    ${isVertical ? 'py-14' : 'px-2 sm:px-4 md:px-6'}
                    ${isVertical ? 'w-full' : 'flex-1'}
                  `}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`object-contain flex-shrink-0 ${
                      logo.alt === "Meta" 
                        ? "h-20 sm:h-24 md:h-28 lg:h-32" 
                        : "h-16 w-36 sm:h-20 sm:w-44 md:h-24 md:w-52 lg:h-28 lg:w-60"
                    } ${isVertical ? 'rotate-90' : ''}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default LogoMarquee;
