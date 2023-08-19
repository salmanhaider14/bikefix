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
import { setCookie, getCookie } from "cookies-next";
import { useSelector, useDispatch } from "react-redux";
import { SetAuthProfile } from "../redux/reducers/profile";
import { useRouter } from "next/router";

const login = () => {
  const history = useRouter();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const Token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L3dlYnNpdGUtYmFja2VuZC9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTY3OTQxMjcwMywiZXhwIjoxNjc5NDE2MzAzLCJuYmYiOjE2Nzk0MTI3MDMsImp0aSI6IkYyVTJFWTBodThES2hQN2ciLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.sDjYQiXdDF7qWipK-LY89kOJK0JSdTqiX22SPVqN0hw";
  console.log("From selector>>", profile);

  const [isPassRevealed, setIsPassRevealed] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const doLogin = (formData) => {
    setIsLoginLoading(true);
    setLoginError(false);

    API.post("auth/login", formData, Token)
      .then((res) => {
        console.log("Login=res>>", res.data);
        const expires = new Date(Date.now() + 60 * 60 * 1000);
        const { id, phone, email, name, role_id } = res.data?.user;
        const user = { id, phone, email, name, type: role_id };
        const token = res.data?.access_token;
        setCookie("user", user, { expires });
        setCookie("token", token, { expires });
        console.log("Cookie set...");
        dispatch(SetAuthProfile({ user, token }));
        history.push("/");
        setIsLoginLoading(false);
      })
      .catch((err) => {
        console.log("err>>", err.response);
        setLoginError(true);
        setIsLoginLoading(false);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log("formData:", Object.fromEntries(formData));
    doLogin(formData);
  };

  return (
    <>
      <SEO title="Bike-Fixup - Login" />
      <div className="fixed bg-gradient-to-l from-[#83e9fb] to-[#f591d2] h-screen w-screen -z-50"></div>
      {/* <div className="h-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-white rounded-3xl overflow-scroll w-full loginGlass text-slate-200 relative"> */}
      <div className="p-4 sm:p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 rounded-3xl loginGlass backdrop-filter backdrop-blur-xl bg-opacity-10 overflow-hidden">
          <div className="hidden col-span-6 py-36 md:flex justify-center items-center">
            <div className="relative">
              <Image
                className="h-[300px] w-auto"
                height={486}
                width={623}
                src="/image/login-cover.webp"
                alt="Registration Cover"
              />
              <Image
                className="-z-10 absolute -bottom-[160px] left-1/2 -translate-x-1/2 h-[300px] w-auto"
                height={486}
                width={623}
                src="/image/login-cover-shadow.webp"
                alt="Registration Cover"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center items-center py-24">
            <div className="loginGlass px-10 py-10 border-l border-t border-white relative">
              <div className="relative py-2">
                <Image
                  className="absolute -top-[100px] -left-[140px] rotate-45 w-[290px] -z-10"
                  src={loginTopImage}
                  alt="element"
                />
                <Image
                  className="absolute -bottom-[70px] -right-[50px] w-[360px] -z-10"
                  src={loginBottomImage}
                  alt="element"
                />
                {/* CROSS BUTTON  */}
                <Link href="/" className="absolute -right-2 top-1 md:top-0">
                  <RxCrossCircled className="text-2xl text-black font-semibold" />
                </Link>
                <h1 className="text-2xl sm:text-3xl text-center font-semibold text-black ">
                  Login
                </h1>
                <p className="text-[13px] md:text-sm text-center mt-2 sm:my-5 text-black">
                  Welcome Back To Your Account
                </p>
                <form
                  onSubmit={(e) => handleLogin(e)}
                  className="relative z-10 flex flex-col justify-center w-full items-center"
                >
                  <input
                    type="number"
                    autoComplete="username"
                    className={`my-2 w-full px-7 py-3 formGlassInput text-black hide-number-buttons`}
                    name="phone"
                    placeholder="Phone Number"
                  />

                  <div className="w-full">
                    <span className="w-full block relative">
                      <input
                        type={isPassRevealed ? "text" : "password"}
                        className={`my-2 w-full px-7 py-3 formGlassInput text-black`}
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
                  <button className="self-start text-sm text-left text-beta-900 mb-3 pl-2">
                    Forgot password?
                  </button>
                  <div className="flex flex-col justify-center items-center mt-1 mb-3">
                    {loginError && (
                      <p className="text-sm font-medium  text-rose-700 mb-3">
                        Credentials Invalid
                      </p>
                    )}
                    <button
                      disabled={isLoginLoading}
                      className={`${
                        isLoginLoading ? "opacity-60" : ""
                      } newMorfPurple opacity-70 px-16 py-2 text-white`}
                    >
                      Submit
                    </button>
                  </div>
                  <p className="text-center text-black text-sm">
                    Don't have an acoount?{" "}
                    <Link href="/registration" className="text-beta-900">
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default login;
