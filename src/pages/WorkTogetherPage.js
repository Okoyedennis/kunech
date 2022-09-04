import React from 'react'
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import WorkTogether from '../components/WorkTogetherComponent/WorkTogether';
import img1 from "../asset/logo.svg";


const WorkTogetherPage = () => {
  return (
    <div>
      <Navbar bg="#fff" color="#071B3D" img={img1} />
      <WorkTogether />
          <Contact />
          <Footer />
    </div>
  );
}

export default WorkTogetherPage