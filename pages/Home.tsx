import React from "react";

import { Button } from "@/components/ui/button";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

export const HomePage = () => {
  return (
    <section
      id="home"
      className="flex w-full md:flex-row flex-col-reverse items-center justify-between font-poppins"
    >
      <div className="flex flex-col lg:w-[45%] md:w-3/5 md:gap-1">
        <p className="font-bold md:text-lg dark:text-white">Hi I am</p>
        <p className="font-bold md:text-lg text-[#FD6F00]">Muhammad Umair</p>
        <p className="font-bold lg:text-7xl md:text-5xl text-3xl dark:text-white text-start">
          UI & UX
        </p>
        <p className="font-bold lg:text-7xl md:text-5xl text-3xl dark:text-white md:text-end">
          Designer
        </p>
        <div className="font-normal text-base dark:text-white lg:mt-3">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </div>
        <Link href="#contact">
          <Button className="bg-[#FD6F00] dark:bg-[#FD6F00] hover:font-semibold mt-2 dark:hover:bg-white dark:hover:text-black w-1/4">
            Hire Me
          </Button>
        </Link>
      </div>
      <div className="relative flex flex-col items-center justify-between md:w-1/3 w-full">
        <div className="bg-[url('/images/person-1.png')] bg-no-repeat bg-center bg-contain h-[617.24px] w-full relative">
          <div className="absolute lg:block hidden top-1/4 left-1/2 transform -translate-x-1/2 bg-[#FD6F00] opacity-60 w-4/5 h-14"></div>
        </div>
        <div className="flex flex-row items-center gap-4 justify-center relative md:bottom-36 lg:bottom-20 md:mb-0 mb-8">
          <FaFacebook
            size={32}
            className="hover:text-[#FD6F00] dark:text-white cursor-pointer dark:hover:text-[#FD6F00]"
          />
          <FaTwitter
            size={32}
            className="hover:text-[#FD6F00] dark:text-white cursor-pointer dark:hover:text-[#FD6F00]"
          />
          <FaInstagram
            size={32}
            className="hover:text-[#FD6F00] dark:text-white cursor-pointer dark:hover:text-[#FD6F00]"
          />
          <FaLinkedin
            size={32}
            className="hover:text-[#FD6F00] dark:text-white cursor-pointer dark:hover:text-[#FD6F00]"
          />
        </div>
      </div>
    </section>
  );
};
