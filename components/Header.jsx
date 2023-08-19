import React, { useState } from "react";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { GetProfile, LogoutProfile } from "../redux/reducers/profile";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
import HeaderTop from "./HeaderTop";

const Header = () => {
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

  return (
    <header className="max-w-full py-6 xl:py-14 mx-auto px-3 md:px-14 lg:px-24">
      <HeaderTop />
      {/* Navbar For PC */}
      <div className="relative hidden md:flex list-none space-x-8 pt-4 pb-2">
        <Navbar.Link
          as={Link}
          href="/"
          className={`nav-pc ${router.pathname === "/" ? "active" : ""}`}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/about"
          className={`nav-pc ${router.pathname === "/about" ? "active" : ""}`}
        >
          About
        </Navbar.Link>

        <Navbar.Link
          as={Link}
          href="/membership"
          className={`nav-pc ${router.pathname === "/membership" ? "active" : ""
            }`}
        >
          Membership
        </Navbar.Link>

        <Navbar.Link
          as={Link}
          href="/partner"
          className={`nav-pc ${router.pathname === "/partner" ? "active" : ""}`}
        >
          Partners
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/career"
          className={`nav-pc ${router.pathname === "/career" ? "active" : ""}`}
        >
          Career
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/blog"
          className={`nav-pc ${router.pathname === "/blog" ? "active" : ""}`}
        >
          Blog
        </Navbar.Link>

        <Navbar.Link
          as={Link}
          href="/contact"
          className={`nav-pc ${router.pathname === "/contact" ? "active" : ""}`}
        >
          Contact
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/service"
          className={`nav-pc ${router.pathname === "/service" ? "active" : ""}`}
        >
          Service
        </Navbar.Link>
        {/* <Navbar.Link
          as={Link}
          href="/payment"
          className={`nav-pc ${router.pathname === "/payment" ? "active" : ""}`}
        >
          payment
        </Navbar.Link> */}
      </div>
      <div className="h-[2px] bg-gradient-to-l from-[#ffffff00] to-[#ffffff] bg-opacity-5 hidden md:block"></div>
    </header>
  );
};

export default Header;
