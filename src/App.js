import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SmoothScrollProvider } from "./context/SmoothScrollContext";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact"
export default function App() {
  return (
    <Router>
      <SmoothScrollProvider>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />}/>
          </Route>
        </Routes>
      </SmoothScrollProvider>
    </Router>
  );
}
