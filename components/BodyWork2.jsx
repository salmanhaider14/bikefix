import React from "react";

import Image from "next/image";
import image1 from "../public/assets/service-1.svg";
import image2 from "../public/assets/service-2.svg";
import image3 from "../public/assets/service-3.svg";
import image4 from "../public/assets/service-4.svg";
import surf1 from "../public/assets/surface1.png";
import surf2 from "../public/assets/surface2.png";
import surf3 from "../public/assets/surface3.png";
import Footer from "../components/Footer";
const BodyWork2 = () => {
  return (
    <>
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
                    src={surf2}
                    alt="BikeFixup General Service"
                  />
                  <h2 className="text-xl text-beta-900 font-semibold">
                    Mudguard Replacement
                  </h2>
                </div>
                <div className="px-5 grid grid-cols-2 gap-2">
                  <ul className="flex-wrap list-disc">
                    <li>Loose Mudguard</li>
                    <li>Mudguard is broken/rusted</li>
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
          <div className="col-span-12 sm:col-span-5 flex items-center">
            <Image
              src="/assets/mudgard.png"
              alt="Royal Enfield Service on Wheels"
              width={400}
              height={720}
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
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
          <div className="col-span-12 sm:col-span-5 flex items-center">
            <Image
              src="/assets/chaincover.png"
              alt="Royal Enfield Service on Wheels"
              width={400}
              height={720}
              className="w-full h-auto rounded-xl"
              loading="lazy"
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
                    Chain Cover Replacement
                  </h2>
                </div>
                <div className="px-5 grid grid-cols-2 gap-2">
                  <ul className="flex-wrap list-disc">
                    <li>Chain cover is loosed/Damaged</li>
                    <li>Chain cover gets rusted or misaligned</li>
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
                    src={surf2}
                    alt="BikeFixup General Service"
                  />
                  <h2 className="text-xl text-beta-900 font-semibold">
                    Fork Bend Replacement
                  </h2>
                </div>
                <div className="px-5 grid grid-cols-2 gap-2">
                  <ul className="flex-wrap list-disc">
                    <li>Fork bends to its axis</li>
                    <li>Fork bend is cracked</li>
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
          <div className="col-span-12 sm:col-span-5 flex items-center">
            <Image
              src="/assets/fork.png"
              alt="Royal Enfield Service on Wheels"
              width={400}
              height={720}
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
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
          <div className="col-span-12 sm:col-span-5 flex items-center">
            <Image
              src="/assets/headlight.png"
              alt="Royal Enfield Service on Wheels"
              width={400}
              height={720}
              className="w-full h-auto rounded-xl"
              loading="lazy"
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
                    Headlight Replacement
                  </h2>
                </div>
                <div className="px-5 grid grid-cols-2 gap-2">
                  <ul className="flex-wrap list-disc">
                    <li>Headlight is not working properly</li>
                    <li>Headlight is broken</li>
                    <li>Headlight is not properly aligned</li>
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
                    src={surf2}
                    alt="BikeFixup General Service"
                  />
                  <h2 className="text-xl text-beta-900 font-semibold">
                    Tail Light Bulb Replacement
                  </h2>
                </div>
                <div className="px-5 grid grid-cols-2 gap-2">
                  <ul className="flex-wrap list-disc">
                    <li>Bulb gets fused</li>
                    <li>Damaged wire</li>
                    <li>Light flickers</li>
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
          <div className="col-span-12 sm:col-span-5 flex items-center">
            <Image
              src="/assets/taillight.png"
              alt="Royal Enfield Service on Wheels"
              width={400}
              height={720}
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
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
          <div className="col-span-12 sm:col-span-5 flex items-center">
            <Image
              src="/assets/indicator.png"
              alt="Royal Enfield Service on Wheels"
              width={400}
              height={720}
              className="w-full h-auto rounded-xl"
              loading="lazy"
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
                    Indicator Bulb Replacement
                  </h2>
                </div>
                <div className="px-5 grid grid-cols-2 gap-2">
                  <ul className="flex-wrap list-disc">
                    <li>Fused bulb</li>
                    <li>Damaged wire</li>
                    <li>This light isn't workign properly</li>
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
                    src={surf2}
                    alt="BikeFixup General Service"
                  />
                  <h2 className="text-xl text-beta-900 font-semibold">
                    Parking Bulb Replacement
                  </h2>
                </div>
                <div className="px-5 grid grid-cols-2 gap-2">
                  <ul className="flex-wrap list-disc">
                    <li>Fused bulb</li>
                    <li>Damaged wire</li>
                    <li>This light isn't workign properly</li>
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
          <div className="col-span-12 sm:col-span-5 flex items-center">
            <Image
              src="/assets/parkinglight.png"
              alt="Royal Enfield Service on Wheels"
              width={400}
              height={720}
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyWork2;
