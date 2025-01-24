import React, { useState, useEffect } from "react";
import Hero from "../component/common/Hero";
import Services from "../component/home/Services";
import Insides from "../component/home/Insites";
import callNow from "../assets/navbar/callNow.png";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";

const useViewport = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return { isMobile };
};

const Page = () => {
  const title = "Seamless Import and Export Solutions, From Start to Finish";
  const { isMobile } = useViewport();
  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);
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
      <Link
        to={isMobile ? "tel:+971569584073" : "tel:+97142628523"}
        className="fixed bottom-11 left-5 z-50"
      >
        <div className="flex border-2 border-black text-black border-opacity-100 p-2 rounded-full gap-2 hover:scale-110 transition-transform duration-200 cursor-pointer">
          <IoCall className="w-6 h-6" />
        </div>
      </Link>
    </>
  );
};

export default Page;
