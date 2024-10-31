import React from "react";
import Hero from "../component/common/Hero";
import Services from "../component/home/Services";
import Insides from "../component/home/Insites";
import GlobeDelivery from "../component/common/GlobeDelivery";

const Page = () => {
  const title = "From Doorstep to Destination, We've Got You Covered";
  return (
    <>
      <Hero title={title} />
      <Services />
      <Insides />
      {/* <GlobeDelivery /> */}
    </>
  );
};

export default Page;
