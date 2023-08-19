import React from "react";
import Image from "next/image";

const ServiceCard = ({
  title,
  imageSrc,
  descriptionList,
  inspectionCharge,
  buttonLabel,
  surf,
}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-12 my-20 gap-4">
        <div className="col-span-12 sm:col-span-7">
          <div className="flex flex-col justify-between text-black bg-[rgba(255,255,255,0.05)] bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)] shadow-md backdrop-blur-lg rounded-3xl overflow-hidden">
            <div className="px-8 pt-5">
              <div className="flex items-center justify-start gap-5 mb-5">
                <Image className="w-8 h-8" src={surf} alt={title} />
                <h2 className="text-xl text-beta-900 font-semibold">{title}</h2>
              </div>
              <div className="px-5 grid grid-cols-2 gap-2">
                <ul className="flex-wrap list-disc">
                  {descriptionList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
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
                  {inspectionCharge}
                </button>
                <span className="text-black text-xs">{buttonLabel}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-5 flex items-center">
          <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={720}
            className="w-full h-auto rounded-xl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
