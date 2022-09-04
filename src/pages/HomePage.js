import React from 'react'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import HomeComponents from '../components/HomeComponents/HomeComponents'
import Navbar from '../components/Navbar/Navbar'
import img1 from "../asset/logo.svg";


const HomePage = () => {
  return (
    <div>
      <Navbar bg="#fff" color="#071B3D" img={img1} />
      <HomeComponents />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage