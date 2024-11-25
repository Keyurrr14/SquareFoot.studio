import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}
