import React from "react";

import ServicesCard from "../common/ServicesCard";
import Service1 from "../../assets/home/service1.png";
import Service2 from "../../assets/home/service2.png";
import Service3 from "../../assets/home/service3.png";
import Service4 from "../../assets/home/service4.png";
const ServicesCardData = [
  {
    img: Service1,
    title: "Small Shipments Around the World",
  },
  {
    img: Service2,
    title: "Import & Export Via Air, Land & Sea",
  },
  {
    img: Service3,
    title: "Customs Clearance Without Any Hassell",
  },
  {
    img: Service4,
    title: "Local Delivery & Distribution ",
  },
];


const Services = () => {
  return (
    <div className="h-full w-full relative xl:top-[20rem] 2xl:top-[38rem]">
      
        <h1 className="bg-primary text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium py-14 text-center">
          Leading Custom Clearance in Dubai Since 1976
        </h1>
      
          <ServicesCard servicesData={ServicesCardData} />
      
    </div>
  );
};

export default Services;