import React from "react";

import Navbar from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import AboutPage from "@/pages/About";
import HomePage from "@/pages/Home";
import ServicesPage from "@/pages/Services";
import ProjectsPage from "@/pages/Projects";
import TestimonialsPage from "@/pages/Testimonials";
import ContactPage from "@/pages/Contact";
import FooterPage from "@/pages/Footer";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-12 lg:gap-0 dark:bg-[#1E1E1E] lg:px-32 md:px-24 px-6">
        <Navbar />
        <MobileHeader />
        <HomePage />
        <AboutPage />
        <ServicesPage />
        <ProjectsPage />
        <TestimonialsPage />
        <ContactPage />
      </div>
      <FooterPage />
    </>
  );
};

export default Home;
