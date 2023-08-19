import React from "react";
import benifitImage2 from "../public/assets/benifit-2.svg";
import benifitImage3 from "../public/assets/benifit-3.svg";
import benifitImage4 from "../public/assets/benifit-4.svg";
import benifitImage5 from "../public/assets/benifit-5.svg";
import Image from "next/image";
const HeroBenefit = () => {
  return (
    <div className="px-3 py-10 md:p-10 bg-gradient-to-b from-white/20 to-white/0 bg-white/10 rounded-3xl shadow-md text-black relative mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex items-center justify-center">
          <Image
            className="w-1/2 mx-auto"
            src="/image/free-service.webp"
            width={100}
            height={100}
            alt="BikeFix Service"
          />
        </div>
        <div className="flex items-center justify-center text-center">
          <div>
              <p className="font-semibold md:text-3xl text-2xl mb-4">
                Free Text Benefits
              </p>
              <p className="font-medium md:text-2xl text-mdl">
                <span className="text-alpha-600 font-semibold">Rs.100</span> off services for first
                time
              </p>
              <h2 className="font-semibold text-2xl sm:text-4xl text-beta-900">
                Get your bike serviced
              </h2>
          </div>
        </div>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          <div className="py-5 md:py-6 px-6 md:px-8 flex items-center space-x-4 bg-gradient-to-b from-white/20 to-white/0 bg-white/30 rounded-3xl shadow-md text-black">
            <Image className="w-14 h-14" src={benifitImage3} alt="10 days Free Service Guarantee" />
            <div className="w-full">
              <p className="md:text-lg text-sm font-semibold text-beta-900">
                10 days Free Service Guarantee
              </p>
              <p>10 days Unconditioned Warranty</p>
            </div>
          </div>
          <div className="py-5 md:py-6 px-6 md:px-8 flex items-center space-x-4 bg-gradient-to-b from-white/20 to-white/0 bg-white/30 rounded-3xl shadow-md text-black">
            <Image className="w-14 h-14" src={benifitImage2} alt="Free Pickup & Drop service" />
            <div className="w-full">
              <p className="md:text-lg text-sm font-semibold text-beta-900">
                Free Pickup & Drop service
              </p>
              <p>Real time service</p>
            </div>
          </div>
          <div className="py-5 md:py-6 px-6 md:px-8 flex items-center space-x-4 bg-gradient-to-b from-white/20 to-white/0 bg-white/30 rounded-3xl shadow-md text-black">
            <Image className="w-14 h-14" src={benifitImage4} alt="Transparent & Competitive Pricing" />
            <div className="w-full">
              <p className="md:text-lg text-sm font-semibold text-beta-900">
                Transparent & Competitive Pricing
              </p>
              <p>ave upto 40% on your bike service</p>
            </div>
          </div>
          <div className="py-5 md:py-6 px-6 md:px-8 flex items-center space-x-4 bg-gradient-to-b from-white/20 to-white/0 bg-white/30 rounded-3xl shadow-md text-black">
            <Image className="w-14 h-14" src={benifitImage5} alt="Trained & Experts Mechanics" />
            <div className="w-full">
              <p className="md:text-lg text-sm font-semibold text-beta-900">
                Trained & Experts Mechanics
              </p>
              <p>Only certified & mechanics</p>
            </div>
          </div>
        </div>
    </div>
  );
};
export default HeroBenefit;
