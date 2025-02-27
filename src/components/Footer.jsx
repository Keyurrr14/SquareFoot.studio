import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  return (
    <footer
      id="contact"
      className="w-full h-auto min-h-[200px] bg-zinc-900 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center"
    >
      {/* Left side */}
      <div className="w-full flex flex-col lg:flex-row px-4 sm:px-8 lg:px-12">
        <div className="w-full lg:w-1/2 lg:ml-14">
          <span className="font-helvatica text-beige text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl tracking-tighter break-words relative group cursor-pointer">
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige transition-all duration-300 group-hover:w-full"></span>
          </span>
          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between mt-5">
            <div className="flex items-center gap-2">
              <h1 className="font-helvatica text-beige text-sm sm:text-sm md:text-sm lg:text-md xl:text-lg tracking-tighter">
                Support
              </h1>
            </div>
            <h1 className="font-helvatica text-beige cursor-pointer text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl tracking-tighter mt-2 sm:mt-0">
              connect@squarefoot.studio
            </h1>
          </div>
          <hr className="w-full border-beige my-2" />
          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="font-helvatica text-beige text-sm sm:text-sm md:text-sm lg:text-md xl:text-lg tracking-tighter">
                Jobs
              </h1>
            </div>
            <h1 className="font-helvatica text-beige cursor-pointer text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl tracking-tighter mt-2 sm:mt-0">
              career@squarefoot.studio
            </h1>
          </div>
          <div className="w-full mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30145.171403332508!2d72.8021047851144!3d19.18880588205961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6914fe3a8e5%3A0x73f264109c4db9d4!2sMalad%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1734254408826!5m2!1sen!2sin"
              title="SquareFoot.studio Map"
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
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0 px-0 sm:px-4">
          <form className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg w-full h-full flex flex-col justify-center max-w-md border border-beige/30">
            <h2 className="font-helvatica text-beige text-2xl sm:text-3xl lg:text-4xl mb-6 text-center">
              Talk to our <span className="text-yellow-500">Consultant</span>
            </h2>

            <div className="mb-4">
              <input
                type="text"
                className="w-full px-3 py-2 bg-transparent border-b-2 border-beige/30 font-helvatica text-beige placeholder-beige/70 focus:outline-none focus:border-beige transition-colors"
                placeholder="Name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div className="mb-6">
              <input
                type="tel"
                className="w-full px-3 py-2 bg-transparent border-b-2 border-beige/30 font-helvatica text-beige placeholder-beige/70 focus:outline-none focus:border-beige transition-colors"
                placeholder="Phone Number"
                minLength={10}
                maxLength={10}
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                className="w-full px-3 py-2 bg-transparent border-b-2 border-beige/30 font-helvatica text-beige placeholder-beige/70 focus:outline-none focus:border-beige transition-colors"
                placeholder="Email (Optional)"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>

            <button className="w-full bg-yellow-500  text-black font-helvatica font-bold py-2 rounded-lg transition-all duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom credits */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mt-8 px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center gap-5 text-2xl sm:text-3xl text-beige cursor-pointer lg:ml-14">
          <a
            href="https://www.instagram.com/squarefoot.studio_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:scale-110 transition-transform text-4xl" />
          </a>
          <a
            href="https://wa.me/+917862099999" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp className="hover:scale-110 transition-transform text-4xl" />
          </a>
        </div>
        <h1
          className="font-helvatica text-beige text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-tighter cursor-pointer relative group lg:mr-24"
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
    </footer>
  );
}
