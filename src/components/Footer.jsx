import { FaInstagram, FaPinterest } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full h-[200px] sm:h-[225px] md:h-[250px] lg:h-[275px] bg-[#737057] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-start">
      <h1 className="font-marbley text-beige text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl tracking-tighter break-words relative group cursor-pointer">
        squarefootstudio@gmail.com
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige transition-all duration-300 group-hover:w-full"></span>
      </h1>
      <div className="w-full md:w-1/2 flex flex-row items-center justify-between mt-auto">
        <div className="flex items-center gap-2">
          <FaInstagram className="text-beige text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" />
          <h1 className="font-manrope text-beige text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-tighter">
            Instagram
          </h1>
        </div>
        <h1 className="font-manrope text-beige text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-tighter">
          @squarefootstudio
        </h1>
      </div>
      <hr className="w-full md:w-1/2 border-beige my-2" />
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <div className="flex flex-row items-center justify-between w-full md:w-1/2">
          <div className="flex items-center gap-2">
            <FaPinterest className="text-beige text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" />
            <h1 className="font-manrope text-beige text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-tighter">
              Pinterest
            </h1>
          </div>
          <h1 className="font-manrope text-beige text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-tighter">
            @squarefootstudio
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-x-8 md:gap-x-12 lg:gap-x-20">
          <h1 className="font-marbley text-beige text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-tighter cursor-pointer relative group">
            Designed by Keyur Rathod
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-beige transition-all duration-300 group-hover:w-full"></span>
          </h1>
          <h1 
            className="font-marbley text-beige text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-tighter cursor-pointer relative group"
            onClick={() => {
              const scrollToTop = () => {
                const currentPosition = window.scrollY;
                if (currentPosition > 0) {
                  window.requestAnimationFrame(() => {
                    window.scrollTo(0, currentPosition - currentPosition/35);
                    scrollToTop();
                  });
                }
              };
              scrollToTop();
            }}
          >
            Back to Top
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-beige transition-all duration-300 group-hover:w-full"></span>
          </h1>
        </div>
      </div>
    </div>
  );
}
