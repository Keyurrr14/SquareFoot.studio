import { useEffect, useState } from "react";
import HeroImage from "../assets/images/HeroImage.webp";
import HomeImage1 from "../assets/images/HomeImage1.webp";
import HomeImage2 from "../assets/images/HomeImage2.webp";
import HomeImage3 from "../assets/images/HomeImage3.webp";
import HomeImage4 from "../assets/images/HomeImage4.webp";
import ProjectSection from "../components/ProjectSection";
import { motion } from "framer-motion";

export default function Home() {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const newScale = 1 + scrolled * 0.001;
      const newOpacity = Math.max(1 - scrolled * 0.002, 0);
      setScale(newScale);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <>
      <div className="min-h-screen w-full bg-beige overflow-x-hidden">
        <motion.div 
          className="w-[98%] h-screen mx-auto relative overflow-hidden flex flex-col items-center justify-center"
          style={{ opacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${HeroImage})`,
              transform: `scale(${scale})`,
              transition: "transform 0.1s ease-out",
              transformOrigin: "center center",
            }}
            {...fadeIn}
          />
          <div className="absolute inset-0 bg-black opacity-70" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mounties text-light-brown relative z-10 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center px-4"
          >
            SquareFoot.studio
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-marbley text-light-brown relative z-10 text-base xs:text-lg sm:text-xl md:text-2xl w-[95%] xs:w-[90%] sm:w-[70%] md:w-[50%] lg:w-[50%] text-center mt-4 xs:mt-6 sm:mt-8 md:mt-10 px-2 xs:px-4"
          >
            Designing Dreams, Building Realities.
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-marbley text-light-brown relative z-10 text-base xs:text-lg sm:text-xl md:text-2xl w-[95%] xs:w-[90%] sm:w-[70%] md:w-[50%] lg:w-[50%] text-center px-2 xs:px-4"
          >
            Your Trusted Partner for Architecture & Interior Design Services.
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-marbley italic text-light-brown relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-[80%] sm:w-[60%] md:w-[40%] lg:w-[50%] text-center mt-10 sm:mt-16 md:mt-20 px-4"
          >
            Architecture and Interior Design Studio
          </motion.h1>
        </motion.div>
        <div className="w-full min-h-screen px-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="flex flex-col items-start justify-start mt-6 md:mt-10">
            <motion.h1 {...fadeInUp} className="font-marbley text-brown relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-left tracking-tighter">
              Square Foot Studio designs functional, stunning spaces for homes,
              offices, and commercial projects with innovation and precision.
            </motion.h1>
            <motion.img
              {...fadeIn}
              src={HomeImage2}
              alt="HomeImage2"
              className="object-cover mt-4 md:mt-8 w-full h-[90vh] sm:h-[95vh] md:h-[120vh] lg:h-[140vh]"
            />
          </div>
          <div className="flex flex-col items-start md:items-end justify-between mt-6 md:mt-10 lg:mt-12">
            <div className="flex flex-col items-start md:items-end justify-between w-full">
              <motion.img
                {...fadeIn}
                src={HomeImage1}
                alt="HomeImage1"
                className="object-cover w-full sm:w-[85%] md:w-3/4 h-[40vh] sm:h-[45vh] md:h-[75vh] lg:h-[85vh]"
              />
              <motion.p {...fadeInUp} className="font-manrope text-brown text-base sm:text-lg md:text-xl mt-4 sm:mt-6 md:mt-8 w-full sm:w-[85%] md:w-3/4 text-left md:text-left leading-relaxed">
                The Mumbai-based studio, founded by
                <span className="italic font-bold"> Faisal Azam</span>, was
                formed out of a passion to reconnect people with style, insight
                and comfortable living.
              </motion.p>
              <motion.p {...fadeInUp} className="font-manrope text-brown text-base sm:text-lg md:text-xl mt-4 sm:mt-6 md:mt-8 w-full sm:w-[85%] md:w-3/4 text-left md:text-left leading-relaxed">
                Whether you're looking to build your dream home, renovate your
                office, or design a bespoke commercial space, our team of
                experts brings innovation, craftsmanship, and attention to
                detail to every project.
              </motion.p>
            </div>
            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-10 w-full sm:w-[85%] md:w-3/4">
              <motion.img
                {...fadeIn}
                src={HomeImage3}
                alt="HomeImage3"
                className="object-cover w-1/2 h-[40vh] sm:h-[45vh] md:h-[35vh] lg:h-[45vh]"
              />
              <motion.img
                {...fadeIn}
                src={HomeImage4}
                alt="HomeImage4"
                className="object-cover w-1/2 h-[40vh] sm:h-[45vh] md:h-[35vh] lg:h-[45vh]"
              />
            </div>
          </div>
        </div>
        <motion.h1 {...fadeInUp} className="font-marbley text-brown relative z-10 text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter text-center mt-10 sm:mt-12 md:mt-16 lg:mt-20">
          Projects
        </motion.h1>
        <hr className="w-full mx-4 border-brown my-8 sm:my-10 md:my-12" />
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
          type="Commercial"
          location="Lodha Belmondo"
          image1={HomeImage4}
          image2={HomeImage3}
          order={[3, 2, 1]}
          animation={fadeIn}
        />
        <hr className="w-full mx-4 border-brown my-8 sm:my-10 md:my-12" />
        <ProjectSection
          type="Residential"
          location="Hiranandani Gardens"
          image1={HomeImage4}
          image2={HomeImage3}
          order={[1, 3, 2]}
          animation={fadeIn}
        />
      </div>
    </>
  );
}
