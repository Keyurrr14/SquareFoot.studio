import { useEffect, useState } from "react";
import HomeImage2 from "../assets/images/HomeImage2.webp";

export default function Contact() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const newScale = 1 + scrolled * 0.001;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-beige overflow-x-hidden">
      <div className="w-[98%] h-screen mx-auto relative overflow-hidden flex flex-col items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${HomeImage2})`,
            transform: `scale(${scale})`,
            transition: "transform 0.1s ease-out",
            transformOrigin: "center center",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-75" />
        <h1 className="font-mounties text-light-brown relative z-10 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center px-4">
          Contact
        </h1>
        <h1 className="font-marbley text-light-brown relative z-10 text-base xs:text-lg sm:text-xl md:text-2xl w-[95%] xs:w-[90%] sm:w-[70%] md:w-[50%] lg:w-[50%] text-center mt-4 xs:mt-6 sm:mt-8 md:mt-10 px-2 xs:px-4">
          Don't hesitate to get in touch with us if you want to find out
          about design services that incorporate luxurious living and timeless
          interiors.
        </h1>
        <h1 className="font-marbley text-light-brown relative z-10 text-xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mt-10 sm:mt-16 md:mt-20 px-4 break-all sm:break-normal cursor-pointer">
          squarefootstudio@gmail.com
        </h1>
        <h1 className="font-marbley text-light-brown relative z-10 text-base xs:text-lg sm:text-xl md:text-2xl w-[95%] xs:w-[90%] sm:w-[70%] md:w-[50%] lg:w-[50%] text-center px-2 xs:px-4">
          +91 9372341605
        </h1>
      </div>
      <div className="p-5"></div>
    </div>
  );
}
