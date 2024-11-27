import { motion } from "framer-motion";

export default function ProjectSection({ type, location, image1, image2, order = [1, 2, 3], animation }) {
  const sections = [
    <motion.div key="info" className="w-full md:w-1/3 h-[10vh] md:h-[80vh] bg-beige flex flex-col items-center justify-center" {...animation}>
      <h1 className="font-manrope text-brown relative z-10 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-tighter text-center border-2 border-brown rounded-full py-0.5 px-2 w-fit mx-auto">
        {type}
      </h1>
      <h1 className="font-manrope text-brown relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-center">
        {location}
      </h1>
    </motion.div>,

    <motion.div key="image1" className="w-full md:w-1/3 h-[50vh] md:h-[80vh] bg-brown" {...animation}>
      <img
        src={image1}
        alt={`${location}`}
        className="object-cover w-full h-full"
      />
    </motion.div>,

    <motion.div key="image2" className="hidden md:block w-1/3 h-[80vh] bg-light-brown" {...animation}>
      <img
        src={image2}
        alt={`${location}`}
        className="object-cover w-full h-full"
      />
    </motion.div>
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 px-4 my-8">
      {order.map(index => sections[index - 1])}
    </div>
  );
}