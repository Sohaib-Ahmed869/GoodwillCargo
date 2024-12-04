import React from "react";
import { useLocation } from "react-router-dom";

const ServicesCard = ({ servicesData }) => {
  const location = useLocation();

  return (
    <div className="flex items-center justify-center flex-col">
      {location.pathname === "/contact" ? (
        <h1 className="text-3xl md:text-4xl mt-20 xl:text-5xl 2xl:text-5xl">
          Why Choose Us?
        </h1>
      ) : (
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium mt-10 sm:mt-20 w-5/6 xl:w-5/6 text-center leading-normal">
          Fair Pricing, Zero Surprises. Your Trusted Partner for Reliable
          Logistics.
        </h1>
      )}
      {/* services cards */}
      <div className="lg:flex lg:flex-wrap grid grid-cols-2 max-sm:p-4 p-20  justify-center gap-1  w-full lg:gap-x-20 gap-y-9 sm:gap-y-16 justify-items-center">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex gap-5  w-5/6 md:w-auto  items-center flex-col "
          >
            <img
              src={service.img}
              className="w-[10rem] md:w-[24rem]  xl:w-[28rem] 2xl:w-[28rem]"
              alt={`${service.title} image`}
            />
            <p className="text-lg md:text-3xl mb-5  xl:text-4xl 2xl:text-4xl md:w-[20rem] 2xl:w-[30rem]  text-center">
              {service.title}
            </p>
            <p className="text-md  max-sm:text-sm md:w-[28rem] -mt-5 text-center ">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
