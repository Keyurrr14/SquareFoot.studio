import { motion } from "framer-motion";

export default function ServiceSection({
  title,
  number,
  description,
  services,
}) {
  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: "easeOut" }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <>
      <motion.div 
        {...fadeIn}
        className="flex items-center justify-between border-y border-brown py-4 m-8"
      >
        <h1 className="font-marbley font-bold text-center text-brown text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-3xl">
          {title}
        </h1>
        <h1 className="font-marbley font-bold text-center text-brown text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-3xl">
          {number.toString().padStart(2, "0")}
        </h1>
      </motion.div>
      <motion.div 
        {...fadeInUp}
        className="flex flex-col md:flex-row items-center justify-center gap-5 p-5"
      >
        <div className="hidden md:block w-full md:w-1/2 h-[30vh] md:h-[50vh]"></div>
        <div className="w-full md:w-1/3 h-[5vh] md:h-[50vh] md:border-x border-brown flex items-center justify-start md:justify-center p-4 md:p-5">
          <p className="font-marbley text-left text-brown text-lg sm:text-2xl md:text-3xl lg:text-4xl tracking-tighter leading-tight">
            {description}
          </p>
        </div>
        <div className="w-full md:w-1/2 h-auto md:h-[50vh] flex items-center mt-4 md:mt-0">
          <ul className="list-disc font-manrope text-left text-brown tracking-tighter cursor-pointer space-y-2 md:space-y-4 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pl-3 md:pl-8">
            {services.map((service, index) => (
              <li
                key={index}
                className="transition-all duration-300 hover:text-light-brown hover:translate-x-2"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
}
