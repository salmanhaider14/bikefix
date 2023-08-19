import React from "react";
import Image from "next/image";

const HeroCustomer = () => {
    return (

        <div className="px-3 py-10 md:p-10 bg-gradient-to-b from-white/20 to-white/0 bg-white/0 rounded-3xl shadow-md text-black relative mb-16">
            <h2 className="text-beta-900 text-4xl md:text-5xl font-semibold text-center mb-4">Customer Speaks</h2>
            <p className="text-sm md:text-lg text-center">Free text customers says about us</p>
            <div className="mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28 md:gap-5">
                <div className="text-center bg-gradient-to-b from-white/20 to-white/0 bg-white/40 rounded-3xl shadow-md p-12 pt-24 relative" >
                    <div className="rounded-full border-2 border-white opacity-90 shadow absolute w-[150px] h-[150px] overflow-hidden object-cover -top-24 mb-12 left-[50%] -translate-x-[50%]">
                        <Image src="/image/review/review-1.webp" height={150} width={150} alt="Customer Testomonial" />
                    </div>
                    <h3 className="text-beta-900 font-semibold text-xl my-4">Aadhila</h3>
                    <p className="text-sm font-light">Excellent experience with free text. It is just like Urban Clap for Bike Service and Repair. I had booked Honda Active service and the job was done in a very professional manner or just simply awesome.</p>
                </div>
                <div className="text-center bg-gradient-to-b from-white/20 to-white/0 bg-white/40 rounded-3xl shadow-md p-12 pt-24 relative" >
                    <div className="rounded-full border-2 border-white opacity-90 shadow absolute w-[150px] h-[150px] overflow-hidden object-cover -top-24 left-[50%] -translate-x-[50%]">
                        <Image src="/image/review/review-2.webp" height={150} width={150} alt="Customer Testomonial" />
                    </div>
                    <h3 className="text-beta-900 font-semibold text-xl my-4">Chetana</h3>
                    <p className="text-sm font-light">Excellent experience with free text. It is just like Urban Clap for Bike Service and Repair. I had booked Honda Active service and the job was done in a very professional manner or just simply awesome.</p>
                </div>
                <div className="text-center bg-gradient-to-b from-white/20 to-white/0 bg-white/40 rounded-3xl shadow-md p-12 pt-24 relative" >
                    <div className="rounded-full border-2 border-white opacity-90 shadow absolute w-[150px] h-[150px] overflow-hidden object-cover  -top-24 left-[50%] -translate-x-[50%]">
                        <Image src="/image/review/review-3.webp" height={150} width={150} alt="Customer Testomonial" />
                    </div>
                    <h3 className="text-beta-900 font-semibold text-xl my-4">Viraj Silva</h3>
                    <p className="text-sm font-light">Excellent experience with free text. It is just like Urban Clap for Bike Service and Repair. I had booked Honda Active service and the job was done in a very professional manner or just simply awesome.</p>
                </div>
            </div>
        </div>
    );
}
export default HeroCustomer