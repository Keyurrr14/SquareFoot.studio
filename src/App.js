import AnimatedCursor from "react-animated-cursor";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SmoothScrollProvider } from "./context/SmoothScrollContext";
import RootLayout from "./layout/RootLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
export default function App() {
  return (
    <Router>
      <AnimatedCursor
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
      />
      <SmoothScrollProvider>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </SmoothScrollProvider>
    </Router>
  );
}
