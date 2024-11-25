import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-beige">
        <h1 className="text-3xl font-mounties text-brown">
          Welcome to SquareFoot.studio
        </h1>
      </div>
    </>
  );
}
