"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { menuList } from "@/components/Header";

import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const FooterPage = () => {
  return (
    <section
      id="footer"
      className="bg-[#F8F8F8] dark:bg-[#1E1E1E] w-full flex flex-col items-center justify-between pt-8 h-80"
    >
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
        <span className="text-xl font-bold font-montserrat dark:text-white ml-2">
          M
        </span>
        <span className="text-xl font-normal text-[#1E1E1E] font-montserrat dark:text-white">
          umair
        </span>
      </Link>
      <div className="md:flex hidden items-center text-base justify-center gap-8 font-normal font-poppins">
        {menuList.map((item, index) => (
          <Link
            key={index}
            className="hover:font-semibold cursor-pointer dark:text-white"
            href={`${item.id}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-row items-center gap-4 justify-center">
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
        <div className="bg-[#545454] dark:bg-[#121212] w-full text-center py-5">
        <span className="font-bold md:text-base text-sm text-white">© 2023</span>
        <span className="font-bold md:text-base text-sm text-[#FD6F00]"> Mumair</span>
        <span className="font-bold md:text-base text-sm text-white"> All Rights Reserved , Inc.</span>
      </div>
    </section>
  );
};

export default FooterPage;
