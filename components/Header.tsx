"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const menuList = [
  {
    name: "Home",
    id: "#home",
  },
  {
    name: "About Me",
    id: "#about",
  },
  {
    name: "Services",
    id: "#services",
  },
  {
    name: "Testimonials",
    id: "#testimonials",
  },
  {
    name: "Contact",
    id: "#contact",
  },
];

const Navbar = () => {
  return (
    <header className="hidden lg:block px-16">
      <div className="mx-auto flex p-5 flex-col md:flex-row items-center md:justify-between">
        <Link
          href="#home"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
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
          <span className="text-xl font-normal text-[#1E1E1E] font-montserrat dark:text-white">
            umair
          </span>
        </Link>
        <DarkModeSwitch />
        <div className="md:ml-auto flex items-center text-base justify-center gap-8 font-normal font-poppins">
          {menuList.map((item, index) => (
            <p
              key={index}
              className="hover:font-semibold cursor-pointer dark:text-white"
              id={`${item.id}`}
            >
              {item.name}
            </p>
          ))}
          <Button
            onClick={() => {}}
            className="bg-[#FD6F00] dark:bg-[#FD6F00] hover:font-semibold"
          >
            Download CV
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
