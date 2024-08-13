import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";

const projects = [
  {
    image: "/images/aircalling-landing-page.png",
    type: "Web Design",
    title: "AirCalling Landing Page Design",
  },
  {
    image: "/images/business-landing-page.png",
    type: "Web Design",
    title: "Business Landing Page Design",
  },
  {
    image: "/images/ecom-web-page.png",
    type: "Web Design",
    title: "Ecom Web Page Design",
  },
];

const ProjectsPage = () => {
  return (
    <section
      id="services"
      className="flex flex-col gap-5 items-center justify-center lg:mt-16 font-poppins"
    >
      <p className="text-6xl text-center font-semibold dark:text-white">
        My Projects
      </p>
      <p className="font-normal text-base dark:text-white md:w-3/5 text-center">
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
        est risus lectus. Phasellus consequat urna tellus
      </p>

      <Tabs defaultValue="web" className="w-full max-w-3xl">
        <TabsList className="flex justify-center gap-3 bg-transparent dark:bg-[#1E1E1E] flex-wrap">
          <TabsTrigger
            className="font-normal text-base px-4 py-2 bg-[#F8F8F8] dark:bg-white text-black dark:text-black rounded-lg hover:bg-[#FD6F00] hover:text-white transition-colors border border-[#545454]"
            value="all"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            className="font-normal text-base px-4 py-2 bg-[#F8F8F8] dark:bg-white text-black dark:text-black rounded-lg hover:bg-[#FD6F00] hover:text-white transition-colors border border-[#545454]"
            value="ui-ux"
          >
            UI/UX
          </TabsTrigger>
          <TabsTrigger
            className="font-normal text-base px-4 py-2 bg-[#F8F8F8] dark:bg-white text-black dark:text-black rounded-lg hover:bg-[#FD6F00] hover:text-white transition-colors border border-[#545454]"
            value="web"
          >
            Web Design
          </TabsTrigger>
          <TabsTrigger
            className="font-normal text-base px-4 py-2 bg-[#F8F8F8] dark:bg-white text-black dark:text-black rounded-lg hover:bg-[#FD6F00] hover:text-white transition-colors border border-[#545454]"
            value="app"
          >
            App Design
          </TabsTrigger>
          <TabsTrigger
            className="font-normal text-base px-4 py-2 bg-[#F8F8F8] dark:bg-white text-black dark:text-black rounded-lg hover:bg-[#FD6F00] hover:text-white transition-colors border border-[#545454]"
            value="graphic"
          >
            Graphic Design
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col gap-2 p-6 bg-white border-none dark:border-none shadow-none dark:shadow-none dark:bg-[#1E1E1E]"
          >
            <Image
              src={project.image}
              alt={project.title}
              height={489}
              width={445}
            />
            <p className="font-normal text-sm text-[#FD6F00]">{project.type}</p>

            <p className="font-bold text-base dark:text-white">
              {project.title}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
