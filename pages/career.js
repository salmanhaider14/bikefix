import React from "react";
import Image from "next/image";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import MainLayout from "../layouts/MainLayout";

const Career = () => {
  const jobPosts = [
    {
      title: "Account Manager",
      location: "Mumbai",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit",
      img: "job-1.webp",
    },
    {
      title: "UI/UX Designer",
      location: "Gurgaon",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit",
      img: "job-2.webp",
    },
    {
      title: "Mobile App Developer",
      location: "Bangalore",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit",
      img: "job-3.webp",
    },
    {
      title: "PHP Developer",
      location: "Mumbai",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit",
      img: "job-4.webp",
    },
  ];

  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black md:mt-4">
        <div className="order-2 md:order-1 px-4">
          <h1 className="md:text-8xl text-6xl font-semibold pr-0 block mb-6">
            Join <br /> with <span className="text-beta-900">Us</span>
          </h1>
          <p className="mb-5">
            We are hiring. Join us and help us reinvent the-two-wheeler service
            and maintenance.
          </p>
          <div className="relative">
            <input
              id="search"
              name="search"
              placeholder="Search"
              className="pl-8 pr-16 py-5 w-full my-2 formGlassInput"
              type="text"
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-8">
              <BiSearchAlt2 className="text-2xl" />
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2">
          <Image
            className="w-full max-w-lg"
            src={`/image/career-hero.webp`}
            height={283}
            width={398}
            priority
            alt="Join with Bikefixup"
          />
        </div>
      </div>
      {/* job card */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-full px-4 xl:py-8 text-black">
        {jobPosts.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-b from-white/20 to-white/0 bg-white/20 rounded-3xl shadow-md border overflow-hidden"
            >
              <Image
                className="w-full"
                src={`/image/job/${item.img}`}
                height={307}
                width={552}
                alt={`${item.title} Job in ${item.location} - BikefixUp`}
              />
              <div className="px-5 py-5">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-500 flex items-center">
                  <MdLocationOn className="mr-2" />
                  {item.location}
                </p>
                <p className="mt-4 text-justify">{item.description}</p>
                <Link
                  href={"/Home"}
                  className="my-2 text-beta-900 font-semibold text-center w-full block"
                >
                  <span className="border-b-2 border-beta-900">
                    More Details
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full xl:py-8 px-5 text-black my-10">
        <h2 className="md:text-4xl text-2xl text-center font-semibold">
          Can't Find Your <span className="text-beta-900">Position?</span>
        </h2>
        <p className="mt-5 text-justify sm:text-center ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
        <div className="w-full flex justify-center items-center mt-10">
          <button className="newMorfPurple px-8 py-3 text-white font-semibold">
            Upload CV
          </button>
        </div>
      </div>
    </MainLayout>
  );
};
export default Career;
