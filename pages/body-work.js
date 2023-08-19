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
import ServiceCard from "../components/ServiceCard";
import ServiceCard2 from "../components/ServiceCard2";

const BodyWork = () => {
  return (
    <div className="bg-main p-4 md:p-16  overflow-hidden">
      <div
        className="bg-main overflow-hidden"
        style={{
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
            <h1 className="text-3xl md:text-5xl  font-semibold">Body Work</h1>
            <h3 className="text-md md:text-xl ">When do we require this?</h3>
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
              loading="lazy"
            />
          </div>
        </div>
        <ServiceCard
          title="Center Stand Replacement"
          imageSrc="/assets/g5.png"
          descriptionList={[
            "For parking the bike in a paper manner",
            "If center stands get broken",
          ]}
          inspectionCharge="₹199"
          buttonLabel="Click to Add"
          surf={surf1}
        />

        <ServiceCard2
          title="Side Stand Replacement"
          imageSrc="/assets/sidestand.png"
          descriptionList={[
            "For parking the bike in a paper manner",
            "If side stands get broken",
            " In case of stiff or loose side stand",
          ]}
          inspectionCharge="₹199"
          buttonLabel="Click to Add"
          surf={surf2}
        />

        <ServiceCard
          title={"Handle Bar Replacement"}
          imageSrc={"/assets/g6.png"}
          descriptionList={["Damaged handle bar", "Handle get too old"]}
          inspectionCharge="₹199"
          buttonLabel="Click to Add"
          surf={surf2}
        />

        <ServiceCard2
          title={"Mirror Replacement"}
          descriptionList={["Mirror broken", "Blurred image"]}
          imageSrc={"/assets/mirror.png"}
          inspectionCharge="₹199"
          buttonLabel="Click to Add"
          surf={surf1}
        />

        <ServiceCard
          title={"Foot Rest Replacement"}
          descriptionList={["Loose foot rest", "Foot rest gets broken/rusted"]}
          imageSrc={"/assets/footrest.png"}
          inspectionCharge="₹199"
          buttonLabel="Click to Add"
          surf={surf2}
        />

        <ServiceCard2
          title={"Mudguard Replacement"}
          descriptionList={["Loose Mudguard", "Mudguard is broken/rusted"]}
          imageSrc={"/assets/mudgard.png"}
          inspectionCharge="₹199"
          buttonLabel="Click to Add"
          surf={surf1}
        />

        <ServiceCard
          title={"Chain Cover Replacement"}
          imageSrc={"/assets/chaincover.png"}
          descriptionList={[
            "Chain cover is loosed/Damaged",
            "Chain cover gets rusted or misaligned",
          ]}
          inspectionCharge="₹199"
          buttonLabel="Click to Add"
          surf={surf2}
        />

        <ServiceCard2
          title={"Fork Bend Replacement"}
          descriptionList={["Fork bends to its axis", "Fork bend is cracked"]}
          imageSrc={"/assets/fork.png"}
          inspectionCharge="₹199"
          buttonLabel="Click to Add"
          surf={surf1}
        />

        <ServiceCard
          title={"Headlight Replacement"}
          imageSrc={"/assets/headlight.png"}
          descriptionList={[
            "Headlight is not working properly",
            "Headlight is broken",
            "Headlight is not properly aligned",
          ]}
          inspectionCharge="₹199"
          buttonLabel="Click to Add"
          surf={surf2}
        />

        <ServiceCard2
          title={"Tail Light Bulb Replacement"}
          descriptionList={[
            "Bulb gets fused",
            "Damaged wire",
            "Light flickers",
          ]}
          imageSrc={"/assets/taillight.png"}
          inspectionCharge="₹199"
          buttonLabel="Click to Add"
          surf={surf1}
        />

        <ServiceCard
          title={"Indicator Bulb Replacement"}
          imageSrc={"/assets/indicator.png"}
          descriptionList={[
            "Fused Bulb",
            "Damaged Wire",
            "This light isn't working properly",
          ]}
          inspectionCharge="₹199"
          buttonLabel="Click to Add"
          surf={surf2}
        />

        <ServiceCard2
          title={"Parking Bulb Replacement"}
          descriptionList={[
            "Bulb gets fused",
            "Damaged wire",
            "This light isn't working properly",
          ]}
          imageSrc={"/assets/parkinglight.png"}
          inspectionCharge="₹199"
          buttonLabel="Click to Add"
          surf={surf1}
        />

        <Footer />
      </div>
    </div>
  );
};

export default BodyWork;
