import React from 'react'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Investment from '../components/InvestmentComponent/Investment'
import Navbar from '../components/Navbar/Navbar'
import img1 from "../asset/logo.svg";


const InvestmentPage = () => {
  return (
    <div>
      <Navbar bg="#fff" color="#071B3D" img={img1} />
      <Investment />
      <Contact />
      <Footer />
    </div>
  )
}

export default InvestmentPage