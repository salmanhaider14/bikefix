import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import image1 from "../public/assets/service-1.svg";
import image2 from "../public/assets/service-2.svg";
import image3 from "../public/assets/service-3.svg";
import image4 from "../public/assets/service-4.svg";
import surf1 from "../public/assets/surface1.png";
import MainLayout from "../layouts/MainLayout";

const service = () => {
  return (
    <MainLayout>
      {/* HEADER  */}
      <div className="flex justify-center items-center">
        <div className="serviceCard mx-1 flex flex-col justify-center items-center px-3 py-2 lg:px-10 lg:py-5 text-black">
          <Image className="w-10 h-10" src={image1} alt="" />
          <span className="text-center mt-2 font-semibold hidden md:block">
            <a href="/general-service"> General Service</a>
          </span>
        </div>
        <div className="serviceCard mx-1 flex flex-col justify-center items-center px-3 py-2 lg:px-10 lg:py-5 text-black">
          <Image className="w-10 h-10" src={image3} alt="" />
          <span className="text-center mt-2 font-semibold hidden md:block">
            <a href="/engine-work"> Engine Work</a>
          </span>
        </div>
        <div className="serviceCard mx-1 flex flex-col justify-center items-center px-3 py-2 lg:px-10 lg:py-5 text-black">
          <Image className="w-10 h-10" src={image4} alt="" />
          <span className="text-center mt-2 font-semibold hidden md:block">
            <a href="/body-work">Body Work</a>
          </span>
        </div>

        <div className="serviceCard mx-1 flex flex-col justify-center items-center px-3 py-2 lg:px-10 lg:py-5 text-black">
          <Image className="w-10 h-10" src={image2} alt="" />
          <span className="text-center mt-2 font-semibold hidden md:block">
            <a href="repair-work">Repair Work</a>
          </span>
        </div>
      </div>
      <div className="relative mt-20">
        <div className="absolute top-0 left-0 mb-5 text-black">
          <h1 className="text-3xl md:text-5xl  font-semibold">Engine Work</h1>
          <h3 className="text-md md:text-xl ">What service we provide?</h3>
        </div>
        <Image
          className="w-full h-[auto]"
          src="/image/service-banner.webp"
          height={1113}
          width={363}
          alt="BikeFixup Service Banner"
        />
      </div>
      <div className="grid grid-cols-12 my-20 gap-4">
        <div className="col-span-12 sm:col-span-5 flex items-center">
          <Image
            src="https://bikeadvice.in/wp-content/uploads/2020/07/Royal-Enfield-Service-on-Wheels-2-1280x720.jpeg"
            alt="Royal Enfield Service on Wheels"
            width={400}
            height={720}
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="col-span-12 sm:col-span-7">
          <div className="flex flex-col justify-between text-black bg-[rgba(255,255,255,0.05)] bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)] shadow-md backdrop-blur-lg rounded-3xl overflow-hidden">
            <div className="px-8 pt-5">
              <div className="flex items-center justify-start gap-5 mb-5">
                <Image
                  className="w-8 h-8"
                  src={surf1}
                  alt="BikeFixup General Service"
                />
                <h2 className="text-xl text-beta-900 font-semibold">
                  General Services
                </h2>
              </div>
              <div className="px-5">
                <ul className="flex-wrap list-disc">
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                </ul>
              </div>
            </div>
            <p className="px-8 py-3 text-xs">
              Any other additional problem with be reported post vehicle
              inspection
            </p>
            <div className="bg-[rgba(255,255,255,0.3)] bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)] shadow-md backdrop-blur-lg flex justify-between items-center px-10 py-3">
              <div className="text-sm text-blue-500 ">Inspection Charge</div>
              <div className="flex flex-col">
                <button className="rounded bg-gradient-to-br from-red-600 via-red-700 to-red-900 shadow-md dark:shadow-none py-1 px-4">
                  ₹199
                </button>
                <span className="text-black text-xs">Click to Add</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default service;
