import Image from "next/image";
import React from "react";

const PartnerPotential = () => {
  return (
    <>
      {/* market potential */}
      <div className="bg-gradient-to-b from-white/20 to-white/0 bg-white/10 rounded-3xl shadow-md py-2 text-black">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-beta-900 my-7">
          Market Potential
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 pb-10 px-12 gap-8">
          <div className="col-span-1 w-full flex justify-center items-center">
            <Image
              className="rounded-md w-full"
              src="/image/partner-potential.webp"
              height={408}
              width={606}
              alt="Market Potential"
            />
          </div>
          <div className="col-span-1 text-justify w-full">
            <p className="text-base">
              The market of local garages is uncontrolled and unregulated; 95%
              of them are usually roadside stores whereas many are fly-bynight
              set-ups and are highly unreliable. A highly fragmented market with
              a deeprooted practice of using spurious spare parts, where the
              quality of the service is ascertained only by the number of
              vehicles lying in the garage.
            </p>
            <ul className="list-disc pl-5 pr-2 font-semibold mt-2">
              <li>Hurdles Faced​</li>
              <li>Genuineness is always a question.​</li>
              <li>Lack of Transparency.​</li>
              <li>Parts Quality.</li>
              <li>High Charges at Authorized workshops.​</li>
              <li>Good mechanics & Garages are hard to find.​</li>
            </ul>
          </div>
        </div>
      </div>
      {/* why choose us */}
      <div className="grid grid-cols-1 md:grid-cols-2 pb-10 px-10 gap-8 text-black my-12">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-semibold mb-5">
            <span className="text-beta-900">Why</span> Choose Us?
          </h2>
          <ul className="list-disc ml-5 pr-2">
            <li>
              Entire management team having experience in automobile sector.
            </li>
            <li>
              Providing online marketing as well as offline (door to door)
              marketing.
            </li>
            <li>0 Royalty Charges.</li>
            <li>Providing daily service booking after certain time period.</li>
            <li>Only brand in India having in-house tele calling dept.</li>
            <li>Having mobile applications for customers.</li>
            <li>
              Only brand in India providing full services to BS6 vehicles.
            </li>
            <li>ROI Period 12-18 Months*.</li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="w-full"
            src="/image/why-us.webp"
            alt="Why Bikefixup"
            height={535}
            width={535}
          />
        </div>
      </div>
      {/* Marketing Activity */}
      <div className="bg-gradient-to-b from-white/20 to-white/0 bg-white/10 rounded-3xl shadow-md py-10 px-12 text-black">
        <h2 className="text-4xl md:text-5xl font-semibold my-5">
          Marketing <span className="text-beta-900">Activity</span>
        </h2>
        <p className="text-justify">
          Doctor GARAGE Will Assign a person at your workshop on its own expense
          to built up footfall by selling 500 AMC (500*3=1500 services). Doctor
          GARAGE will provide you flyers to distribute them within the 5kms of
          workshop area for your workshop advertisement. Doctor GARAGE will do
          tie ups to the nearest corporate offices and corporate companies.
          Doctor GARAGE will organize frequent publicity activities within 5kms
          workshop area. Doctor GARAGE will publish advertisement in local news
          papers of your city. Doctor Garage will organize door to door
          marketing activity to increase AMC sales of your workshop. Doctor
          Garage Also Have tie up with an Agency For Digital Marketing Activity,
          And all other marketing & Advertisement solutions.
        </p>
      </div>
      {/* Sales support */}
      <div className="text-black my-16 pt-10">
        <h2 className="text-4xl md:text-5xl text-center font-semibold">
          After Sales <span className="text-beta-900">Support</span>
        </h2>
        <p className="text-center mx-auto max-w-lg">
          We have designed two types of mobile application to make service &
          workshop operation smooth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 pb-10 gap-8 text-black my-10">
          <div className="bg-gradient-to-b from-white/20 to-white/0 bg-white/10 rounded-3xl shadow-md p-8">
            <h1 className="uppercase text-2xl text-center font-semibold mb-5">
              FRANCHISE PARTNER CAN USE APPLICATION FOR
            </h1>
            <ul className="ml-6 list-disc text-lg">
              <li>Making Job Cards</li>
              <li>Issue Service Invoice</li>
              <li>To track stock of available parts & oil</li>
              <li>To monitor workshop Performance</li>
              <li>To Collect Data Of Serviced Vehicles</li>
            </ul>
          </div>
          <div className="bg-gradient-to-b from-white/20 to-white/0 bg-white/10 rounded-3xl shadow-md p-10">
            <h1 className="uppercase text-2xl text-center font-semibold mb-5">
              COUSTOMER CAN USE APPLICATION FOR
            </h1>
            <ul className="ml-6 list-disc text-lg">
              <li>
                Customer use their unique ID to booking their vehicle service
                and they can purchase AMC without walk in to Dr Garage.
              </li>
              <li>
                Customer can use their application for To Book Service at
                nearest workshop.
              </li>
              <li>To Purchase Annual Maintenance Contract</li>
              <li>To issue new insurance policy for vehicle</li>
              <li>To give feedback of vehicle service</li>
              <li>To track vehicle service history</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerPotential;
