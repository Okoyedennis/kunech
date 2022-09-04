import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutYouPage from "../pages/AboutYouPage";
import AboutUsPage from "../pages/AboutUsPage";
import InvestmentPage from "../pages/InvestmentPage";
import WorkTogetherPage from "../pages/WorkTogetherPage";

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about_you" element={<AboutYouPage />} />
          <Route path="/about_us" element={<AboutUsPage />} />
          <Route path="/investment" element={<InvestmentPage />} />
          <Route path="/working_together" element={<WorkTogetherPage />} />
        </Routes>
      </AnimatePresence>
    );
}

export default AnimatedRoutes