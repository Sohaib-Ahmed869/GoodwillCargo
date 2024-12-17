import React from "react";
import Hero from "../component/common/Hero";
import GlobeDelivery from "../component/common/GlobeDelivery";
import ServicesCard from "../component/common/ServicesCard";
import Service1 from "../assets/services/service1.jpg";
import Service2 from "../assets/services/service2.png";
import Service3 from "../assets/services/service3.png";
import Service4 from "../assets/services/service4.png";
import Service5 from "../assets/services/service5.png";
import Service6 from "../assets/services/service6.png";
import { FaWhatsapp } from "react-icons/fa";

const ServicesCardData = [
  {
    img: Service1,
    title: "Door to Door Service Worldwide",
    description:
      "Effortlessly Delivering Small Shipments Worldwide by Air With Precision and Reliability. We Offer Cost-Effective Solutions for Document Courier Services and Small Packages, Catering to Both Personal and Commercial Needs. With Complete Door-to-Door Service and Trusted Global Networks, We Ensure Timely, Secure, and Hassle-Free Deliveries You Can Rely On",
  },
  {
    img: Service3,
    title: `Customs Clearance`,
    description:
      "Streamline Your Customs Clearance at Airports and Sea Ports With Our Professional Expertise. We Simplify Hassle-Free Clearance for Consignments, Including 20 and 40 Foot Containers. From Accurate Documentation to Timely Approvals, We Handle Every Detail With Precision, Allowing You to Focus on Your Business While Ensuring Smooth, Efficient Clearance.",
  },
  // {
  //   img: Service4,
  //   title: "Local Delivery ",
  //   description:
  //     "Experience Reliable Local Delivery and Distribution Services Across the U.A.E. We Specialize in Efficient Movement of Goods, Whether Small Parcels or Large Consignments. With a Professional Team and Well-Organized Network, We Ensure Timely Deliveries to Businesses and Individuals, Offering Dependable and Hassle-Free Solutions for All Your Local Logistical Requirements.",
  // },
  {
    img: Service5,
    title: "Air Freight",
    description:
      "Experience Reliable Air Freight Solutions for Import and Export Worldwide. Partnering With Leading Airlines, We Ensure Swift and Secure Cargo Movement Across the Globe. Our Professional Team Manages Every Step, From Booking to Delivery, With Precision and Efficiency, Guaranteeing Smooth Operations and Tailored Solutions for Your Shipping.",
  },
  {
    img: Service6,
    title: "Sea Freight",
    description:
      "Experience Professional Sea Freight Solutions for Import and Export Worldwide. We Handle LCL Shipments, 20- and 40-Foot Containers, and Flat Racks With Expertise. Through Strong Partnerships With Leading Shipping Lines, We Ensure Cost-Effective, Secure, and Timely Deliveries, Providing Reliable and Efficient Service for Your Logistics Needs.",
  },
];

const Page = () => {
  const title = "Our Services";
  return (
    <div>
      <Hero title={title} />
      <ServicesCard servicesData={ServicesCardData} />
      <GlobeDelivery />

      <div className="fixed bottom-5 right-5 z-50">
        <a
          href="https://wa.me/+971569584073"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white p-3 rounded-full shadow-lg"
        >
          <FaWhatsapp className="text-5xl rounded-full p-2 bg-green-500" />
        </a>
      </div>
    </div>
  );
};

export default Page;
