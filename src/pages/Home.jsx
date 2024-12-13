import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroImage from "../assets/images/HeroImage.webp";
import LogoMarquee from "../components/LogoMarquee";
import WhyChooseUs from "../components/WhyChooseUs";
import CountUp from "react-countup";

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
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-8 mb-8 lg:mb-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-marbley text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Architecture & Interior Design Studio
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-marbley text-white text-md sm:text-lg md:text-xl lg:text-2xl mt-4"
              >
                Designing Dreams, Building Realities.
              </motion.h1>
              <motion.ul className="list-disc font-marbley text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 sm:mt-10 space-y-2">
                {[
                  "Architecture and Design Consultancy.",
                  "Interior Design and Build.",
                  "3D Visualization and Walkthrough.",
                  "Feasibility Studies.",
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
                <h2 className="font-marbley text-white text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 text-center">
                  Get in Touch
                </h2>

                <div className="mb-4 sm:mb-6">
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border-b-2 border-light-black/30 font-manrope text-light-black placeholder-light-black/70 focus:outline-none focus:border-light-black transition-colors"
                    placeholder="Name"
                  />
                </div>

                <div className="mb-4 sm:mb-6">
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border-b-2 border-light-black/30 font-manrope text-light-black placeholder-light-black/70 focus:outline-none focus:border-light-black transition-colors"
                    placeholder="Email"
                  />
                </div>

                <div className="mb-6 sm:mb-8">
                  <input
                    type="tel"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border-b-2 border-light-black/30 font-manrope text-light-black placeholder-light-black/70 focus:outline-none focus:border-light-black transition-colors"
                    placeholder="Phone Number"
                  />
                </div>

                <button className="w-full bg-transparent border border-white text-white font-manrope font-bold py-2 sm:py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300">
                  Book Free Consultation
                </button>
              </motion.form>
            </div>
          </div>
        </motion.div>

        <div className="flex">
          <div className="w-1/2 h-screen flex flex-col items-center justify-center gap-10">
            <div className="w-1/2 flex items-center justify-center">
              <div className="flex items-center justify-between gap-10">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-marbley text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center"
                >
                  Completed Projects
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-28 h-20 rounded-lg flex items-center justify-center"
                >
                  <h1 className="font-marbley text-black text-xl sm:text-2xl md:text-3xl">
                    <CountUp end={2800} duration={2} suffix="+" />
                  </h1>
                </motion.div>
              </div>
            </div>

            <div className="w-1/2 flex items-center justify-center">
              <div className="flex items-center justify-between gap-10">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-marbley text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center"
                >
                  Ongoing Projects
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-32 h-32 bg-white rounded-lg flex items-center justify-center"
                >
                  <h1 className="font-marbley text-black text-xl sm:text-2xl md:text-3xl">
                    <CountUp end={150} duration={2} suffix="+" />
                  </h1>
                </motion.div>
              </div>
            </div>

            <div className="w-1/2 flex items-center justify-center">
              <div className="flex items-center justify-between gap-10">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-marbley text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center"
                >
                  Man Hours
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-32 h-32 bg-white rounded-lg flex items-center justify-center"
                >
                  <h1 className="font-marbley text-black text-xl sm:text-2xl md:text-3xl">
                    <CountUp end={50000} duration={2} suffix="+" />
                  </h1>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-screen flex flex-col justify-center px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-marbley text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
            >
              Who are we?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-manrope text-black text-sm sm:text-base md:text-lg leading-relaxed"
            >
              We're more than designers – we're storytellers of spaces, crafting
              environments that reflect your dreams and aspirations. With
              expertise in Architecture Design & Consultancy, Interior Design &
              Build, and 3D Visualization with Walkthrough Animation, we bring
              your ideas to life, down to the finest detail. <br /> <br />7 From
              guiding you with Project Feasibility Studies to harmonizing your
              space through Vastu Consultancy, we're here to create places that
              feel like home, work like a charm, and inspire every moment. Your
              vision is our blueprint, and together, we'll build something
              extraordinary.
            </motion.p>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2 h-screen flex flex-col justify-center px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-marbley text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
            >
              What we offer?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-manrope text-black text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Our comprehensive services cater to diverse design and construction needs, 
              ensuring a seamless experience from concept to completion:
            </motion.p>
            <motion.ul 
              className="mt-6 space-y-4 font-manrope text-black text-sm sm:text-base md:text-lg leading-relaxed"
            >
              {[
                {
                  title: "Architecture Design & Consultancy:",
                  description: "We design with purpose and passion, blending aesthetics and functionality to create spaces that inspire and elevate your lifestyle."
                },
                {
                  title: "Interior Design & Build:",
                  description: "Transforming interiors with bespoke designs and precise execution to reflect your personality and needs."
                },
                {
                  title: "3D Visualization & Walkthrough Animation:",
                  description: "Bringing ideas to life through immersive 3D renderings and animations, helping you visualize your project before it begins."
                },
                {
                  title: "Project Feasibility Studies:",
                  description: "Every great project starts with the right foundation. Our detailed assessments give you confidence to make informed decisions for a successful outcome."
                },
                {
                  title: "Vastu Consultancy:",
                  description: "Incorporating traditional principles to create harmonious and balanced spaces"
                }
              ].map((item, index) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <span className="font-semibold">{item.title}</span> {item.description}
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="w-1/2 h-screen bg-blue-500"></div>
        </div>

        {/*<div className="my-8">
          <h1 className="font-marbley text-black relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-center my-4 sm:my-8 md:my-12">
            Noted Clients
          </h1>
          <LogoMarquee />
        </div>*/}

        <div className="">
          <h1
            id="about"
            className="font-marbley text-black relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-center mt-8 sm:mt-12 md:mt-16"
          >
            About Us
          </h1>
          <p className="font-manrope font-normal text-black text-sm sm:text-base md:text-lg mt-4 sm:mt-6 w-full sm:w-[85%] md:w-3/4 mx-auto text-justify leading-relaxed">
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
        </div>

        <div className="mt-20">
          <h1 className="font-marbley text-black relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-center mt-8 sm:mt-12 md:mt-16">
            Let our numbers do the talking!
          </h1>
          <div className="flex flex-row justify-center items-center gap-8 md:gap-16 mt-14 mx-auto max-w-5xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center flex-1"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-marbley text-black text-3xl sm:text-4xl md:text-5xl"
              >
                <CountUp end={100} duration={2} suffix="+" />
              </motion.p>
              <p className="font-manrope text-black mt-2">Expert Team</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center flex-1"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-marbley text-black text-3xl sm:text-4xl md:text-5xl"
              >
                <CountUp end={100000} duration={2} suffix="+" />
              </motion.p>
              <p className="font-manrope text-black mt-2">
                Residential Projects Delivered (sq.ft)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center flex-1"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-marbley text-black text-3xl sm:text-4xl md:text-5xl"
              >
                <CountUp end={1500000} duration={2} suffix="+" />
              </motion.p>
              <p className="font-manrope text-black mt-2">
                Commercial Projects Delivered (sq.ft)
              </p>
            </motion.div>
          </div>
        </div>

        <WhyChooseUs />

        <div className="mt-10"></div>

        <div></div>

        {/* <div className="w-full min-h-screen px-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="flex flex-col items-start justify-start mt-6 md:mt-10">
            <motion.h1
              {...fadeInUp}
              className="font-marbley text-black relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left tracking-tighter"
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
                className="font-manrope text-black text-sm sm:text-base md:text-lg mt-4 sm:mt-6 w-full sm:w-[85%] md:w-3/4 text-left leading-relaxed"
              >
                The Mumbai-based studio, founded by
                <span className="italic font-bold"> Faisal Azam</span>, was
                formed out of a passion to reconnect people with style, insight
                and comfortable living.
              </motion.p>
              <motion.p
                {...fadeInUp}
                className="font-manrope text-black text-sm sm:text-base md:text-lg mt-4 sm:mt-6 w-full sm:w-[85%] md:w-3/4 text-left leading-relaxed"
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
          className="font-marbley text-black relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-center mt-8 sm:mt-12 md:mt-16"
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
