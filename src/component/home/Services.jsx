import React from "react";

import ServicesCard from "../common/ServicesCard";
import Service1 from "../../assets/home/service1.jpg";
import Service2 from "../../assets/home/service2.png";
import Service3 from "../../assets/home/service3.png";
import Service4 from "../../assets/home/service4.png";
const ServicesCardData = [
  {
    img: Service1,
    title: "Fast and Reliable Small Package Shipping Across the Globe",
  },
  {
    img: Service2,
    title: "Air, Land, Sea - Your One-Stop Solution for Import & Export",
  },
  {
    img: Service3,
    title: "Say Goodbye to Hassles with Streamlined Customs Clearance",
  },
  {
    img: Service4,
    title: "Your Partner for Fast, Reliable Local Delivery and Distribution",
  },
];

const Services = () => {
  return (
    <div className="h-full w-full relative  ">
      {/* <h1 className="bg-primary text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium py-14 text-center">
        Leading Custom Clearance in Dubai Since 1976
      </h1> */}

      <ServicesCard servicesData={ServicesCardData} />
    </div>
  );
};

export default Services;
