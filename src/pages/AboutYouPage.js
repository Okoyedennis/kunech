import React from 'react'
import AboutYou from "../components/AboutYouComponents/AboutYouComponents";
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import img1 from "../asset/logo-white.svg";


const AboutYouPage = () => {
  return (
    <div>
      <Navbar bg="#071B3D" color="#fff" img={img1} />
      <AboutYou />
      <Contact />
      <Footer />
    </div>
  );
}

export default AboutYouPage;