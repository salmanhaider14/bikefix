import React from "react";
import { BiGlobe } from "react-icons/bi";
import { MdLocationOn, MdPhone } from "react-icons/md";
import axios from "axios";

import Image from "next/image";
import MainLayout from "../layouts/MainLayout";
import Swal from "sweetalert2";

const Contact = () => {
  const successAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Message sent!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await axios.post(
        "https://webadmin.bikefixup.com/api/contact ",
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
    <MainLayout>
      <h1 className="lg:text-4xl text-2xl font-semibold text-center lg:mb-5 mb-2 text-black">
        Have Some Question?
      </h1>
      <p className="text-center mb-8 lg:text-base text-xs text-black">
        Please feel free to talk to use you have ay questions.
        <br />
        We endeavor at answer withing 24 hours.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
        <div className="">
          <Image
            src="/image/contact-hero.webp"
            height={280}
            width={415}
            priority
            alt="Contact - BikeFixup"
          />
          <div className="mt-10 md:mb-10">
            <h3 className="font-semibold lg:text-4xl text-2xl mb-6">
              Get in touch
            </h3>
            <ul className="text-md flex-col space-y-2">
              <li className="flex items-center justify-start">
                <MdLocationOn className="lg:text-4xl text-2xl mr-3 text-beta-900" />
                Lorem ipsum dolor sit amet,
              </li>
              <li className="flex items-center justify-start">
                <MdPhone className="lg:text-4xl text-2xl mr-3 text-beta-900" />
                +91 0000000
              </li>
              <li className="flex items-center justify-start">
                <BiGlobe className="lg:text-4xl text-2xl mr-3 text-beta-900" />
                bikefixup@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mb-8 px-10 pt-8 h-auto bg-gradient-to-b from-white/20 to-white/0 bg-white/10 rounded-3xl shadow-md"
        >
          <input
            id="name"
            name="name"
            placeholder="Name"
            className="px-8 py-5 w-full my-2 formGlassInput"
            type="text"
          />
          <input
            name="phone"
            placeholder="Phone"
            className="px-8 py-5 w-full my-2 formGlassInput hide-number-buttons"
            type="number"
            min={1}
          />
          <input
            name="email"
            placeholder="Email"
            className="px-8 py-5 w-full my-2 formGlassInput"
            type="email"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="px-8 py-5 w-full my-2 formGlassInput"
            rows={5}
          ></textarea>
          <div className="w-full flex justify-center items-center my-6">
            <button className="newMorfPurple text-center py-4 px-10 text-white font-semibold ">
              <span className="flex gap-2 items-center justify-center">
                Send
              </span>
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default Contact;
