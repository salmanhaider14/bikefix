import React, { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { Navbar } from "flowbite-react";
import Avatar from "react-avatar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { GetProfile, LogoutProfile } from "../redux/reducers/profile";
import { deleteCookie } from "cookies-next";
import Image from "next/image";

export default function HeaderTop() {
  const AuthProfile = useSelector(GetProfile).profile;
  const dispatch = useDispatch();

  const [profileDdnOpen, setProfileDdnOpen] = useState(false);

  const [responsiveTogleIsOpened, setResponsiveTogleIsOpened] = useState(false);
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");
  const handleResponsiveToggleNav = () => {
    setResponsiveTogleIsOpened(!responsiveTogleIsOpened);
  };

  const doLogout = () => {
    deleteCookie("token");
    deleteCookie("user");
    dispatch(LogoutProfile());
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/membership", label: "Membership" },
    { href: "/partner", label: "Partners" },
    { href: "/career", label: "Career" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/vehicle", label: "Vehicle" },
  ];

  return (
    <>
      <div className="flex justify-between items-center text-black ">
        <div className="text-black font-alpha font-semibold text-3xl md:text-4xl">
          <Image
            className="h-16 w-auto"
            src="/image/logo-sm.webp"
            height={129}
            width={107}
            alt="Bike-Fixup Logo"
          />
        </div>
        <div className="hidden md:block font-bold text-transparent bg-clip-text bg-gradient-to-r from-alpha-600 to-alpha-900">
          +91-11-1111-1111
        </div>
        <div className="flex gap-4 items-center">
          {AuthProfile.user ? (
            <div className="relative">
              <Avatar
                className="cursor-pointer hover:opacity-90 select-none"
                name={AuthProfile.user.name}
                size={50}
                round="50%"
                onClick={() => {
                  setProfileDdnOpen(!profileDdnOpen);
                }}
              />
              {profileDdnOpen && (
                <>
                  <ul className="absolute top-[55px] right-2 z-40 pt-2 flex flex-col space-y-1 bg-white rounded-md shadow whitespace-nowrap">
                    <Link
                      href={"/profile"}
                      className="py-1 px-3 hover:bg-[#84e8fa] transition-all duration-300 cursor-pointer"
                    >
                      Profile
                    </Link>
                    <Link
                      href={"/vehicle"}
                      className="py-1 px-3 hover:bg-[#84e8fa] transition-all duration-300 cursor-pointer"
                    >
                      My Booking
                    </Link>
                    <Link
                      href={"/vehicle"}
                      className="py-1 px-3 hover:bg-[#84e8fa] transition-all duration-300 cursor-pointer"
                    >
                      My Vehicles
                    </Link>
                    <Link
                      href={"/partner"}
                      className="py-1 px-3 hover:bg-[#84e8fa] transition-all duration-300 cursor-pointer"
                    >
                      Become Partner
                    </Link>
                    <li
                      onClick={() => doLogout()}
                      className="py-1 px-3 hover:bg-[#84e8fa] transition-all duration-300 cursor-pointer text-[#BD0000] hover:text-white text-center border-t"
                    >
                      Logout
                    </li>
                  </ul>
                  <div className="w-6 h-6 absolute top-[50px] right-3 bg-white rotate-45 rounded"></div>
                  <div
                    onClick={() => {
                      setProfileDdnOpen(!profileDdnOpen);
                    }}
                    className="z-30 w-screen h-screen fixed top-0 right-0 bg-transparent rounded"
                  ></div>
                </>
              )}
            </div>
          ) : (
            <>
              <div className="hidden md:flex items-center space-x-3">
                <div className="m-auto font-semibold">
                  <Link href="/registration">Sign up</Link>
                </div>
                <div className="text-sm md:text-md newMorf mx-1 md:mx-2">
                  <Link href="/login">Log In</Link>
                </div>
              </div>
            </>
          )}
          {/* BUTTONS  */}
          <div className="block md:hidden relative">
            {/* BURGER ICON START  */}
            <button title={"menu icon"} onClick={handleResponsiveToggleNav}>
              <span
                className={`block transition-all duration-500 h-[2px] w-7 bg-black my-2 ${
                  responsiveTogleIsOpened
                    ? "rotate-45 translate-y-2.5"
                    : "rotate-0"
                }`}
              ></span>
              <span
                className={`block transition-all duration-500 h-[2px] w-7 bg-black my-2 ${
                  responsiveTogleIsOpened ? "translate-x-96" : "translate-x-0"
                }`}
              ></span>
              <span
                className={`block transition-all duration-500 h-[2px] w-7 bg-black my-2 ${
                  responsiveTogleIsOpened
                    ? "-rotate-45 -translate-y-2.5"
                    : "rotate-0"
                }`}
              ></span>
            </button>
            {/* BURGER ICON END  */}

            {/* RESPONSIVE NAV START  */}
            <div
              className={`${
                responsiveTogleIsOpened ? "right-0 " : "hidden"
              } transition-all duration-500 responsiveNav absolute bg-white  w-64 top-10 px-5 py-5 rounded-lg shadow-lg z-[100] flex flex-col  lg:hidden `}
            >
              <div className="flex items-center justify-between mb-4 px-4">
                {!AuthProfile.user && (
                  <>
                    <div className="font-semibold">Sign up</div>
                    <div className="newMorf text-sm">Login</div>
                  </>
                )}
              </div>
              <div className="list-none">
                <Navbar.Link
                  as={Link}
                  href="/"
                  className={`nav-mob ${
                    router.pathname === "/" ? "active" : ""
                  }`}
                >
                  Home
                </Navbar.Link>
                <Navbar.Link
                  as={Link}
                  href="/about"
                  className={`nav-mob ${
                    router.pathname === "/about" ? "active" : ""
                  }`}
                >
                  About
                </Navbar.Link>
                <Navbar.Link
                  as={Link}
                  href="/membership"
                  className={`nav-mob ${
                    router.pathname === "/membership" ? "active" : ""
                  }`}
                >
                  Membership
                </Navbar.Link>
                <Navbar.Link
                  as={Link}
                  href="/partner"
                  className={`nav-mob ${
                    router.pathname === "/partner" ? "active" : ""
                  }`}
                >
                  Partners
                </Navbar.Link>
                <Navbar.Link
                  as={Link}
                  href="/career"
                  className={`nav-mob ${
                    router.pathname === "/career" ? "active" : ""
                  }`}
                >
                  Career
                </Navbar.Link>
                <Navbar.Link
                  as={Link}
                  href="/blog"
                  className={`nav-mob ${
                    router.pathname === "/blog" ? "active" : ""
                  }`}
                >
                  Blog
                </Navbar.Link>
                <Navbar.Link
                  as={Link}
                  href="/contact"
                  className={`nav-mob ${
                    router.pathname === "/contact" ? "active" : ""
                  }`}
                >
                  Contact
                </Navbar.Link>
                <Navbar.Link
                  as={Link}
                  href="/service"
                  className={`nav-mob ${
                    router.pathname === "/service" ? "active" : ""
                  }`}
                >
                  Service
                </Navbar.Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
