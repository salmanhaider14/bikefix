import Image from "next/image";
import React from "react";

const PartnerUps = () => {

  const ourUspsList = [
    {
      title: "Pioneer in Products",
      icon: "usps-1.svg",
    },
    {
      title:
        "Live Telecast during Service & Repairing for Android Users, Pioneer in Such Facility",
      icon: "usps-2.svg",
    },
    {
      title: "Customer Centric Business",
      icon: "usps-3.svg",
    },
    {
      title: "CRM - support, Call Centre technology",
      icon: "usps-4.svg",
    },
    {
      title: "Nominal Charges for every 2 wheeler",
      icon: "usps-5.svg",
    },
    {
      title: "Insurance Claims co-ordination",
      icon: "usps-6.svg",
    },
    {
      title: "Customer Retention Assistance",
      icon: "usps-7.svg",
    },
    {
      title: "New concept called ‘mobile workshop’ for Home Service",
      icon: "usps-8.svg",
    },
    {
      title: "A brand with two core values - Trust & Relationship",
      icon: "usps-9.svg",
    },
    {
      title: "Services Quality - Attitude, Empathy & Appearance",
      icon: "usps-10.svg",
    },
    {
      title: "In House Professional Training Academy",
      icon: "usps-11.svg",
    },
    {
      title: "Contact Centre Management",
      icon: "usps-12.svg",
    },
    {
      title: "Quality Audits of Network",
      icon: "usps-13.svg",
    },
    {
      title: "EV Sell & Service",
      icon: "usps-14.svg",
    },
  ];

  return (
    <>
      <div className=" text-black py-5 xl:py-8 ">
        <h2 className="text-center font-extrabold text-4xl md:text-6xl text-beta-900 mb-2">
          Our USPS
        </h2>
        <div className="flex justify-center mb-7">
          <div className="max-w-lg">
            <p className="text-center">
              consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem
              ipsum dolor sit amet
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4">
          {ourUspsList.map((item, index) => {
            return (
              <div
                key={index}
                className="flex bg-gradient-to-b from-white/20 to-white/0 bg-white/20 border-t border-l rounded-xl h-24 items-center justify-between pl-5"
              >
                <Image
                  className="w-10 h-10 mr-2"
                  height={40}
                  width={40}
                  src={`/image/usps/${item.icon}`}
                  alt={item.title}
                />
                <p className="text-xs md:text-sm font-medium w-full pr-5 text-left">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PartnerUps;
