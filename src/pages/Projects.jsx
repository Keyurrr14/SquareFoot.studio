import { motion } from "framer-motion";
import HomeImage3 from "../assets/images/HomeImage3.webp";
import HomeImage4 from "../assets/images/HomeImage4.webp";
// import LogoMarquee from "../components/LogoMarquee";
import ProjectSection from "../components/ProjectSection";

export default function Projects() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-beige">
      <motion.div 
        className="flex flex-col items-center justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 px-4"
        {...fadeInUp}
      >
        <h1 className="font-marbley text-center text-brown text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
          Projects
        </h1>
        <p className="w-full sm:w-[28rem] font-manrope text-center text-brown text-xs sm:text-base md:text-lg mt-2 sm:mt-4">
          Our interior design process for each project is completely unique. We
          take into consideration the client's style, personality and specific
          needs to ensure their vision is executed perfectly.
        </p>
      </motion.div>
      <div className="mt-4 sm:mt-5"></div>
      {/* <LogoMarquee /> */}
      <ProjectSection
        type="Residential"
        location="Oberoi Sky City"
        image1={HomeImage4}
        image2={HomeImage3}
        order={[1, 2, 3]}
        animation={fadeIn}
      />
      <hr className="w-full mx-4 border-brown my-8 sm:my-10 md:my-12" />
      <ProjectSection
        type="Residential"
        location="Oberoi Sky City"
        image1={HomeImage4}
        image2={HomeImage3}
        order={[3, 2, 1]}
        animation={fadeIn}
      />
      
      <ProjectSection
        type="Residential"
        location="Oberoi Sky City"
        image1={HomeImage4}
        image2={HomeImage3}
        order={[1, 2, 3]}
        animation={fadeIn}
      />
    </div>
  );
}
