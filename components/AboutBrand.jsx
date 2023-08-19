import React from "react";
import Image from "next/image";

const AboutBrand = () => {
  const BikeBrand = [
    "bajaj.webp",
    "heroHonda.webp",
    "honda.webp",
    "jawa.webp",
    "ktm.webp",
    "mahindra.webp",
    "royalInfield.webp",
    "sujuki.webp",
    "tvs.webp",
    "yamaha.webp",
  ];

  return (
    <div className="bg-gradient-to-b from-white/20 to-white/0 bg-white/20 rounded-3xl shadow-md text-black border my-5 px-6 py-6">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 md:px-24 lg:px-32">
        {BikeBrand.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center"
            >
              <Image
                className="object-contain w-auto h-full max-w-[90px]"
                src={`/image/brand/${item}`}
                height={90}
                width={90}
                alt="About US - Brand - Bikefixup"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutBrand;
