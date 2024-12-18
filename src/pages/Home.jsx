import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import HeroImage from "../assets/images/HeroImage.webp";
import LogoMarquee from "../components/LogoMarquee"
import AD from "../assets/images/awards/AD.webp"
import FOAID from "../assets/images/awards/FOAID.webp"
import IIID from "../assets/images/awards/IIID.webp"
import NDTV from "../assets/images/awards/NDTV.webp"
import Sustainable from "../assets/images/awards/Sustainable.webp"
import TOI from "../assets/images/awards/TOI.webp"


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
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: "easeOut" },
  };

  return (
    <>
      <div className="min-h-screen w-full bg-white overflow-x-hidden">
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

          <div className="relative z-10 flex flex-col lg:flex-row w-full h-full p-4">
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-8 mb-8 lg:mb-0 lg:ml-14">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-lavishly font-semibold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-10"
              >
                Crafting spaces that define your Legacy
              </motion.h1>
              <motion.ul className="list-disc list-inside sm:list-outside font-neutra text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 sm:mt-10 space-y-2">
                {[
                  "Architecture and Design Consultancy.",
                  "Interior Design and Build.",
                  "3D Visualization and Walkthrough Animation.",
                  "Project Feasibility Studies.",
                  "Vastu Consultancy.",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center px-4">
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg w-full max-w-md border border-light-black/30"
              >
                <h2 className="font-neutra text-white text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 text-center">
                  Talk to our Consultant
                </h2>

                <div className="mb-4 sm:mb-6">
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border-b-2 border-light-black/30 font-NeutraContent text-light-black placeholder-light-black/70 focus:outline-none focus:border-light-black transition-colors"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-6 sm:mb-8">
                  <input
                    type="tel"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border-b-2 border-light-black/30 font-NeutraContent text-light-black placeholder-light-black/70 focus:outline-none focus:border-light-black transition-colors"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="mb-4 sm:mb-6">
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border-b-2 border-light-black/30 font-NeutraContent text-light-black placeholder-light-black/70 focus:outline-none focus:border-light-black transition-colors"
                    placeholder="Email (Optional)"
                  />
                </div>

                <button className="w-full bg-transparent text-xl border border-white text-white font-neutra font-bold py-2 sm:py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300">
                  Submit
                </button>
              </motion.form>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:my-20">
          {/* Left side - Stats */}
          <div className="w-full lg:w-1/2 py-8 lg:py-0 flex flex-col items-center justify-center gap-6 sm:gap-10 px-4">
            {/* Completed Projects */}
            <div className="w-full flex items-center justify-center">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-neutra text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left sm:w-[300px]"
                >
                  Completed Projects
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full sm:w-40 h-20 sm:h-24 rounded-lg flex items-center justify-center"
                >
                  <h1 className="font-neutra text-black flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl border border-light-black/30 rounded-lg p-2 w-full sm:w-auto">
                    <CountUp end={500000} duration={3} suffix=" Sq.Ft. +" />
                  </h1>
                </motion.div>
              </div>
            </div>

            {/* Ongoing Projects */}
            <div className="w-full flex items-center justify-center">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-neutra text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left sm:w-[300px]"
                >
                  Ongoing Projects
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full sm:w-40 h-20 sm:h-24 bg-white rounded-lg flex items-center justify-center"
                >
                  <h1 className="font-neutra text-black flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl border border-light-black/30 rounded-lg p-2 w-full sm:w-auto">
                    <CountUp end={1500000} duration={3} suffix=" Sq.Ft. +" />
                  </h1>
                </motion.div>
              </div>
            </div>

            {/* Man Hours */}
            <div className="w-full flex items-center justify-center">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-neutra text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left sm:w-[300px]"
                >
                  Man Hours
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full sm:w-40 h-20 sm:h-24 bg-white rounded-lg flex items-center justify-center"
                >
                  <h1 className="font-neutra text-black flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl border border-light-black/30 rounded-lg px-8 py-5 w-full sm:w-auto">
                    <CountUp end={2800} duration={3} suffix=" +" />
                  </h1>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right side - Who are we? */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 py-12 lg:py-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-neutra text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
            >
              Who are we?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-NeutraContent text-black text-lg sm:text-md md:text-2xl leading-relaxed"
            >
              We're more than designers – we're storytellers of spaces, crafting
              environments that reflect your dreams and aspirations. With
              expertise in Architecture Design & Consultancy, Interior Design &
              Build, and 3D Visualization with Walkthrough Animation, we bring
              your ideas to life, down to the finest detail. <br /> <br />
              From guiding you with Project Feasibility Studies to harmonizing
              your space through Vastu Consultancy, we're here to create places
              that feel like home, work like a charm, and inspire every moment.
              Your vision is our blueprint, and together, we'll build something
              extraordinary.
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row -my-20">
          <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-20 py-12 lg:py-0 mt-20 lg:mt-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-neutra text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
            >
              What we offer?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-NeutraContent text-black text-lg sm:text-md md:text-2xl leading-relaxed"
            >
              Our comprehensive services cater to diverse design and
              construction needs, ensuring a seamless experience from concept to
              completion:
            </motion.p>
            <motion.ul className="mt-6 space-y-6 sm:space-y-4 font-NeutraContent text-black text-lg sm:text-md md:text-2xl leading-relaxed">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-1 sm:gap-4"
              >
                <p>
                  <span className="font-semibold">
                    Architecture Design & Consultancy:
                  </span>{" "}
                  We design with purpose and passion, blending aesthetics and
                  functionality to create spaces that inspire and elevate your
                  lifestyle.
                </p>
                <span className="text-gray-700"></span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-1 sm:gap-4"
              >
                <p>
                  <span className="font-semibold">
                    Interior Design & Build:
                  </span>{" "}
                  Transforming interiors with bespoke designs and precise
                  execution to reflect your personality and needs.
                </p>
                <span className="text-gray-700"></span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-1 sm:gap-4"
              >
                <p>
                  <span className="font-semibold">
                    3D Visualization & Walkthrough Animation:
                  </span>{" "}
                  Bringing ideas to life through immersive 3D renderings and
                  animations, helping you visualize your project before it
                  begins.
                </p>
                <span className="text-gray-700"></span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-1 sm:gap-4"
              >
                <p>
                  <span className="font-semibold">
                    Project Feasibility Studies:
                  </span>{" "}
                  Every great project starts with the right foundation. Our
                  detailed assessments give you confidence to make informed
                  decisions for a successful outcome.
                </p>
                <span className="text-gray-700"></span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-1 sm:gap-4"
              >
                <p>
                  <span className="font-semibold"> Vastu Consultancy:</span>
                  Incorporating traditional principles to create harmonious and
                  balanced spaces
                </p>
                <span className="text-gray-700"></span>
              </motion.li>
            </motion.ul>
          </div>
          <div className="w-full lg:w-1/2 p-4 lg:p-8 my-12 lg:px-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-neutra text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 mt-2 lg:mt-20"
            >
              Why Choose Us !
            </motion.h1>
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center border border-light-black/30 p-3 sm:p-4 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg bg-white min-h-[120px]"
              >
                <h1 className="font-NeutraContent text-black text-sm sm:text-xl lg:text-2xl xl:text-3xl">
                  Designing Future with Excellence
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center border border-light-black/30 p-3 sm:p-4 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg bg-white min-h-[120px]"
              >
                <h1 className="font-NeutraContent text-black text-sm sm:text-xl lg:text-2xl xl:text-3xl">
                  Client Centric Approach
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center border border-light-black/30 p-3 sm:p-4 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg bg-white min-h-[120px]"
              >
                <h1 className="font-NeutraContent text-black text-sm sm:text-xl lg:text-2xl xl:text-3xl">
                  Sustainable, Innovative & Functional Desgins
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center border border-light-black/30 p-3 sm:p-4 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg bg-white min-h-[120px]"
              >
                <h1 className="font-NeutraContent text-black text-sm sm:text-xl lg:text-2xl xl:text-3xl">
                  End to End Solutions, Turnkey Projects
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center border border-light-black/30 p-3 sm:p-4 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg bg-white min-h-[120px]"
              >
                <h1 className="font-NeutraContent text-black text-sm sm:text-xl lg:text-2xl xl:text-3xl">
                  Expert Team of Professionals
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center border border-light-black/30 p-3 sm:p-4 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg bg-white min-h-[120px]"
              >
                <h1 className="font-NeutraContent text-black text-sm sm:text-xl lg:text-2xl xl:text-3xl">
                  Focus on Long term Relations
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center border border-light-black/30 p-3 sm:p-4 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg bg-white min-h-[120px]"
              >
                <h1 className="font-NeutraContent text-black text-sm sm:text-xl lg:text-2xl xl:text-3xl">
                  Commitment to Quality
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center border border-light-black/30 p-3 sm:p-4 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg bg-white min-h-[120px]"
              >
                <h1 className="font-NeutraContent text-black text-sm sm:text-xl lg:text-2xl xl:text-3xl">
                  Hassle Free Timely Assured Project Delivery
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
        <h1 className="font-neutra text-6xl text-center my-8">Noted Clients</h1>
        <LogoMarquee/>
        <h1 className="font-neutra text-6xl text-center mt-8">Awards & Features</h1>
        <div className="w-full flex flex-wrap items-center justify-center gap-16 mt-0">
            <img src={AD} alt="" className="h-48" />
            <img src={FOAID} alt="" className="h-48"/>
            <img src={IIID} alt="" className="h-48"/>
            <img src={NDTV} alt="" className="h-48"/>
            <img src={Sustainable} alt="" className="h-48"/>
            <img src={TOI} alt="" className="h-48"/>
        </div>


        {/*<div className="my-8">
          <h1 className="font-neutra text-black relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-center my-4 sm:my-8 md:my-12">
            Noted Clients
          </h1>
          <LogoMarquee />
        </div>*/}

        {/* <div className="px-4 sm:px-6 md:px-8">
          <h1
            id="about"
            className="font-neutra text-black relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-center mt-8 sm:mt-12 md:mt-16"
          >
            About Us
          </h1>
          <p className="font-neutra font-normal text-black text-sm sm:text-base md:text-lg mt-4 sm:mt-6 w-[95%] sm:w-[85%] md:w-3/4 mx-auto text-justify sm:text-justify leading-relaxed px-2 sm:px-0">
            Welcome to squarefoot.studio, a leading architecture and interior
            design firm where creativity meets functionality. We specialize in
            transforming ideas into stunning spaces that reflect your vision and
            cater to your needs. Whether you're building your dream home,
            revamping your office, or crafting a bespoke commercial space, our
            expert team ensures every detail is thoughtfully designed and
            meticulously executed.
            <br />
            <br />
            At squarefoot.studio, we believe every space tells a story. By
            combining innovative design, sustainable practices, and cutting-edge
            technology, we create environments that inspire and elevate. From
            initial concepts to project completion, our collaborative approach
            ensures transparency, efficiency, and satisfaction.
            <br />
            <br />
            Let us bring your vision to life with designs that blend elegance,
            functionality, and timeless appeal. Your journey to exceptional
            spaces begins here.
          </p>
        </div> */}

        {/* <div className="mt-20">
          <h1 className="font-neutra text-black relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-center mt-8 sm:mt-12 md:mt-16 px-4">
            Let our numbers do the talking!
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-8 md:gap-16 mt-14 mx-auto max-w-5xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center w-full sm:flex-1"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-neutra text-black text-4xl sm:text-3xl md:text-4xl lg:text-5xl"
              >
                <CountUp end={100} duration={2} suffix="+" />
              </motion.p>
              <p className="font-neutra text-black mt-2 text-base sm:text-sm md:text-base">
                Expert Team
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center w-full sm:flex-1"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-neutra text-black text-4xl sm:text-3xl md:text-4xl lg:text-5xl"
              >
                <CountUp end={100000} duration={2} suffix="+" />
              </motion.p>
              <p className="font-neutra text-black mt-2 text-base sm:text-sm md:text-base px-4">
                Residential Projects Delivered (sq.ft)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center w-full sm:flex-1"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-neutra text-black text-4xl sm:text-3xl md:text-4xl lg:text-5xl"
              >
                <CountUp end={1500000} duration={2} suffix="+" />
              </motion.p>
              <p className="font-neutra text-black mt-2 text-base sm:text-sm md:text-base px-4">
                Commercial Projects Delivered (sq.ft)
              </p>
            </motion.div>
          </div>
        </div> */}

        {/* <WhyChooseUs /> */}

        <div className="mt-10"></div>

        <div></div>

        {/* <div className="w-full min-h-screen px-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="flex flex-col items-start justify-start mt-6 md:mt-10">
            <motion.h1
              {...fadeInUp}
              className="font-neutra text-black relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left tracking-tighter"
            >
              Square Foot Studio designs functional, stunning spaces for homes,
              offices, and commercial projects with innovation and precision.
            </motion.h1>
            <motion.img
              {...fadeIn}
              src={HomeImage2}
              alt="HomeImage2"
              className="object-cover mt-4 md:mt-8 w-full h-[60vh] sm:h-[70vh] md:h-[90vh] lg:h-[110vh]"
            />
          </div>

          <div className="flex flex-col items-start md:items-end justify-between mt-6 md:mt-10">
            <div className="flex flex-col items-start md:items-end justify-between w-full">
              <motion.img
                {...fadeIn}
                src={HomeImage1}
                alt="HomeImage1"
                className="object-cover w-full sm:w-[85%] md:w-3/4 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
              />
              <motion.p
                {...fadeInUp}
                className="font-neutra text-black text-sm sm:text-base md:text-lg mt-4 sm:mt-6 w-full sm:w-[85%] md:w-3/4 text-left leading-relaxed"
              >
                The Mumbai-based studio, founded by
                <span className="italic font-bold"> Faisal Azam</span>, was
                formed out of a passion to reconnect people with style, insight
                and comfortable living.
              </motion.p>
              <motion.p
                {...fadeInUp}
                className="font-neutra text-black text-sm sm:text-base md:text-lg mt-4 sm:mt-6 w-full sm:w-[85%] md:w-3/4 text-left leading-relaxed"
              >
                Whether you're looking to build your dream home, renovate your
                office, or design a bespoke commercial space, our team of
                experts brings innovation, craftsmanship, and attention to
                detail to every project.
              </motion.p>
            </div>

            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 w-full sm:w-[85%] md:w-3/4">
              <motion.img
                {...fadeIn}
                src={HomeImage3}
                alt="HomeImage3"
                className="object-cover w-1/2 h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh]"
              />
              <motion.img
                {...fadeIn}
                src={HomeImage4}
                alt="HomeImage4"
                className="object-cover w-1/2 h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh]"
              />
            </div>
          </div>
        </div> */}

        {/* <motion.h1
          {...fadeInUp}
          className="font-neutra text-black relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-center mt-8 sm:mt-12 md:mt-16"
        >
          Projects
        </motion.h1>

        <hr className="w-full mx-4 border-black my-6 sm:my-8 md:my-10" />

        <ProjectSection
          type="Residential"
          location="Oberoi Sky City"
          image1={HomeImage4}
          image2={HomeImage3}
          order={[1, 2, 3]}
          animation={fadeIn}
        />

        <hr className="w-full mx-4 border-black my-6 sm:my-8 md:my-10" />

        <ProjectSection
          type="Commercial"
          location="Lodha Belmondo"
          image1={HomeImage4}
          image2={HomeImage3}
          order={[3, 2, 1]}
          animation={fadeIn}
        />

        <hr className="w-full mx-4 border-black my-6 sm:my-8 md:my-10" />

        <ProjectSection
          type="Residential"
          location="Hiranandani Gardens"
          image1={HomeImage4}
          image2={HomeImage3}
          order={[1, 3, 2]}
          animation={fadeIn}
        /> */}
      </div>
    </>
  );
}
