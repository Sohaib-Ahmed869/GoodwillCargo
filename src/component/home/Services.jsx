import React from "react";
import Service1 from "../../assets/home/service1.png";
import Service2 from "../../assets/home/service2.png";
import Service3 from "../../assets/home/service3.png";
import Service4 from "../../assets/home/service4.png";

const Services = () => {
  return (
    <div className="h-full w-full relative top-[38rem]  ">
      <div>
        <h1 className="bg-primary text-2xl sm:text-3xl md:text-4xl xl:text-6xl 2xl:text-6xl font-medium px-5 py-14 text-center">
          Leading Custom Clearance in Dubai Since 1976
        </h1>
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl 2xl:text-6xl font-medium my-10 sm:my-20 w-5/6 xl:w-5/6 text-center leading-normal">
            Clear pricing, no hidden fees just straightforward, reliable
            logistics.
          </h1>

          {/* services cards */}
          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-x-[5rem] 2xl:gap-x-40 w-full 2xl:w-3/4  gap-y-9 sm:gap-y-16">
            <div className="flex gap-5 md:gap-10 items-center justify-center flex-col">
              <img
                src={Service1}
                className="w-[19rem] md:w-[24rem] xl:w-[28rem] 2xl:w-[28rem]"
                alt="first service image"
              />
              <p className="text-xl md:text-3xl xl:text-4xl 2xl:text-4xl w-[20rem] 2xl:w-[30rem] text-center">
                Small Shipments Around the World
              </p>
            </div>
            <div className="flex gap-5 md:gap-10 items-center justify-center flex-col">
              <img
                src={Service3}
                className="w-[19rem] md:w-[24rem] xl:w-[28rem] 2xl:w-[28rem]"
                alt="second service image"
              />
              <p className="text-xl md:text-3xl xl:text-4xl 2xl:text-4xl w-[20rem] 2xl:w-[30rem] text-center">
                Import & Export Via Air, Land & Sea
              </p>
            </div>
            <div className="flex gap-5 md:gap-10 items-center justify-center flex-col">
              <img
                src={Service4}
                className="w-[19rem] md:w-[24rem] xl:w-[28rem] 2xl:w-[28rem]"
                alt="first service image"
              />
              <p className="text-xl md:text-3xl xl:text-4xl 2xl:text-4xl w-[20rem] 2xl:w-[30rem] text-center">
                Customs Clearance Without Any Hassell
              </p>
            </div>
            <div className="flex gap-5 md:gap-10 items-center justify-center flex-col">
              <img
                src={Service2}
                className="w-[19rem] md:w-[24rem] xl:w-[28rem] 2xl:w-[28rem]"
                alt="second service image"
              />
              <p className="text-xl md:text-3xl xl:text-4xl 2xl:text-4xl w-[20rem] 2xl:w-[30rem] text-center">
                Local Delivery & Distribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;