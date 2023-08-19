import React, { useState } from "react";
import Image from "next/image";
import offerImage from "../public/assets/offer.webp";
import image1 from "../public/assets/service-1.svg";
import image2 from "../public/assets/service-2.svg";
import image3 from "../public/assets/service-3.svg";
import image4 from "../public/assets/service-4.svg";
import BlurImage from "../data/BlurImage";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";

const HeroSection = () => {
  const services = [
    { link: "/general-service", img: image1, name: "General Service" },
    { link: "/engine-work", img: image2, name: "Engine Work" },
    { link: "/body-work", img: image3, name: "Body Work" },
    { link: "/repair-work", img: image4, name: "Repair Work" },
  ];
  const successAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Service booked!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await axios.post(
        "https://webadmin.bikefixup.com/api/quick-book ",
        formData
      );
      console.log("Form submitted successfully", response.data);
      successAlert();
      // Optionally, you can show a success message or perform other actions here
    } catch (error) {
      console.error("Error submitting form", error);
      // Optionally, you can show an error message or perform other error-related actions here
    }
  };

  return (
    <div className="grid md:grid-cols-12 gap-6 sm:gap-8 mb-14">
      <div className="col-span-12 md:col-span-7">
        <div className="text-black">
          <h1 className="font-bold text-2xl md:text-4xl">
            TWO WHEELER SERVICES MADE SMART
          </h1>
          <p className="text-sm md:pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididuntLorem ipsum dolor sit amet
          </p>
        </div>
        <Image
          className="my-5 md:my-10 w-full rounded-lg"
          src={offerImage}
          alt="Offer image"
          width={620}
          height={192}
          placeholder="blur"
          blurDataURL={BlurImage.BlurHomeCover}
        />
        {/* service box */}
        <div className="grid grid-cols-4 gap-4">
          {services.map((service, index) => {
            return (
              <Link key={index} href={`${service.link}`}>
                <div className="flex flex-col justify-center items-center px-3 py-2 lg:px-10 lg:py-3 bg-service-box h-full">
                  <Image
                    className=""
                    src={service.img}
                    alt={`${service.name}`}
                  />
                  <span className="text-black text-center mt-2 font-semibold hidden md:block">
                    {service.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* form section */}
      <div className="col-span-12 md:col-span-5">
        <form
          onSubmit={handleSubmit}
          className="heroFormGlassDiv max-w-md mx-auto flex flex-col space-y-3 px-5 py-2 md:px-8 md:py-3 text-black"
        >
          <h2 className="text-beta-900 text-center font-bold text-3xl my-4">
            Book Service
          </h2>
          <input
            name="name"
            placeholder="Your Name"
            className="w-full px-6 py-2 formGlassInput"
            type="text"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full px-6 py-2 formGlassInput"
            type="text"
          />
          <input
            name="email"
            placeholder="Email"
            className="w-full px-6 py-2 formGlassInput"
            type="email"
          />
          <input
            name="address"
            placeholder="Address"
            className="w-full px-6 py-2 formGlassInput"
            type="text"
          />
          <input
            name="city"
            placeholder="City"
            className="w-full px-6 py-2 formGlassInput"
            type="text"
          />
          <input
            name="description"
            placeholder="Description"
            className="w-full px-6 py-2 formGlassInput"
            type="text"
          />
          <div className="mx-auto pt-6 pb-3">
            <button className="newMorfPurple px-16 py-2 text-white">
              Book Now
            </button>
            <p className="text-center font-bold mt-4 text-sm">
              or Call +91 86 0788 0788
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
