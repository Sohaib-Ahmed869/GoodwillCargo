import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Page";
import Contact from "./contact/Page";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Footer";
import About from "./about/Page";
import Service from "./service/Page";
import PrivacyPolicy from "./privacy-policy/page";

const App = () => {
  return (
    <div className="font-outfit">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
