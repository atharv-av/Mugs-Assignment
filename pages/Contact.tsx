import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="flex flex-col gap-8 items-center justify-center font-poppins py-16"
    >
      <h2 className="text-5xl text-center font-semibold dark:text-white">
        Lets Design Together
      </h2>
      <p className="font-normal text-base text-center max-w-2xl dark:text-white">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </p>
      <div className="flex w-full items-center justify-center space-x-2">
        <Input
          type="email"
          placeholder="Email"
          className="bg-[##F8F8F8] border border-[#AFAFAF] w-2/5"
        />
        <Button className="bg-[#FD6F00] dark:bg-[#FD6F00] hover:font-semibold dark:hover:bg-white dark:hover:text-black">
          Contact Me
        </Button>
      </div>
    </section>
  );
};

export default ContactPage;
