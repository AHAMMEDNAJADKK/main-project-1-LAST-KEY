import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Storage from "./pages/Storage";
import Security from "./pages/Security";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how" element={<HowItWorks />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/security" element={<Security />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
