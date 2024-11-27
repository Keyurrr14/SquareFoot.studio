import HomeImage1 from "../assets/images/HomeImage1.webp";
import HomeImage2 from "../assets/images/HomeImage2.webp";
import HomeImage3 from "../assets/images/HomeImage3.webp";
import HomeImage4 from "../assets/images/HomeImage4.webp";

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-beige">
        <div className="w-full flex flex-col items-center justify-center px-4 py-16 md:py-24">
          <h1 className="font-marbley text-brown text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-4xl">
            Crafting Exceptional Spaces with Passion and Precision
          </h1>
          <h1 className="font-manrope text-light-brown relative z-10 text-base xs:text-sm sm:text-lg md:text-xl w-[95%] xs:w-[90%] sm:w-[70%] md:w-[50%] lg:w-[50%] text-center mt-4 xs:mt-6 sm:mt-8 md:mt-10 px-2 xs:px-4">
            Squarefoot Studio, based in Mumbai, specializes in architectural
            design, interior styling, and turnkey projects. Their experienced
            team has transformed residential, commercial, and hospitality spaces
            into timeless masterpieces.
          </h1>

          <div className="w-[98%] h-screen bg-brown mx-auto my-14 relative overflow-hidden flex flex-col items-center justify-center"></div>

          <div className="w-full min-h-screen px-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="flex flex-col items-start justify-start mt-6 md:mt-10">
              <h1 className="font-marbley text-brown relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-left tracking-tighter">
                With years of experience in the industry, our team of
                architects, interior designers, and project managers has
                transformed numerous residential, commercial, and hospitality
                spaces into timeless masterpieces.
              </h1>
              <img
                src={HomeImage2}
                alt="HomeImage2"
                className="object-cover mt-4 md:mt-8 w-full h-[90vh] sm:h-[95vh] md:h-[120vh] lg:h-[140vh]"
              />
            </div>
            <div className="flex flex-col items-start md:items-end justify-between mt-6 md:mt-10 lg:mt-12">
              <div className="flex flex-col items-start md:items-end justify-between w-full">
                <img
                  src={HomeImage1}
                  alt="HomeImage1"
                  className="object-cover w-full sm:w-[85%] md:w-3/4 h-[40vh] sm:h-[45vh] md:h-[75vh] lg:h-[85vh]"
                />
                <p className="font-marbley text-brown text-2xl sm:text-3xl md:text-5xl mt-4 sm:mt-6 md:mt-8 w-full sm:w-[85%] md:w-3/4 text-left md:text-left leading-relaxed">
                  Why Choose Us?
                </p>
                <ul className="font-manrope list-disc text-brown text-sm sm:text-md md:text-lg sm:mt-2 md:mt-4 w-full sm:w-[85%] md:w-3/4 text-left md:text-left leading-relaxed">
                  <li>
                    Innovative Design: We stay ahead of the curve by integrating
                    the latest trends and technologies.
                  </li>
                  <li>
                    Client-Centric Approach: Your vision is our priority, and we
                    tailor our services to meet your unique needs.
                  </li>
                  <li>
                    Sustainable Practices: We incorporate eco-friendly solutions
                    to create green, energy-efficient spaces.
                  </li>
                  <li>
                    Proven Expertise: Trusted by clients across Mumbai and
                    beyond for delivering excellence on time and within budget.
                  </li>
                </ul>
              </div>
              <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-10 w-full sm:w-[85%] md:w-3/4">
                <img
                  src={HomeImage3}
                  alt="HomeImage3"
                  className="object-cover w-1/2 h-[40vh] sm:h-[45vh] md:h-[35vh] lg:h-[45vh]"
                />
                <img
                  src={HomeImage4}
                  alt="HomeImage4"
                  className="object-cover w-1/2 h-[40vh] sm:h-[45vh] md:h-[35vh] lg:h-[45vh]"
                />
              </div>
            </div>
          </div>
          <div className="w-[90%] sm:w-[80%] md:w-[70%] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex flex-col items-center justify-center mt-6 sm:mt-8 md:mt-14 mx-auto">
            <img
              src={HomeImage1}
              alt="Interior Design"
              className="w-full sm:w-[85%] md:w-1/3 h-[200px] sm:h-[300px] md:h-[400px] object-cover"
            />
            <p className="w-[90%] sm:w-[70%] md:w-3/4 lg:w-3/5 font-manrope text-brown text-center text-sm sm:text-lg md:text-xl mt-4 sm:mt-6 md:mt-8">
              We'll transform your house into a functional beautiful space with
              furniture, fabrics, accessories and provide you with custom pieces
              tailor-made for your living space.
            </p>
            <h1 className="font-southam text-brown -rotate-12 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl mt-4 sm:mt-6 md:mt-8">
              Faizal Azam
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
