import React from "react";
import Image from "next/image";
import image1 from "../public/assets/service-1.svg";
import image2 from "../public/assets/service-2.svg";
import image3 from "../public/assets/service-3.svg";
import image4 from "../public/assets/service-4.svg";
import rightBgElement from "../public/assets/002.svg";
import rightBgBallElement from "../public/assets/blobanimation.svg";
import surf3 from "../public/assets/surface3.png";
import Footer from "../components/Footer";

const engineWork = () => {
  return (
    <div className="bg-main p-4 md:p-16">
      <Image
        className="absolute top-[190px] right-0 w-[250px] -z-10"
        src={rightBgBallElement}
        alt="element"
      />
      <Image
        className="absolute top-[200px] right-0 w-[200px] -z-10"
        src={rightBgElement}
        alt="element"
      />
      <div
        className="bg-main overflow-hidden"
        style={{
          minHeight: "100vh",
          boxShadow: "5px 7px 10px rgba(0,0,0,0.3)",
          outline: "2px solid white",
          borderRadius: "1rem",
        }}
      >
        <div
          className="flex justify-center items-center  p-5 "
          style={{
            boxShadow: "2px 3px 8px rgba(0,0,0,0.5)",
            borderRadius: "1rem",
          }}
        >
          {" "}
          <a
            href="/service"
            className="absolute top-0 left-10 ml-4 mt-4  underline"
          >
            Back
          </a>
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
          <div className="absolute top-0 left-20 mb-5 text-black">
            <h1 className="text-3xl md:text-5xl  font-semibold">Engine Work</h1>
            <h3 className="text-md md:text-xl ">What service we provide?</h3>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
            }}
            className="flex justify-center items-center mt-2"
          >
            <Image
              src="/image/service-banner.webp"
              height={1113}
              width={1100}
              alt="BikeFixup Service Banner"
            />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="grid grid-cols-12 my-20 gap-4">
            <div className="col-span-12 sm:col-span-5 flex items-center">
              <Image
                src="/assets/g3.png"
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
                      src={surf3}
                      alt="BikeFixup General Service"
                    />
                    <h2 className="text-xl text-beta-900 font-semibold">
                      Half Engine
                    </h2>
                  </div>
                  <div className="px-5 grid grid-cols-2 gap-2">
                    <ul className="flex-wrap list-disc">
                      <li>Piston</li>
                      <li>Valve</li>
                      <li>Vale Seal</li>
                      <li>Boar</li>
                    </ul>
                    <ul className="flex-wrap list-disc">
                      <li>Head repair</li>
                      <li>Spark Plug</li>
                      <li>dc kit</li>
                      <li>Engine Oil</li>
                    </ul>
                  </div>
                </div>

                <p className="px-8 py-3 text-xs">
                  Any other additional problem with be reported post vehicle
                  inspection
                </p>
                <div className="bg-[rgba(255,255,255,0.3)] bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)] shadow-md backdrop-blur-lg flex justify-between items-center px-10 py-3">
                  <div className="text-sm text-blue-500 ">
                    Inspection Charge
                  </div>
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
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="grid grid-cols-12 my-20 gap-4">
            <div className="col-span-12 sm:col-span-7">
              <div className="flex flex-col justify-between text-black bg-[rgba(255,255,255,0.05)] bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)] shadow-md backdrop-blur-lg rounded-3xl overflow-hidden">
                <div className="px-8 pt-5">
                  <div className="flex items-center justify-start gap-5 mb-5">
                    <Image
                      className="w-8 h-8"
                      src={surf3}
                      alt="BikeFixup General Service"
                    />
                    <h2 className="text-xl text-beta-900 font-semibold">
                      Full Engine
                    </h2>
                  </div>
                  <div className="px-5 grid grid-cols-2 gap-2">
                    <ul className="flex-wrap list-disc">
                      <li>piston</li>
                      <li>crancky assembly</li>
                      <li>bearing </li>
                      <li>seal kit</li>
                      <li>boar</li>
                    </ul>
                    <ul className="flex-wrap list-disc">
                      <li>Head repair</li>
                      <li>Spark Plug</li>
                      <li>dc kit</li>
                      <li>Engine Oil</li>
                    </ul>
                  </div>
                </div>

                <p className="px-8 py-3 text-xs">
                  Any other additional problem with be reported post vehicle
                  inspection
                </p>
                <div className="bg-[rgba(255,255,255,0.3)] bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)] shadow-md backdrop-blur-lg flex justify-between items-center px-10 py-3">
                  <div className="text-sm text-blue-500 ">
                    Inspection Charge
                  </div>
                  <div className="flex flex-col">
                    <button className="rounded bg-gradient-to-br from-red-600 via-red-700 to-red-900 shadow-md dark:shadow-none py-1 px-4">
                      ₹199
                    </button>
                    <span className="text-black text-xs">Click to Add</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-5 flex items-center">
              <Image
                src="/assets/g4.png"
                alt="Royal Enfield Service on Wheels"
                width={400}
                height={720}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default engineWork;
