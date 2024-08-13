import Navbar from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import {HomePage} from "@/pages/Home";
import React from "react";

const Home = () => {
  return (
    <div className="dark:bg-black lg:px-32 md:px-24 px-6">
      <Navbar />
      <MobileHeader />
      <HomePage />
    </div>
  );
};

export default Home;
