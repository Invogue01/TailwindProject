import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[96px] w-full h-screen justify-center mx-auto text-center flex flex-col ">
        <p className="text-[#00df9a] font-bold p-2">DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Growing with Data
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for{" "}
          </p>
          <Typed className="text-[#d2c2c2] md:text-5xl sm:text-4xl text-xl font-bold"
            strings={["Buyer to Buyer, Buyer to Customer, SASS"]}
            typeSpeed={20}
            backSpeed={30}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC, SASS platforms </p>
        <button className="bg-[#00df9a] w-[170px] rounded-md font-medium my-6 mx-auto py-3 text-black ">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
