import React from "react";
import AboutImage from "../../assets/about/about.png";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import callNow from "../../assets/navbar/callNow.png";
import { IoCall } from "react-icons/io5";

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row  justify-between py-2 lg:py-10 ">
        <div className=" flex   justify-center w-full lg:w-3/4 flex-col gap-2 lg:gap-10  px-10 lg:pl-20 items-start ">
          <h1 className="text-3xl text-center lg:text-start w-full  md:text-4xl xl:text-5xl 2xl:text-5xl">
            About Goodwill Cargo
          </h1>
          <p className="text-justify text-base md:text-xl xl:text-2xl 2xl:text-2xl w-full xl:w-5/6 text-[#525252] !leading-normal">
            With Over Four Decades of Industry Expertise, We Are Committed to
            Providing Seamless, Efficient, and Reliable Customs Clearance
            Services Tailored to Meet All Your Import and Export Needs. Our
            Capabilities Extend Across Air, Land, and Sea Transportation,
            Ensuring That No Matter the Size, Complexity, or Destination of Your
            Shipment, We Handle It With the Utmost Precision, Professionalism,
            and Care. Discover the Difference That Decades of Experience and
            Dedication Can Make in Simplifying Your Logistics and Trade
            Operations.
          </p>
        </div>
        <div className="flex lg:flex justify-end h-full mt-[-3rem] lg:mt-0">
          <img
            src={AboutImage}
            className="w-2/3 md:w-2/4 lg:w-[59rem]"
            alt="about image"
          />
        </div>
      </div>

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

      <Link to="tel:+97142628523" className="fixed bottom-11 left-5 z-50">
        <div className="flex border-2 border-black text-black border-opacity-100 p-2 rounded-full gap-2 hover:scale-110 transition-transform duration-200 cursor-pointer">
          <IoCall className="w-6 h-6 " />
        </div>
      </Link>
    </>
  );
};

export default About;
