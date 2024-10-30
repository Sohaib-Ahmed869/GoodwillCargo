import React from "react";
import AboutImage from "../../assets/about/about.png";

const About = () => {
  return (
    <>
      <h1 className="bg-primary text-2xl sm:text-3xl md:text-4xl xl:text-6xl 2xl:text-8xl font-medium py-14 text-center">
        Leading Custom Clearance in Dubai Since 1976
      </h1>
      <div className="flex  justify-between   py-20">
        <div className=" flex   justify-center w-3/4 flex-col gap-10 md:px-9 items-start text-center">
          <h1 className="text-3xl  ml-20  md:text-4xl xl:text-5xl 2xl:text-7xl">
            About Goodwill Cargo
          </h1>
          <p className="text-start ml-20 text-base md:text-xl xl:text-2xl 2xl:text-4xl w-full xl:w-5/6 text-[#525252] !leading-normal">
            Welcome to Goodwill Cargo, a trusted name in customs clearance and
            logistics in Dubai since 1976. With over four decades of experience,
            we are proud to offer seamless, efficient, and reliable customs
            clearance services that cater to all your import and export needs.
            Our expertise spans across air, land, and sea transportation,
            ensuring that no matter the size or destination of your shipment, we
            are equipped to handle it with precision and care.
          </p>
        </div>
        <div className="  flex justify-end h-full p-3">
          <img src={AboutImage} className="w-[59rem]" alt="about image" />
        </div>
      </div>
    </>
  );
};

export default About;
