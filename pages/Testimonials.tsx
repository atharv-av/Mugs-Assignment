"use client";

import Image from "next/image";
import React, { useState } from "react";

import { CgQuote } from "react-icons/cg";

const testimonials = [
  {
    image: "/images/testimonial-1.png",
    name: "Name",
    role: "CEO",
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    image: "/images/testimonial-1.png",
    name: "Name",
    role: "CEO",
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    image: "/images/testimonial-2.png",
    name: "Name",
    role: "CEO",
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    image: "/images/testimonial-2.png",
    name: "Name",
    role: "CEO",
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
];

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <section
      id="testimonials"
      className="flex flex-col gap-8 items-center justify-center font-poppins py-16"
    >
      <h2 className="text-5xl text-center font-semibold dark:text-white">
        Testimonials
      </h2>
      <p className="w-3/5 font-normal text-base text-center max-w-2xlsemiboldfont-semibold dark:text-white">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </p>

      <div className="relative w-full max-w-6xl overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / 3)}%))`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`w-3/5 rounded-lg flex-shrink-0 transition-all duration-300 ${
                index === currentIndex
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-50"
              }`}
              style={{
                transform: `scale(${index === currentIndex ? 1 : 0.9})`,
                margin: currentIndex === 0 && index === 0 ? "0 auto" : "",
                backgroundColor: index === currentIndex ? "#F8F8F8" : "#FFFFFF",
              }}
            >
              <div className={`rounded-lg p-8 flex items-center mx-auto`}>
                <div className="mr-6 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile picture`}
                    width={100}
                    height={100}
                    className="rounded-full object-cover shadow-lg"
                  />
                </div>
                <div className="flex-grow">
                  <div className="text-[#424242] italic mb-4 relative">
                    <CgQuote className="text-[#FD6F00] text-[35px] absolute top-[-0.5em] left-[-0.8em]" />
                    {testimonial.quote}
                    <CgQuote className="text-[#FD6F00] text-[35px] absolute bottom-[-0.5em] right-[1em]" />
                  </div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-10 h-3 rounded-lg mx-1 ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
