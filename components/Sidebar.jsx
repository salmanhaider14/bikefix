import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { LogoutProfile } from "../redux/reducers/profile";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

const menuItems = [
  { id: 1, label: "Profile", link: "/profile", icon: CgProfile },
  { id: 2, label: "My Booking", link: "/booking", icon: FaRegComments },
  { id: 3, label: "My Vehicle", link: "/vehicle", icon: MdOutlineAnalytics },
  {
    id: 4,
    label: "Become Partner",
    link: "/bepartner",
    icon: BiMessageSquareDots,
  },
];

function SideNavbar({ setShowMobileSide, showMobileSide }) {
  const profile = useSelector((state) => state.profile);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = () => {
    // Dispatch the LogoutProfile action
    dispatch(LogoutProfile());
    deleteCookie("token");
    router.push("/");
  };
  return (
    <div className="flex flex-col justify-between lg:px-4 relative">
      <GiHamburgerMenu
        className={`${
          showMobileSide ? "hidden" : ""
        } md:hidden absolute top-0 left-[225px]`}
        onClick={() => {
          setShowMobileSide(!showMobileSide);
        }}
      />
      <div>
        <div className="flex items-center justify-between text-black px-2">
          <Link
            href="/"
            className="text-base cursor-pointer font-bold hover:underline"
          >
            Back
          </Link>
          <AiOutlineClose
            className="font-bold text-xl md:hidden"
            onClick={() => {
              setShowMobileSide(!showMobileSide);
            }}
          />
        </div>
        <div className="my-4 pb-6 overflow-y-scroll overflow-x-hidden h-[calc(100vh-155px)] hide-scroll">
          {menuItems.map((menuItem) => (
            // Conditionally render links based on profile.token
            <Link
              key={menuItem.id}
              href={profile.token ? menuItem.link : "/login"}
              passHref
            >
              <span
                className={`flex mb-4 justify-start items-center gap-4 pl-5 hover:bg-main p-2 rounded-md group cursor-pointer hover:shadow-lg hover:border hover:border-white m-auto ${
                  !profile.token ? "pointer-events-none opacity-50" : ""
                }`}
              >
                {React.createElement(menuItem.icon, {
                  className: "text-2xl flex-shrink-0 text-gray-600",
                })}
                <h3 className="text-base text-gray-800 font-semibold">
                  {menuItem.label}
                </h3>
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div
          onClick={handleLogout}
          className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200 hover:bg-main p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
        >
          <MdOutlineLogout className="text-2xl flex-shrink-0 text-red-500 group-hover:text-white" />
          <h3 className="text-base text-red-500 group-hover:text-white font-semibold">
            Logout
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
