"use client"

import React from "react";

import { menuList } from "./Header";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button";

import { DarkModeSwitch } from "./DarkModeSwitch";
import { Menu } from "lucide-react";

const MobileHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between lg:hidden p-5">
      <Link
        href="#home"
        className="flex title-font font-medium items-center"
      >
        <Image
          className=""
          src="/images/logo.png"
          alt="Logo"
          height={35}
          width={35}
        />
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        <span className="ml-3 text-lg font-bold font-montserrat dark:text-white">
          M
        </span>
        <span className="text-lg font-normal text-[#1E1E1E] font-montserrat dark:text-white">
          umair
        </span>
      </Link>
      <DarkModeSwitch />
      <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Menu className="dark:text-white"/></Button>
      </SheetTrigger>
      <SheetContent>
      <div className="flex flex-col gap-8 font-normal font-poppins py-10">
          {menuList.map((item, index) => (
            <Link
              key={index}
              className="hover:font-semibold text-lg cursor-pointer dark:text-white"
              href={`${item.id}`}
            >
              {item.name}
            </Link>
          ))}
          <Button
            onClick={() => {}}
            className="bg-[#FD6F00] dark:bg-[#FD6F00] hover:font-semibold dark:hover:bg-white dark:hover:text-black"
          >
            Download CV
          </Button>
        </div>
      </SheetContent>
    </Sheet>
    </div>
  );
};

export default MobileHeader;
