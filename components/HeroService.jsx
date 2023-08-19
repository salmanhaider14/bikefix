import React from "react";
import bikeImage from "../public/assets/bike-1.svg";
import addServiceImage4 from "../public/assets/mobileService-1.svg";
import addServiceImage2 from "../public/assets/Vector-1.svg";
import addServiceImage3 from "../public/assets/Vector-2.svg";
import addServiceImage1 from "../public/image/usps/usps-1.svg";
import Image from "next/image";

const HeroService = () => {
  return (
    <div className="grid grid-cols-12 gap-6 p-10 bg-gradient-to-b from-white/20 to-white/0 bg-white/10 rounded-3xl shadow-md text-black relative mb-16">
      <div className="col-span-12 md:col-span-6 appServiceSecLeftCard p-10 flex flex-col sm:flex-row md:flex-col justify-around md:justify-between md:items-start">
        <div className="md:w-full flex flex-col justify-center items-center z-50 md:mx-5 lg:mx-0">
          <Image className="mb-[10px] w-[50px]" src={addServiceImage1} alt="" />
          <h4 className="text-center md:text-2xl text-xl font-semibold mb-1">
            Less Time Consuming
          </h4>
          <p className="text-center text-sm mx-0 ">
            Now, you will get your bike serviced/repaired in commenced time
          </p>
        </div>
        <div className="md:w-full flex flex-col justify-center items-center  z-50 md:mx-5 lg:mx-0">
          <Image className="mb-[10px] w-[50px]" src={addServiceImage2} alt="" />
          <h4 className="text-center md:text-2xl text-xl font-semibold mb-1">
            Easy Service Appointments
          </h4>
          <p className="text-center text-sm mx-0  ">
            You can book your bike service from home, office or anywhere on move
          </p>
        </div>
        <div className="md:w-full flex flex-col justify-center items-center z-50 md:mx-5 lg:mx-0">
          <Image className="mb-[10px] w-[50px]" src={addServiceImage3} alt="" />
          <h4 className="text-center md:text-2xl text-xl font-semibold mb-1">
            Sit & Relax
          </h4>
          <p className="text-center  text-sm mx-0">
            While bike is being serviced/repaired, Sit back and relax at your
            place
          </p>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 z-50">
        <div className="mb-36 sm:mb-80">
          <h3 className="md:text-4xl text-2xl font-semibold mb-3">
            Doorstep Bike <span className="text-beta-900">Service App</span>
          </h3>
          <p className="mb-5">
            No time to go to a bike workshop? No worries! With one tap in the
            app.
          </p>
        </div>
      </div>
      <Image
        className="absolute right-0 bottom-0 w-3/5"
        src={bikeImage}
        alt="BikeFix Bike Service - Door Step"
      />
      <Image
        className="absolute right-0 bottom-0 translate-y-1/2 w-3/5"
        src={addServiceImage4}
        alt="Bike Service"
      />
    </div>
  );
};
export default HeroService;
