import React from "react";
import AboutImage from "../../assets/about/about.png";

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row  justify-between py-10 ">
        <div className=" flex   justify-center w-full   z-20 lg:w-3/4 flex-col gap-10  px-10 lg:pl-20 items-start ">
          <h1 className="text-3xl text-center lg:text-start w-full  md:text-4xl xl:text-5xl 2xl:text-5xl">
            About Goodwill Cargo
          </h1>
          <p className="text-center lg:text-start text-base md:text-xl xl:text-2xl 2xl:text-2xl w-full xl:w-5/6 text-[#525252] !leading-normal">
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
        <div className=" hidden lg:flex justify-end h-full ">
          <img
            src={AboutImage}
            className="w-2/3 md:w-2/4 lg:w-[59rem]"
            alt="about image"
          />
        </div>
      </div>
    </>
  );
};

export default About;
