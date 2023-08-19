import React from "react";
import location from "../public/assets/location.svg";
import Image from "next/image";


const HeroLocation = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 py-12 md:py-20 bg-gradient-to-b from-white/20 to-white/0 bg-white/10 rounded-3xl shadow-md text-black relative mb-16">
      <div className="">
        <h2 className="text-beta-900 text-center text-3xl md:text-5xl font-semibold mb-8">
          Our Presence
        </h2>
        <div className="flex flex-wrap justify-start items-start gap-8 text-lg font-semibold">
            <span>Delhi</span>
            <span>Noida</span>
            <span>Gurgaon</span>
            <span>Lucknow</span>
            <span>Ghaziabad</span>
            <span>Hyderabad</span>
            <span>Jaipur</span>
            <span>spa</span>
            <span>Bubhneswar</span>
        </div>
      </div>
       <div className="">
          <Image
            className="absolute bottom-0 right-0 w-1/2 opacity-50 -z-30 md:w-1/3"
            src={location}
            alt="BikeFix Location"
          />
       </div>
    </div>
  );
};
export default HeroLocation;
