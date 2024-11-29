import FeatureCard from './FeatureCard';

const features = [
  {
    title: "Client-Centric Approach",
    description: "We prioritize your vision and work closely with you to ensure every project reflects your unique style."
  },
  {
    title: "Innovative and Functional Designs",
    description: "We combine cutting-edge design techniques with a deep understanding of functionality to create spaces that are beautiful, practical, and timeless."
  },
  {
    title: "Commitment to Quality",
    description: "We use premium materials and adhere to the highest standards of craftsmanship, ensuring long-lasting results that exceed expectations."
  },
  {
    title: "Proven Track Record",
    description: "Our diverse portfolio showcases successful projects across residential, commercial, and luxury spaces, earning us the trust and loyalty of our clients."
  },
  {
    title: "Transparent Communication",
    description: "With regular updates and clear communication, we ensure you are involved and informed at every stage of the project."
  },
  {
    title: "Expert Team of Professionals",
    description: "Our team of experienced architects, interior designers, and project managers bring unparalleled expertise, creativity, and precision to every project"
  },
  {
    title: "End-to-End Solutions",
    description: "From conceptualization to execution, we handle every aspect of your project, ensuring a seamless and stress-free experience for you."
  },
  {
    title: "Focus on Sustainability",
    description: "We integrate eco-friendly materials and energy-efficient solutions to create designs that are not only stunning but also environmentally conscious."
  },
  {
    title: "Timely Delivery",
    description: "We value your time and guarantee project completion within the agreed timeline, without compromising on quality."
  }
];

export default function WhyChooseUs() {
  return (
    <div className="mt-28">
      <h1 className="font-marbley text-black relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-center">
        Why Choose Us?
      </h1>
      <div className="flex flex-wrap justify-center items-stretch gap-4 mt-14 mx-auto max-w-7xl px-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}