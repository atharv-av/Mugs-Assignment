import React from "react";

import Navbar from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import AboutPage from "@/pages/About";
import { HomePage } from "@/pages/Home";

const Home = () => {
  return (
    <div className="flex flex-col gap-12 dark:bg-black lg:px-32 md:px-24 px-6">
      <Navbar />
      <MobileHeader />
      <HomePage />
      <AboutPage />
    </div>
  );
};

export default Home;
