import React from "react";

import Navbar from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import AboutPage from "@/pages/About";
import { HomePage } from "@/pages/Home";
import ServicesPage from "@/pages/Services";

const Home = () => {
  return (
    <div className="flex flex-col gap-12 lg:gap-0 dark:bg-black lg:px-32 md:px-24 px-6">
      <Navbar />
      <MobileHeader />
      <HomePage />
      <AboutPage />
      <ServicesPage />
    </div>
  );
};

export default Home;
