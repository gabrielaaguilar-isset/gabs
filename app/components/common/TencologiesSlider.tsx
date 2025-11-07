"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import technologies from "../../content/tecnologies.json";

export default function TechnologiesSlider() {
  const [isPaused, setIsPaused] = useState(false);

  const techArray = Object.values(technologies);

  const logos = [...techArray, ...techArray];

  return (
    <div
      className="relative overflow-hidden w-full py-10 -mt-5 sm:mt-3"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`flex gap-4 lg:gap-24 items-center w-max animate-scroll ${
          isPaused ? "paused" : ""
        } xl:animate-none xl:justify-center xl:flex-wrap`}
      >
        {logos.map((tech, index) => (
          <Image
            key={index}
            src={tech.src}
            alt={tech.alt}
            width={110}
            height={45}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
}
