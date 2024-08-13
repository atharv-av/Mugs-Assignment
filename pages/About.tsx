import { SkillSlider } from "@/components/SkillSlider";
import React from "react";

const mySkills = [
  {
    name: "UX",
    value: 95,
  },
  {
    name: "Website Design",
    value: 88,
  },
  {
    name: "App Design",
    value: 97,
  },
  {
    name: "Graphic Design",
    value: 92,
  },
];

const AboutPage = () => {
  return (
    <section
      id="about"
      className="flex w-full md:flex-row items-center justify-between font-poppins"
    >
      <div className="relative lg:flex flex-col items-center justify-between lg:w-1/3 w-full hidden">
        <div className="bg-[url('/images/person-2.png')] bg-no-repeat bg-center bg-contain h-[617.24px] w-full relative">
          <div className="absolute lg:block hidden top-[28%] left-1/2 transform -translate-x-1/2 bg-[#FD6F00] opacity-60 w-4/5 h-14"></div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:w-1/2 w-full">
        <p className="font-semibold text-6xl dark:text-white">About Me</p>
        <p className="font-normal text-base dark:text-white">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <div className="flex flex-col gap-2">
          {mySkills.map((skill, index) => (
            <div key={index} className="flex flex-col gap-2">
              <p className="font-semibold text-base dark:text-white">
                {skill.name}
              </p>
              <SkillSlider
                className="bg-[#EDECEC] rounded-lg w-full"
                disabled
                defaultValue={[skill.value]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
