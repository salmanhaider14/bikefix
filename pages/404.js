import Image from "next/image";
import React from "react";

const CustomError = () => {
  return (
    <div className="bg-main p-4 md:p-16">
      <div
        className="bg-main overflow-hidden"
        style={{
          minHeight: "100vh",
          boxShadow: "5px 7px 10px rgba(0,0,0,0.3)",
          outline: "2px solid white",
          borderRadius: "1rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Image src="/assets/error.png" width={500} height={100} />
          <h1
            style={{ color: "#690466", fontWeight: "bold", fontSize: "30px" }}
            className="text-center pt-2 "
          >
            Page Not Found
          </h1>
          <p className="text-center">
            Sorry we can't find the page you are looking forever
          </p>
          <a
            href="/"
            className="underline text-center  "
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            <p className="pt-3">Back To Home</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomError;
