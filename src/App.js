import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SmoothScrollProvider } from "./context/SmoothScrollContext";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <Router>
      <SmoothScrollProvider>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </SmoothScrollProvider>
    </Router>
  );
}
