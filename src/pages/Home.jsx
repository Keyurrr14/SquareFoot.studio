import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import AD from "../assets/images/awards/AD.webp";
import FOAID from "../assets/images/awards/FOAID.webp";
import IIID from "../assets/images/awards/IIID.webp";
import NDTV from "../assets/images/awards/NDTV.webp";
import Sustainable from "../assets/images/awards/Sustainable.webp";
import TOI from "../assets/images/awards/TOI.webp";
import HeroImage from "../assets/images/HeroImage.webp";
import LogoMarquee from "../components/LogoMarquee";
import Portfolio from "./Portfolio";

export default function Home() {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  const numbersRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Send to Google Sheets
      const sheetsResponse = await fetch(
        "https://script.google.com/macros/s/AKfycby1ewYidn5TsTyS8KDATmGIluCIZPG0cWt5GeiQYRswx3GTzQjAaLrsVxmhKe2kExSGNg/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );
      const sheetsData = await sheetsResponse.json();

      if (sheetsData.success) {
        setShowAlert(true);
        setFormData({ name: "", phone: "", email: "" });
        setTimeout(() => setShowAlert(false), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const newScale = 1 + scrolled * 0.001;
      const newOpacity = Math.max(1 - scrolled * 0.002, 0);
      setScale(newScale);
      setOpacity(newOpacity);

      if (numbersRef.current) {
        const rect = numbersRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          // Trigger the count-up animation
          // You can use a state to control if the animation should start
        }
      }
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
          className="w-full min-h-screen mx-auto relative overflow-hidden flex flex-col items-center justify-center"
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
          <div className="absolute inset-0 bg-black opacity-80" />

          <div className="relative z-10 flex flex-col lg:flex-row w-full h-full p-4">
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-8 mb-8 lg:mb-0 lg:ml-14">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-helvatica text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10"
              >
                Crafting spaces that Define your Legacy
              </motion.h1>
              <motion.ul className="list-disc list-inside sm:list-outside font-helvatica text-white text-md sm:text-lg md:text-xl lg:text-2xl mt-6 ml-5 sm:mt-10 space-y-2">
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
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white backdrop-blur-sm p-6 sm:p-8 rounded-lg w-full max-w-md border border-light-black/30"
              >
                <h2 className="font-helvatica font-bold text-black text-3xl sm:text-4xl lg:text-4xl mb-6 sm:mb-8 text-center">
                  Talk to our{" "}
                  <span className="text-yellow-500">Consultant</span>
                </h2>

                <div className="mb-4 sm:mb-6">
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border-b-2 border-light-black/30 font-helvatica text-light-black placeholder-black focus:outline-none focus:border-light-black transition-colors"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6 sm:mb-8">
                  <input
                    type="tel"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border-b-2 border-light-black/30 font-helvatica text-light-black placeholder-black focus:outline-none focus:border-light-black transition-colors"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4 sm:mb-6">
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border-b-2 border-light-black/30 font-helvatica text-light-black placeholder-black focus:outline-none focus:border-light-black transition-colors"
                    placeholder="Email (Optional)"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-xltext-black font-helvatica font-bold py-2 sm:py-3 rounded-lg transition-all duration-300 relative"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </motion.form>
            </div>
          </div>
        </motion.div>

        <div
          className="h-auto min-h-[20rem] bg-beige flex flex-col items-center justify-center py-8 px-4"
          ref={numbersRef}
        >
          <h1 className="font-helvatica text-black relative z-10 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-center px-4">
            Let our numbers do the talking!
          </h1>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-16 mt-8 sm:mt-14 mx-auto max-w-5xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center flex-1 mb-6 sm:mb-0"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-helvatica text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              >
                <CountUp
                  end={100}
                  duration={4}
                  suffix="+"
                  enableScrollSpy
                  scrollSpyOnce
                />
              </motion.p>
              <p className="font-helvatica text-black mt-2 text-sm sm:text-base">
                Expert Team
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center flex-1 mb-6 sm:mb-0"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-helvatica text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              >
                <CountUp
                  end={100000}
                  duration={3}
                  suffix="+"
                  enableScrollSpy
                  scrollSpyOnce
                />
              </motion.p>
              <p className="font-helvatica text-black mt-2 text-sm sm:text-base">
                Residential Projects Delivered (sq.ft)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center flex-1 mb-6 sm:mb-0"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-helvatica text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              >
                <CountUp
                  end={1500000}
                  duration={3}
                  suffix="+"
                  enableScrollSpy
                  scrollSpyOnce
                />
              </motion.p>
              <p className="font-helvatica text-black mt-2 text-sm sm:text-base">
                Commercial Projects Delivered (sq.ft)
              </p>
            </motion.div>
          </div>
        </div>

        <Portfolio />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-helvatica text-black text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-6"
        >
          Noted Clients
        </motion.h1>
        <LogoMarquee />
        <div className="bg-beige flex flex-col items-center justify-center mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-helvatica text-black text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-10"
          >
            Awards & Features
          </motion.h1>
          <div className="w-full flex flex-wrap items-center justify-center gap-8  mt-0 px-4">
            <img src={AD} alt="" className="h-32 sm:h-32 md:h-40 lg:h-52" />
            <img src={FOAID} alt="" className="h-32 sm:h-32 md:h-40 lg:h-52" />
            <img src={IIID} alt="" className="h-32 sm:h-32 md:h-40 lg:h-52" />
            <img src={NDTV} alt="" className="h-32 sm:h-32 md:h-40 lg:h-52" />
            <img
              src={Sustainable}
              alt=""
              className="h-32 sm:h-32 md:h-40 lg:h-52"
            />
            <img src={TOI} alt="" className="h-32 sm:h-32 md:h-40 lg:h-52" />
          </div>
        </div>
      </div>
    </>
  );
}
