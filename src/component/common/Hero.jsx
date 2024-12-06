import React from "react";
import hero from "../../assets/home/hero.png";
import GetStarted from "../../assets/home/hero-getStarted.png";
import { useLocation } from "react-router-dom";

const Hero = ({ title }) => {
  const location = useLocation();
  return (
    <div className="w-full    relative">
      {location.pathname === "/" ? (
        <>
          <img
            className="absolute  top-0 left-0  w-full object-left object-cover h-screen lg:object-top lg:object-cover   z-0 "
            src={hero}
            alt="hero image"
          />
          <div className="relative  xl:top-13  flex flex-col items-center lg:justify-center lg:top-0 top-36 w-full h-screen">
            <div className="flex items-center justify-center flex-col gap-2">
              <p className="font-semibold text-base md:text-xl text-center xl:text-2xl 2xl:text-2xl px-4 ">
                Customs Clearance &amp; Shipping Made Easy To / From United Arab
                Emirates (U.A.E) By Air &amp; Sea
              </p>
              <h1 className="font-semibold text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl w-4/5 2xl:w-3/6 text-center !leading-normal">
                {title}
              </h1>
              {location.pathname === "/" && (
                <>
                  <p className="lg:text-white text-black font-semibold sm:w-4/6 px-5 text-center text-base md:text-xl xl:text-2xl 2xl:text-2xl !leading-relaxed  p-2">
                    Shipping made simple. From Air to Sea, we specialize in
                    delivering your Cargo on time and without Hassle. Trust us
                    for Efficient Logistics tailored to your Personal or
                    Business goals
                  </p>
                  <button className="bg-white bg-opacity-30 2xl:bg-opacity-10 hover:bg-opacity-35 hover:scale-105 transition-transform duration-500 flex items-center justify-center gap-2 rounded-full text-black py-4 2xl:py-5 text-lg xl:text-2xl px-4 2xl:px-8">
                    <p className="text-base md:text-xl 2xl:text-2xl">
                      Get Started
                    </p>
                    <img
                      src={GetStarted}
                      className="w-4 2xl:w-5"
                      alt="get started image"
                    />
                  </button>
                </>
              )}
            </div>
          </div>
          <h1 className="bg-primary text-2xl relative w-full sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium py-14 text-center">
            Leading Custom Clearance in Dubai Since 1976
          </h1>
        </>
      ) : (
        <div className="bg-gradient-to-b from-[#795521] to-[#ec8f03] dark:bg-gradient-to-b dark:from-[#795521] dark:to-[#ec8f03] dark:text-white w-full h-[40vh] lg:h-[40vh] flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center w-full mt-20 h-[40vh] lg:h-[40vh]">
            <div className="flex items-center justify-center flex-col gap-5">
              <p className="font-semibold text-base md:text-xl text-white text-center xl:text-2xl 2xl:text-2xl px-4">
                Trusted Name in Customs Clearance and Logistics in Dubai Since
                1976.
              </p>
              <h1 className="font-semibold text-3xl   md:text-4xl xl:text-6xl 2xl:text-6xl w-full  text-center !leading-normal">
                {title}
              </h1>
              {location.pathname === "/" && (
                <>
                  <p className="text-white sm:w-4/6 px-5 text-center text-base md:text-xl xl:text-2xl 2xl:text-2xl !leading-relaxed">
                    Shipping made simple. From Air to Sea, we specialize in
                    delivering your Cargo on time and without Hassle. Trust us
                    for Efficient Logistics tailored to your Personal or
                    Business goals
                  </p>
                  <button className="bg-white bg-opacity-30 2xl:bg-opacity-10 hover:bg-opacity-35 hover:scale-105 transition-transform duration-500 flex items-center justify-center gap-2 rounded-full text-white py-4 2xl:py-5 text-lg xl:text-2xl px-4 2xl:px-8">
                    <p className="text-base md:text-xl 2xl:text-2xl">
                      Get Started
                    </p>
                    <img
                      src={GetStarted}
                      className="w-4 2xl:w-5"
                      alt="get started image"
                    />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* img  */}
      {/* <img
        className={`absolute  top-0 left-0   object-cover z-0   ${
          location.pathname === "/" ? "w-full min-h-full " : "h-screen w-full"
        } z-0 object-cover`}
        src={hero}
        alt="hero image"
      /> */}
    </div>
  );
};

export default Hero;
