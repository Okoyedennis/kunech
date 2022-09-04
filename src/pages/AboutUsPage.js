import React from "react";
import AboutUsComponent from "../components/AboutUsComponent/AboutUsComponent";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import img1 from "../asset/logo-white.svg";


const AboutUsPage = () => {
  return (
    <div>
      <Navbar bg="#071B3D" color="#fff" img={img1} />
      <AboutUsComponent />
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
