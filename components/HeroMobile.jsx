import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import lrftBgImage from "../public/assets/004.svg";
import appStoreImage from "../public/assets/appstore.svg";
import playStoreImage from "../public/assets/playstore.svg";
import QrCodeImage from "../public/assets/QR.svg";

const HeroMobile = () => {
  return (
    <div className="grid grid-cols-12 gap-6 mb-12">
      {/* IMAGE SECTION  */}
      {/* <div className="absolute w-8/12 xl:w-10/12">
        <Image
          style={{ width: "600px" }}
          className="absolute -left-[6rem] top-0"
          src={lrftBgImage}
          alt=""
        />
      </div> */}

      {/* Left Slider with Mobile Screen Section */}
      <div className="col-span-12 md:col-span-5">
        <div className="mobileCase relative mx-auto w-full max-w-xs h-[480px] rounded-3xl bg-[#C62829] border-8 flex justify-center items-center border-black overflow-hidden pt-5">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper h-full w-full"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Image
                    src={`/image/slider/slider-${item}.webp`}
                    height={398}
                    width={224}
                    alt={`BikeFixup Slider Image - ${item}`}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Right TEXT SECTION  */}
      <div className="col-span-12 md:col-span-7 p-10 bg-gradient-to-b from-white/20 to-white/0 bg-white/10 rounded-3xl shadow-md text-black">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">
          Download the mobile app and get lots of{" "}
          <span className="text-beta-900">offers</span>
        </h2>
        <p className="text-center my-10">
          Get professional periodic two-wheeler service, doorstep bike repair,
          engine care, engine repair, genuine spare parts, and much more done at
          affordable prices in India.
        </p>
        <div className="grid grid-cols-2 gap-5 mb-10 px-5">
          <Image
            className="w-full max-w-[180px] mx-auto"
            src={playStoreImage}
            alt="Get it on Play Store"
          />
          <Image
            className="w-full max-w-[180px] mx-auto"
            src={appStoreImage}
            alt="Get it on App Store"
          />
        </div>
        <div className="flex justify-center items-center flex-row md:flex-col lg:flex-row">
          <Image
            className="w-[100px] lg:w-auto  md:mb-5"
            src={QrCodeImage}
            alt=""
          />
          <div className="pl-5 lg:pl-8">
            <p className="text-lg lg:text-2xl font-bold lg:font-semibold">
              SCAN QR CODE TO DOWNLOAD
            </p>
            <p className="text-sm lg:text-md">
              Download the Bikefixup app & get up to 10% off on bike services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMobile;
