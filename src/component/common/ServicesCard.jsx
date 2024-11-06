import React from "react";


const ServicesCard = ({servicesData}) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium my-10 sm:my-20 w-5/6 xl:w-5/6 text-center leading-normal">
        Clear pricing, no hidden fees just straightforward, reliable logistics.
      </h1>

      {/* services cards */}
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-x-[5rem] 2xl:gap-x-40 w-full 2xl:w-3/4 gap-y-9 sm:gap-y-16">
        {servicesData.map((service, index) => (
          <div key={index} className=" flex gap-5 md:gap-10 items-center justify-center flex-col">
            <img
              src={service.img}
              className="w-[19rem] md:w-[24rem]  xl:w-[28rem] 2xl:w-[28rem]"
              alt={`${service.title} image`}
            />
            <p className="text-xl  md:text-3xl h-20 xl:text-4xl 2xl:text-4xl w-[20rem] 2xl:w-[30rem] text-center">
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
