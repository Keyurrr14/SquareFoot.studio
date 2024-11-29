export default function FeatureCard({ title, description }) {
  return (
    <div
      className="text-center border border-light-black/30 p-4 rounded-lg w-full sm:w-[calc(50%-1rem)] lg:w-[calc(20%-1rem)] flex flex-col
        transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
    >
      <h1 className="font-marbley text-black text-xl sm:text-2xl md:text-3xl">
        {title}
      </h1>
      <p className="font-manrope text-black mt-2 text-sm flex-grow">
        {description}
      </p>
    </div>
  );
}
