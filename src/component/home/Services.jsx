import React from "react";
import Service1 from "../../assets/home/service1.png";
import Service2 from "../../assets/home/service2.png";
import Service3 from "../../assets/home/service3.png";
import Service4 from "../../assets/home/service4.png";

const Services = () => {
  return (
    <div className="h-full w-full relative top-[47rem]">
      <h1 className="bg-primary text-7xl font-semibold py-14 text-center">
        Leading Custom Clearance in Dubai Since 1976
      </h1>
      <div className="flex items-center justify-center flex-col  ">
        <h1 className="text-7xl font-semibold  my-20 w-2/5 text-center leading-normal">
          Clear pricing, no hidden fees just straightforward, reliable
          logistics.
        </h1>
        <div className="w flex flex-wrap items-center justify-center gap-x-[25rem] gap-y-16">
          <div className=" flex gap-10 items-center justify-center flex-col">
            <img
              src={Service1}
              className="w-[39rem]"
              alt="first service image"
            />
            <p className="text-5xl w-[30rem] text-center ">
              Small Shipments Around the World
            </p>
          </div>
          <div className=" flex gap-10 items-center justify-center flex-col">
            <img
              src={Service3}
              className="w-[39rem]"
              alt="second service image"
            />
            <p className="text-5xl w-[30rem] text-center ">
              Import & Export Via Air, Land & Sea
            </p>
          </div>
          <div className=" flex gap-10 items-center justify-center flex-col">
            <img
              src={Service4}
              className="w-[39rem]"
              alt="first service image"
            />
            <p className="text-5xl w-[30rem] text-center ">
              Customs Clearance Without Any Hassell
            </p>
          </div>
          <div className=" flex gap-10 items-center justify-center flex-col">
            <img
              src={Service2}
              className="w-[39rem]"
              alt="second service image"
            />
            <p className="text-5xl w-[30rem] text-center ">
              Local Delivery & Distribution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
