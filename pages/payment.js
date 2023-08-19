// import Link from "next/link";
// import Image from "next/image";

// import Succesfully from "../public/assets/succesfully.webp";
// const Payment = () => {

//     return (
//         <>
//             <div className="bg-gradient-to-l from-[#83e9fb] to-[#f591d2] sm:px-5 sm:py-5 md:px-10 md:py-10 h-screen">
//                 <div className="h-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-white  rounded-3xl overflow-hidden w-full loginGlass text-slate-200 relative">
//                     <div className="rounded-3xl h-full  w-full px-2  ">
//                         <div className="w-full h-full flex justify-around items-center">
//                             <Image
//                                 className=" lg:block "
//                                 src={Succesfully}
//                                 alt=""
//                             />
//                         <p className="text-black"> Payment Succesfully</p>
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
// export default Payment;
import Link from "next/link";
import Image from "next/image";

import Succesfully from "../public/assets/succesfully.webp";

const Payment = () => {
  return (
    <>
      <div className="bg-gradient-to-l from-[#83e9fb] to-[#f591d2] sm:px-5 sm:py-5 md:px-10 md:py-10 h-screen">
        <div className="h-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-white rounded-3xl 
         w-full loginGlass text-slate-200 ">
          <div className="rounded-3xl h-full w-full px-2">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <Image className="lg:block" src={Succesfully} alt="" />
              <p className="text-white text-2xl md:text-4xl mt-4">Payment Successfully</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
