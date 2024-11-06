import React from 'react'
import Hero from '../component/common/Hero'
import GlobeDelivery from '../component/common/GlobeDelivery'
import ServicesCard from '../component/common/ServicesCard'
import Service1 from "../assets/services/service1.png";
import Service2 from "../assets/services/service2.png";
import Service3 from "../assets/services/service3.png";
import Service4 from "../assets/services/service4.png";
import Service5 from "../assets/services/service5.png";
import Service6 from "../assets/services/service6.png";



const ServicesCardData = [
  {
    img: Service1,
    title: "Small Shipments Around the World",
  },
  {
    img: Service2,
    title: "Import & Export Via Air, Land & Sea ",
  },
  {
    img: Service3,
    title: "Customs Clearance Without Any Hassell",
  },
  {
    img: Service4,
    title: "Local Delivery & Distribution ",
  },
  {
    img: Service5,
    title: "Air Freight",
  },
  {
    img: Service6,
    title: "Sea Freight",
  },
];


const Page = () => {
    const title  = "Our Services"
  return (
    <div>
      <Hero title={title} />
      <ServicesCard servicesData={ServicesCardData}  />
      <GlobeDelivery />
    </div>
  )
}

export default Page
