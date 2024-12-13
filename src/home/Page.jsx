import React from "react";
import Hero from "../component/common/Hero";
import Services from "../component/home/Services";
import Insides from "../component/home/Insites";
import { FaWhatsapp } from "react-icons/fa";

const Page = () => {
  const title = "Seamless Import and Export Solutions, From Start to Finish";
  return (
    <>
      <Hero title={title} />

      <Services />
      <Insides />

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
    </>
  );
};

export default Page;
