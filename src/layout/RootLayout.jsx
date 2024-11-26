import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSmoothScroll } from "../context/SmoothScrollContext";
import Footer from "../components/Footer";

function RootLayout() {
  const location = useLocation();
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location, lenis]);

  return (
    <div className="min-h-screen bg-beige">
      <Navbar />
      <main data-scroll-container>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default RootLayout;
