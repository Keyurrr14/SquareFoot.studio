import AnimatedCursor from "react-animated-cursor";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SmoothScrollProvider } from "./context/SmoothScrollContext";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
export default function App() {
  return (
    <Router>

      {/* <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "black",
        }}
        outerStyle={{
          backgroundColor: "black",
        }}
      /> */}
      <SmoothScrollProvider>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Home />} />
          </Route>
        </Routes>
      </SmoothScrollProvider>
    </Router>
  );
}

// https://drive.google.com/drive/folders/1YsXe-1YCyTzP4KbF99dh1j9k_LZtQeTU?usp=share_link