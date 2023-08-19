import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import rightBgElement from "../public/assets/002.svg";
import rightBgBallElement from "../public/assets/blobanimation.svg";
import loginBottomImage from "../public/assets/login-bottom.png";
import loginTopImage from "../public/assets/login-top.png";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { getCookie } from "cookies-next";
import API from "../helper/request";
const Bepartner = () => {
  const [showMobileSide, setShowMobileSide] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  function handleDropdownChange(event) {
    setSelectedOption(event.target.value);
  }
  const [token, setToken] = useState("");
  const history = useRouter();
  const successAlert = () => {
    Swal.fire({
      icon: "success",
      title: "You are our partner now!!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleClick = () => {
    successAlert();
  };
  const doCreatePartner = (formData) => {
    API.post("partners", formData, token)
      .then((res) => {
        console.log(res.data);
        successAlert();
        history.push("/");
      })
      .catch((err) => {
        console.log("err>>", err.response);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log("formData:", Object.fromEntries(formData));
    doCreatePartner(formData);
  };
  useEffect(() => {
    // Retrieve the "token" cookie
    const Token = getCookie("token");

    if (Token) {
      setToken(Token);
      // You can use the token in your component logic or send it to your server
    } else {
      setToken("Token not found");
    }
  }, []);
  return (
    <>
      <div className="bg-main p-5 md:p-10 h-screen">
        <div className="backdrop-blur-sm shadow-sm border rounded-3xl overflow-hidden border-white h-full text-slate-200 relative">
          <Image
            className="absolute top-[190px] right-0 w-[250px] -z-10"
            src={rightBgBallElement}
            alt="element"
          />
          <Image
            className="absolute top-[200px] right-0 w-[200px] -z-10"
            src={rightBgElement}
            alt="element"
          />
          <div className="grid grid-cols-12 relative h-full">
            <div
              className={`fixed md:static top-0 ${
                showMobileSide ? "left-0" : "-left-[220px]"
              } md:col-span-3 h-full backdrop-blur shadow p-3 bg-gradient-to-br from-white to-white md:to-transparent rounded-3xl transition-all duration-300 z-50`}
            >
              <Sidebar
                showMobileSide={showMobileSide}
                setShowMobileSide={setShowMobileSide}
              />
            </div>
            <div className="col-span-12 md:col-span-9 bg-primary text-black overflow-y-auto  hide-scroll">
              <div className=" px-5 py-12 md:px-10 md:py-32 ">
                <h1 className="lg:text-5xl text-2xl font-semibold text-center lg:mb-5 mb-2">
                  Become <span className="text-alpha-700">Bike</span>FixUp{" "}
                  <br /> Partner Today
                </h1>
                <p className="text-center mb-10 lg:text-base text-xs">
                  Please feel free to talk to use you have ay questions.
                  <br />
                  We endeavor at answer withing 24 hours.
                </p>
                <div className="rounded-3xl h-full   px-2 sm:px-20 py-5 flex  flex-col md:flex-row justify-center items-center">
                  <div className=" flex justify-around items-center">
                    <div className="loginGlass h-[500px] sm:w-[500px] w-[300px] sm:h-[350px] px-5 md:py-2 border-l border-t border-white relative">
                      <div className="relative py-2">
                        <form
                          className="relative z-10 pt-10 flex flex-col justify-center w-full items-center"
                          onSubmit={(e) => handleSubmit(e)}
                        >
                          <div className="sm:flex gap-2 w-full">
                            <span className="block w-full">
                              <input
                                name="name"
                                placeholder="Name"
                                className="my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black"
                                type="text"
                              />
                            </span>

                            <span className="block w-full">
                              <select
                                name="State"
                                className="my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black"
                                onChange={handleDropdownChange}
                              >
                                <option value="">State</option>
                                <option value="x">x</option>
                                <option value="y">y</option>
                                <option value="z">z</option>
                              </select>
                            </span>
                          </div>

                          <div className="sm:flex sm:gap-2 w-full">
                            <span>
                              <input
                                name="number"
                                placeholder="Number"
                                className="my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black"
                                type="number"
                              />
                            </span>

                            <span>
                              <input
                                name="text"
                                placeholder="Experience"
                                className="my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black"
                                type="text"
                              />
                            </span>
                          </div>
                          <div className="sm:flex sm:gap-2 w-full">
                            <span>
                              <input
                                name="text"
                                placeholder="Address"
                                className="my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black"
                                type="text"
                              />
                            </span>

                            <span>
                              <input
                                name="text"
                                placeholder="Area Range Cover"
                                className="my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black"
                                type="text"
                              />
                            </span>
                          </div>

                          <div className="flex justify-center items-center mb-2 mt-8">
                            <button className="newMorfPurple  px-16 py-2  text-white">
                              <span className="flex gap-2 items-center justify-center">
                                {" "}
                                Submit{" "}
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bepartner;
