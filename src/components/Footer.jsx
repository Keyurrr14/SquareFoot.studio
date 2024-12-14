export default function Footer() {
  return (
    <div className="w-full h-auto min-h-[200px] bg-[#737057] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-start">
      {/* Left side */}
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <span className="font-marbley text-beige text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl tracking-tighter break-words relative group cursor-pointer">
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige transition-all duration-300 group-hover:w-full"></span>
          </span>
          <div className="w-full flex flex-row items-center justify-between mt-5">
            <div className="flex items-center gap-2">
              <h1 className="font-manrope text-beige text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-tighter">
                Support
              </h1>
            </div>
            <h1 className="font-manrope text-beige text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-tighter">
              connect@squarefoot.studio
            </h1>
          </div>
          <hr className="w-full border-beige my-2" />
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="font-manrope text-beige text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-tighter">
                Jobs
              </h1>
            </div>
            <h1 className="font-manrope text-beige text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-tighter">
              careers@squarefoot.studio
            </h1>
          </div>
          <div className="w-full mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5163.491445694898!2d72.83300360315761!3d19.19491570018589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6e9f50ed749%3A0x55ae61930faaddd!2sMith%20Chowky%20Malad!5e0!3m2!1sen!2sin!4v1734149391366!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          <form className="bg-white/10 backdrop-blur-sm p-6 rounded-lg w-full max-w-md border border-beige/30">
            <h2 className="font-marbley text-beige text-2xl sm:text-3xl lg:text-4xl mb-6 text-center">
              Talk to our Consultant
            </h2>

            <div className="mb-4">
              <input
                type="text"
                className="w-full px-3 py-2 bg-transparent border-b-2 border-beige/30 font-manrope text-beige placeholder-beige/70 focus:outline-none focus:border-beige transition-colors"
                placeholder="Name"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                className="w-full px-3 py-2 bg-transparent border-b-2 border-beige/30 font-manrope text-beige placeholder-beige/70 focus:outline-none focus:border-beige transition-colors"
                placeholder="Email"
              />
            </div>

            <div className="mb-6">
              <input
                type="tel"
                className="w-full px-3 py-2 bg-transparent border-b-2 border-beige/30 font-manrope text-beige placeholder-beige/70 focus:outline-none focus:border-beige transition-colors"
                placeholder="Phone Number"
              />
            </div>

            <button className="w-full bg-transparent border border-beige text-beige font-manrope font-bold py-2 rounded-lg hover:bg-beige hover:text-[#737057] transition-all duration-300">
              Book Free Consultation
            </button>
          </form>
        </div>
      </div>

      {/* Bottom credits - moved outside the flex row */}
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mt-8">
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
                  window.scrollTo(0, currentPosition - currentPosition / 35);
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
  );
}
