import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Plus, Minus } from "lucide-react";

const ServicesCard = ({ servicesData }) => {
  const location = useLocation();
  const [expandedServices, setExpandedServices] = useState({});

  const toggleDescription = (index) => {
    setExpandedServices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="flex items-center justify-center flex-col">
      {location.pathname === "/contact" ? (
        <h1 className="text-3xl md:text-4xl mt-20 xl:text-5xl 2xl:text-5xl">
          Why Choose Us?
        </h1>
      ) : (
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium mt-2 sm:mt-20 w-5/6 xl:w-5/6 text-center leading-normal">
          Fair Pricing, Zero Surprises. Your Trusted Partner for Reliable
          Logistics.
        </h1>
      )}
      <div className="grid grid-cols-2 max-sm:p-4 justify-center w-full lg:w-3/4 lg:gap-x-4 gap-y-0 sm:gap-y-2 justify-items-center">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex gap-5 w-5/6 md:w-auto items-center flex-col relative"
          >
            <img
              src={service.img}
              className="w-[10rem] md:w-[18rem] xl:w-[28rem] 2xl:w-[28rem]"
              alt={`${service.title} image`}
            />
            <div className="flex items-start">
              <p className="text-lg md:text-3xl mb-0 md:w-[18rem] xl:text-4xl 2xl:text-4xl  2xl:w-[30rem] text-center">
                {service.title}
              </p>
              {service.description && (
                <button
                  onClick={() => toggleDescription(index)}
                  className="hover:bg-gray-100 p-1 rounded-full transition-colors"
                  aria-label={
                    expandedServices[index]
                      ? "Collapse description"
                      : "Expand description"
                  }
                >
                  {expandedServices[index] ? (
                    <Minus className="lg:w-6 lg:h-6 h-3 w-3" />
                  ) : (
                    <Plus className="lg:w-6 lg:h-6 h-3 w-3" />
                  )}
                </button>
              )}
            </div>
            <div
              className={`text-md max-sm:text-sm md:w-[18rem] xl:w-[24rem] text-justify transition-all duration-300 overflow-hidden ${
                expandedServices[index]
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
