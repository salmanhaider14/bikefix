import React from "react";
import Image from "next/image";
import MainLayout from "../layouts/MainLayout";
import { RiLoader4Line } from "react-icons/ri";

const Membership = () => {
  const planOne = [
    "10% OFF (Upto 200 on each invoice)",
    "Free Consultation",
    "7 Days after service warranty",
    "Priority customer support",
    "Complimentary 2 Washing Free",
    "Complimentary 3 pick & Drop facility",
    "Complimentary 2 polish free",
    "Complimentary Chain cleaning",
  ];
  const planTwo = [
    "10% OFF (Upto 200 on each invoice)",
    "Free Consultation",
    "7 Days after service warranty",
    "Priority customer support",
    "Complimentary 2 Washing Free",
    "Complimentary 3 pick & Drop facility",
    "Complimentary 2 polish free",
    "Complimentary Chain cleaning",
  ];

  const planThree = [
    "10% OFF (Upto 200 on each invoice)",
    "Free Consultation",
    "7 Days after service warranty",
    "Priority customer support",
    "Complimentary 2 Washing Free",
    "Complimentary 3 pick & Drop facility",
    "Complimentary 2 polish free",
    "Complimentary Chain cleaning",
  ];

  return (
    <MainLayout>
      <div className="py-4 text-black">
        <h1 className="md:text-5xl text-4xl text-center font-semibold">
          <span>
            Bike<span className="text-alpha-700">Fixup</span>
          </span>{" "}
          Online Membership
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 items-center">
          <div className="flex justify-center items-center">
            <Image
              className="w-full max-w-[380px]"
              src="/image/membership-hero.webp"
              height={244}
              width={398}
              priority
              alt="Online Membership - Bikefixup"
            />
          </div>
          <div className="bg-gradient-to-b from-white/20 to-white/0 bg-white/0 rounded-3xl shadow-md border py-10 px-10">
            <h3 className="md:text-3xl text-xl lg:mb-5 mb-3 font-semibold">
              Save Thousands Annually on Your Vehicle Servicing
            </h3>
            <p className="text-base text-justify mb-2">
              BikeFixup provides top-notch service and benefits to make your
              vehicle maintenance more affordable, convenient & stress-free.
              With our wide service network, we offer premium and smart
              maintenance, discounts and special offers, priority roadside
              assistance and the flexibility to choose service according to your
              convenience.
            </p>
            <p className="text-base">
              Become a member and avail 1st free service as well additional
              benefits
            </p>
          </div>
        </div>
      </div>

      {/* plan */}
      <div className="py-5 text-black">
        <h2 className="lg:text-5xl text-4xl font-semibold text-center">
          Choose your own plan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 my-10 md:my-16 items-center">
          {/* Plan One */}
          <div className="w-full max-w-[400px] mx-auto bg-gradient-to-b from-white/20 to-white/10 bg-white/0 rounded-3xl shadow-md border">
            <div className="bg-gradient-to-b from-white/20 to-white/30 bg-white/0 rounded-3xl shadow-md border py-6 px-6 text-center">
              ₹
              <span className="relative font-medium text-lg">
                <span className="absolute top-1/2 -translate-y-1/2 bg-red-700 w-full h-[2px]"></span>
                800
              </span>
              <div className="w-full flex flex-col items-center">
                <span className="md:text-5xl text-4xl text-beta-900 font-bold flex">
                  <span className="text-2xl">₹</span>
                  499
                </span>
                <p className="font-medium text-right">For 06 Month</p>
              </div>
            </div>
            <div className="px-10 py-5 text-black">
              {planOne.map((item, index) => {
                return (
                  <div key={index} className="border-b border-white py-2 mb-2">
                    <p className="text-sm text-center">{item}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center text-lg font-bold text-beta-900">
              Upto 125CC
            </div>
            <div className="w-full flex justify-center items-center my-6">
              <button className="newMorfPurple px-10 py-2 text-white">
                <span className="flex gap-2 items-center justify-center">
                  {/* <RiLoader4Line className="text-xl animate-spin" /> */}
                  Buy Now
                </span>
              </button>
            </div>
          </div>
          {/* Plan Two */}
          <div className="w-full max-w-[400px] mx-auto bg-gradient-to-b from-white/20 to-white/10 bg-white/0 rounded-3xl shadow-md border md:scale-110">
            <div className="bg-gradient-to-b from-white/20 to-white/30 bg-white/0 rounded-3xl shadow-md border py-6 px-6 text-center">
              ₹
              <span className="relative font-medium text-lg">
                <span className="absolute top-1/2 -translate-y-1/2 bg-red-700 w-full h-[2px]"></span>
                1899
              </span>
              <div className="w-full flex flex-col items-center">
                <span className="md:text-5xl text-4xl text-beta-900 font-bold flex">
                  <span className="text-2xl">₹</span>
                  1399
                </span>
                <p className="font-medium text-right">For 12 Month</p>
              </div>
            </div>
            <div className="px-10 py-5 text-black">
              {planOne.map((item, index) => {
                return (
                  <div key={index} className="border-b border-white py-2 mb-2">
                    <p className="text-sm text-center">{item}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center text-lg font-bold text-beta-900">
              CC No Bar
            </div>
            <div className="w-full flex justify-center items-center my-6">
              <button className="newMorfPurple px-10 py-2 text-white">
                <span className="flex gap-2 items-center justify-center">
                  {/* <RiLoader4Line className="text-xl animate-spin" /> */}
                  Buy Now
                </span>
              </button>
            </div>
          </div>
          {/* Plan Three */}
          <div className="w-full max-w-[400px] mx-auto bg-gradient-to-b from-white/20 to-white/10 bg-white/0 rounded-3xl shadow-md border">
            <div className="bg-gradient-to-b from-white/20 to-white/30 bg-white/0 rounded-3xl shadow-md border py-6 px-6 text-center">
              ₹
              <span className="relative font-medium text-lg">
                <span className="absolute top-1/2 -translate-y-1/2 bg-red-700 w-full h-[2px]"></span>
                1299
              </span>
              <div className="w-full flex flex-col items-center">
                <span className="md:text-5xl text-4xl text-beta-900 font-bold flex">
                  <span className="text-2xl">₹</span>
                  999
                </span>
                <p className="font-medium text-right">For 12 Month</p>
              </div>
            </div>
            <div className="px-10 py-5 text-black">
              {planOne.map((item, index) => {
                return (
                  <div key={index} className="border-b border-white py-2 mb-2">
                    <p className="text-sm text-center">{item}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center text-lg font-bold text-beta-900">
              Upto 180CC
            </div>
            <div className="w-full flex justify-center items-center my-6">
              <button className="newMorfPurple px-10 py-2 text-white">
                <span className="flex gap-2 items-center justify-center">
                  {/* <RiLoader4Line className="text-xl animate-spin" /> */}
                  Buy Now
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full text-center mt-24 mb-10">
          <h4 className="text-3xl font-bold mb-3">For More Details</h4>
          <p>+91 0000000</p>
          <p>bikefixup@gmail.com</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Membership;
