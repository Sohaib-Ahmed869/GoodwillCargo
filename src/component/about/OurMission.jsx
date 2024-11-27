import React from "react";
import OurMissionImg from "../../assets/about/our-mission.png";

const OurMission = () => {
  return (
    <>
      <h1 className="bg-primary text-2xl sm:text-3xl md:text-4xl xl:text-6xl 2xl:text-6xl font-medium px-5 py-14 text-center">
        To / From U.A.E to the World, We Deliver.
      </h1>

      <div className="flex flex-col lg:flex-row-reverse  justify-between py-10 ">
        <div className=" flex   justify-center w-full   z-20 lg:w-3/4 flex-col gap-10  px-10 lg:pl-20 items-start ">
          <h1 className="text-3xl text-center lg:text-start w-full  md:text-4xl xl:text-5xl 2xl:text-5xl">
            Our Mission
          </h1>
          <p className="text-center lg:text-start text-base md:text-xl xl:text-2xl 2xl:text-2xl w-full xl:w-5/6 text-[#525252] !leading-normal">
            Our Mission is to Simplify the Complex World of Logistics and
            Customs Clearance for Businesses and Individuals Alike. We Are
            Dedicated to Offering Transparent Pricing, Fast and Reliable
            Service, and Dependable Support , Ensuring That Your Goods Are
            Delivered On Time, Without Delays or Hidden Fees.
          </p>
        </div>
        <div className=" hidden lg:flex justify-end h-full ">
          <img
            src={OurMissionImg}
            className="w-2/3 md:w-2/4 lg:w-[59rem]"
            alt="about image"
          />
        </div>
      </div>
    </>
  );
};

export default OurMission;
