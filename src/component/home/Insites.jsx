import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import GlobeDelivery from "../common/GlobeDelivery";

const Insites = () => {
  return (
    <div className="h-full w-full flex flex-col relative   px-9 md:px-20 xl:px-32">
      <div className="bg-[#EFEFEF] px-4 sm:px-16 md:px-12 py-10 flex flex-col vsm:flex-row  gap-5 vsm:gap-2 justify-between rounded-3xl">
        <span className="text-center ">
          <h1 className=" items-center  justify-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-0 xl:mb-4 flex">
            <AnimatedNumbers
              animateToNumber={45}
              duration={2000}
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.4,
              })}
            />
            +
          </h1>
          <p className="text-base sm:text-xl md:text-2xl   xl:text-3xl 2xl:text-4xl ">
            Years of experience
          </p>
        </span>
        <span className="text-center ">
          <h1 className=" items-center  justify-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-0 xl:mb-4 flex">
            <AnimatedNumbers
              animateToNumber={35900}
              duration={2000}
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.4,
              })}
            />
            +
          </h1>
          <p className="text-base sm:text-xl md:text-2xl   xl:text-3xl 2xl:text-4xl">
            Shipments Delivered
          </p>
        </span>
        <span className="text-center ">
          <h1 className=" items-center  justify-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-0 xl:mb-4 flex">
            <AnimatedNumbers
              animateToNumber={2.5}
              duration={5000}
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.4,
              })}
            />
            K+
          </h1>
          <p className="text-base sm:text-xl md:text-2xl   xl:text-3xl 2xl:text-4xl">
            Valued Customers
          </p>
        </span>
      </div>

      <div className="flex flex-col gap-2 lg:gap-7 md:px-9 my-3 lg:my-10 sm:my-16 items-center text-center">
        <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
          Simplifying Deliveries with Utmost Professionalism and Efficiency
        </h1>
        <p className="text-base text-justify md:text-xl xl:text-2xl 2xl:text-2xl !leading-normal  w-full text-[#525252]">
          We specialize in end-to-end logistics, including Customs Clearance,
          Freight Forwarding, and Transportation Services. Our expert team
          ensures seamless navigation of Customs Formalities, providing
          efficient Import and Export solutions tailored to your business. From
          Air and Sea Freight to Local Distribution, we handle every shipment
          with Precision and Care. After Customs Clearance, we ensure the timely
          delivery of Containers and Consignments to their final destinations,
          offering a Comprehensive Service you can rely on. With Transparency,
          Efficiency, and Professionalism at our core, we make Logistics
          effortless, so you can focus on growing your business.
        </p>
      </div>
      <GlobeDelivery />
    </div>
  );
};

export default Insites;
