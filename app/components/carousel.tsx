"use client";

import React from "react";
import Image from "next/image";

const logos = [
  { src: "/assets/next.svg", alt: "Next.js", className: "invert brightness-0" },
  { src: "/assets/python.png", alt: "Python", className: "" },
  { src: "/assets/xgboost.png", alt: "XGBoost", className: "" },
];

const Carousel = () => {
  return (
    <div className="w-full bg-[#0f0f19] py-8 text-center">
      <p className="text-gray-500 text-sm mb-4">Powered by</p>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={64}
            height={64}
            className={`grayscale ${index == 0 ? 'opacity-40' : 'opacity-80'} hover:opacity-100 transition duration-300 ${logo.className}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
