import HomeImage3 from "../assets/images/HomeImage3.webp";
import HomeImage4 from "../assets/images/HomeImage4.webp";
import LogoMarquee from "../components/LogoMarquee";
import ProjectSection from "../components/ProjectSection";

export default function Projects() {
  return (
    <div className="min-h-screen bg-beige">
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="font-marbley text-center text-brown text-9xl">
          Projects
        </h1>
        <p className="w-96 font-manrope text-center text-brown">
          Our interior design process for each project is completely unique. We
          take into consideration the client’s style, personality and specific
          needs to ensure their vision is executed perfectly.
        </p>
      </div>
      <div className="mt-5"></div>
      {/* <LogoMarquee /> */}
      <ProjectSection
        type="Residential"
        location="Oberoi Sky City"
        image1={HomeImage4}
        image2={HomeImage3}
        order={[1, 2, 3]}
      />
      <ProjectSection
        type="Residential"
        location="Oberoi Sky City"
        image1={HomeImage4}
        image2={HomeImage3}
        order={[3, 2, 1]}
      />
      <ProjectSection
        type="Residential"
        location="Oberoi Sky City"
        image1={HomeImage4}
        image2={HomeImage3}
        order={[1, 2, 3]}
      />
    </div>
  );
}
