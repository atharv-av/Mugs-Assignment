import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const services = [
  {
    icon: "/images/ui-ux-design-icon.png",
    title: "UI/UX",
    height: 68, 
    width: 68
  },
  {
    icon: "/images/web-design-icon.png",
    title: "Web Design",
    height: 58, 
    width: 58
  },
  {
    icon: "/images/app-design-icon.png",
    title: "App Design",
    height: 37, 
    width: 37
  },
  {
    icon: "/images/graphic-design-icon.png",
    title: "Graphic Design",
    height: 75, 
    width: 75
  },
];

const ServicesPage = () => {
  return (
    <section id="services" className="flex flex-col gap-5 items-center justify-center font-poppins">
      <p className="text-6xl font-semibold dark:text-white">Services</p>
      <p className="text-base font-semibold dark:text-white md:w-3/5 text-center">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </p>
      <div className="flex lg:flex-row flex-col items-center gap-4">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col gap-3 p-6">
            
              <Image
                src={service.icon}
                alt={service.title}
                height={service.height}
                width={service.width}
              />
              <p className="font-semibold text-2xl">{service.title}</p>
            
            <p className="font-normal text-base">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
