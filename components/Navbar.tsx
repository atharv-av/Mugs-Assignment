"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { DarkModeSwitch } from "./DarkModeSwitch";

const Navbar = () => {
  const menuList = [
    "Home",
    "About Me",
    "Services",
    "Projects",
    "Testimonials",
    "Contact",
  ];
  return (
    <header className="text-gray-600 md:px-14">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center lg:justify-between">
        <Link
          href="#"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image
            className=""
            src="/images/logo.png"
            alt="Logo"
            height={40}
            width={40}
          />
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          <span className="ml-3 text-xl font-bold font-montserrat dark:text-white">
            M
          </span>
          <span className="text-xl font-light text-[#1E1E1E] font-montserrat dark:text-white">
            umair
          </span>
        </Link>
        <DarkModeSwitch />
        <div className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-8 dark:text-white font-normal font-poppins">
          {menuList.map((item, index) => (
            <p
              key={index}
              className="hover:font-semibold cursor-pointer"
            >
              {item}
            </p>
          ))}
          <Button onClick={() => {}} className="bg-[#FD6F00] dark:bg-[#FD6F00] hover:font-semibold">
            Download CV
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
