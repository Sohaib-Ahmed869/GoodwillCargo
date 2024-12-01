import React from "react";
import Hero from "../component/common/Hero";
import Services from "../component/home/Services";
import Insides from "../component/home/Insites";

const Page = () => {
  const title = "Seamless Import and Export Solutions, From Start to Finish";
  return (
    <>
      <Hero title={title} />
     
      <Services  />
      <Insides />
     
    </>
  );
};

export default Page;
