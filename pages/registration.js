import loginBottomImage from "../public/assets/login-bottom.png";
import loginTopImage from "../public/assets/login-top.png";
import registrationImage from "../public/assets/registrationImage.webp";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiEyeFill, RiEyeCloseLine } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import Image from "next/image";
import API from "../helper/request";
import SEO from "../components/SEO";

export default () => {
  const [isPassRevealed, setIsPassRevealed] = useState(false);
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  useEffect(() => {
    getAllStates();
  }, []);

  const getAllStates = () => {
    API.get("states").then((res) => {
      setAllStates(res.data.states);
      setSelectedState(res.data?.states[0].id);
    });
  };
  const getCityFromState = (state) => {
    API.get(`cities/from-state/${state}`).then((res) => {
      setAllCities(res.data);
    });
  };

  const doRegister = (formData) => {
    API.post("auth/register", formData)
      .then((res) => {
        console.log("Registration=res>>", res);
      })
      .catch((err) => {
        console.log("err>>", err.response?.data?.errors);
      });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("role_id", 2);
    // console.log("formData:", Object.fromEntries(formData));
    doRegister(formData);
  };

  const handleDropdownChange = (event) => {
    setSelectedState(event.target.value);
    getCityFromState(event.target.value);
  };

  return (
    <>
      <SEO title="Bike-Fixup - Registration" />
      <div className="bg-gradient-to-l from-[#83e9fb] to-[#f591d2] sm:px-5 sm:py-5 md:px-10 md:py-10 h-screen">
        <div className="h-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-white  rounded-3xl overflow-hidden w-full loginGlass text-slate-200 relative">
          <div className="rounded-3xl h-full max-w-full w-full px-2 sm:px-20 md:py-4 flex  flex-col md:flex-row justify-center items-center">
            <div className="w-full h-full flex justify-around items-center">
              <Image
                className="hidden lg:block h-[450px]"
                src={registrationImage}
                alt=""
              />
              <div className="loginGlass h-[580px] w-[400px] md:w-[500px] sm:h-[450px] px-5 md:py-2 border-l border-t border-white relative">
                <div className="relative py-2">
                  <Image
                    className="absolute -top-[100px] -left-[140px] rotate-45 w-[290px] -z-10"
                    src={loginTopImage}
                    alt="element"
                  />
                  <Image
                    className="absolute -bottom-[70px] -right-[50px] w-[290px] -z-10"
                    src={loginBottomImage}
                    alt="element"
                  />
                  {/* CROSS BUTTON  */}
                  <Link href="/" className="absolute -right-2 top-1 md:top-0">
                    <RxCrossCircled className="text-2xl text-black font-semibold" />
                  </Link>
                  <h1 className="text-2xl sm:text-3xl text-center font-semibold text-black ">
                    Create Account
                  </h1>
                  <p className="text-[13px] md:text-sm text-center mt-2 sm:my-5 text-black">
                    Create an account and access services easily
                  </p>
                  <form
                    onSubmit={e => handleRegistration(e)}
                    className="relative z-10 flex flex-col justify-center w-full items-center"
                  >
                    <input
                      type="text"
                      className={`my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black `}
                      name="name"
                      placeholder="Name"
                    />

                    <div className="sm:flex gap-2 w-full">
                      <span className="block w-full">
                        <input
                          type="email"
                          autoComplete="username"
                          className={`my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black `}
                          name="email"
                          placeholder="Email"
                        />
                      </span>
                      <span className="block w-full">
                        <input
                          type="number"
                          inputMode="numeric"
                          className={`my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black hide-number-buttons`}
                          name="phone"
                          placeholder="Phone"
                        />
                      </span>
                    </div>

                    <div className="sm:flex sm:gap-2 w-full">
                      <select
                        className={`outline-none my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black`}
                        onChange={(e) => handleDropdownChange(e)}
                        name="state_id"
                      >
                        <option value={null}>Select State</option>

                        {allStates.map((opt, i) => (
                          <option key={i} value={opt.id}>
                            {opt.name}
                          </option>
                        ))}
                      </select>
                      <select
                        className={`outline-none my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black`}
                        onChange={handleDropdownChange}
                        name="city_id"
                      >
                        <option value={null}>Select City</option>
                        {allCities.map((opt, i) => (
                          <option key={i} value={opt.id}>
                            {opt.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-full">
                      <span className="w-full block relative">
                        <input
                          type={isPassRevealed ? "text" : "password"}
                          className={`my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black`}
                          name="password"
                          placeholder="Password"
                          autoComplete="current-password"
                        />
                        <RiEyeCloseLine
                          onClick={() => setIsPassRevealed(!isPassRevealed)}
                          className={`${
                            isPassRevealed ? "block" : "hidden"
                          } mt-0.5 absolute right-4 top-1/2 -translate-y-1.5 text-black z-40 cursor-pointer`}
                        />
                        <RiEyeFill
                          onClick={() => setIsPassRevealed(!isPassRevealed)}
                          className={`${
                            !isPassRevealed ? "block" : "hidden"
                          } mt-0.5 absolute right-4 top-1/2 -translate-y-1.5 text-black z-40 cursor-pointer`}
                        />
                      </span>
                    </div>

                    <div className="flex justify-center items-center mb-2 mt-12">
                      <button
                        type="submit"
                        className="newMorfPurple px-16 py-4 text-white"
                      >
                        <span className="flex gap-2 items-center justify-center">
                          Submit
                        </span>
                      </button>
                    </div>
                    <p className="text-center  text-black text-sm mt-2">
                      Already have an account?{" "}
                      <Link href="/login" className="text-beta-900">
                        Log In
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
