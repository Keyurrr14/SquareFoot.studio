import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSmoothScroll } from "../context/SmoothScrollContext";
import Footer from "../components/Footer";
import whatsapp from "../assets/images/Whatsapp.webp";

export default function RootLayout() {
  const location = useLocation();
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location, lenis]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main data-scroll-container>
        <Outlet />
      </main>
      <Footer />

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/+917862099999"  // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full p-3transition-transform duration-300 hover:scale-110"
      >
        <img src={whatsapp} alt="WhatsApp" className="w-14 h-14 sm:w-24 sm:h-24 xs:w-9 xs:h-9" />
      </a>
    </div>
  );
}
