import ServiceSection from "../components/ServiceSection";
import { motion } from "framer-motion";

export default function Services() {
  // const fadeInUp = {
  //   initial: { opacity: 0, y: 50 },
  //   whileInView: { opacity: 1, y: 0 },
  //   viewport: { once: true },
  //   transition: { duration: 0.8, ease: "easeOut" }
  // };

  return (
    <div className="min-h-screen bg-white">
      <motion.div 
        // {...fadeInUp}
        className="flex flex-col items-center justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 px-4"
      >
        <h1 className="font-helvatica text-center text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-3xl">
          Comprehensive Architecture and Interior Design Services in Mumbai
        </h1>
        <p className="w-full sm:w-[28rem] font-helvatica text-center text-black text-xs sm:text-base md:text-lg mt-2 sm:mt-4">
          Explore our range of professional services designed to cater to all
          your architectural and interior design needs.
        </p>
      </motion.div>

      <ServiceSection
        title="Architecture Design"
        number={1}
        description="Reimagine your spaces with innovative architectural solutions that inspire and delight."
        services={[
          "Custom Residential & Commercial Building Designs",
          "Structural Planning and 3D Modeling",
          "Sustainable Architecture Solutions",
          "Local Building Code Compliance and Permits",
        ]}
      />

      <ServiceSection
        title="Interior Design"
        number={2}
        description="Infuse personality into your spaces with curated interior design solutions."
        services={[
          "Space Planning and Optimized Layouts",
          "Bespoke Furniture Design ans Styling",
          "Mood Boards, Material Selections & Colour Coordination",
          "Lighting Design to enhance ambience",
        ]}
      />

      <ServiceSection
        title="Design & Build Services"
        number={3}
        description="From concept to completion, we handle every aspect of your project."
        services={[
          "Turnkey Solutions for Residential, Commercial & Hospitality Spaces",
          "Budget Planning and Cost Estimation",
          "Construction Supervision and Vendor Coordination",
          "Quality Assurance and Final Handover",
        ]}
      />

      <ServiceSection
        title="Project Management"
        number={4}
        description="Delivering projects efficiently, effectively, and stress-free"
        services={[
          "Detailed Project Scheduling and Monitoring",
          "Resource Allocation and Cost Control",
          "On-Site Quality Checks and Vendor Management",
          "Timely Project Deliverables and Handovers",
        ]}
      />
    </div>
  );
}
