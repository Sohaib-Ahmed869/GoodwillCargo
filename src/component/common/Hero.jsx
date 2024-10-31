import React from "react";
import hero from "../../assets/home/hero.png";
import GetStarted from "../../assets/home/hero-getStarted.png";
import { useLocation } from "react-router-dom";

const Hero = ({ title }) => {
  const location = useLocation();
  return (
    <div className="w-full h-full bg-gray-400  relative">
      {location.pathname === "/" ? (
        <>
          <img
            className="absolute  top-0 left-0  w-full min-h-full object-cover z-0  "
            src={hero}
            alt="hero image"
          />
          <div className="relative flex flex-col items-center justify-center w-full h-screen">
            <div className="flex items-center justify-center flex-col gap-5 -mt-32 sm:mt-0">
              <p className="font-semibold text-base md:text-xl text-center xl:text-2xl 2xl:text-2xl">
                Mastering Dubai's Trade Routes with Hassle-Free Clearance
              </p>
              <h1 className="font-semibold text-3xl md:text-4xl xl:text-6xl 2xl:text-6xl w-4/5 2xl:w-3/6 text-center !leading-normal">
                {title}
              </h1>
              {location.pathname === "/" && (
                <>
                  <p className="text-white sm:w-4/6 px-5 text-center text-base md:text-xl xl:text-2xl 2xl:text-2xl !leading-relaxed">
                    We Deliver your cargo seamlessly across the globe with our
                    reliable, efficient solutions. From air to sea, we ensure
                    timely delivery with tailored logistics service that meet
                    your personal or business needs.
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
        </>
      ) : (
        <div className="bg-gradient-to-b from-[#795521] to-[#ec8f03]">
          <div className="relative flex flex-col items-center justify-center w-full h-[60vh]">
            <div className="flex items-center justify-center flex-col gap-5">
              <p className="font-semibold text-base md:text-xl text-center xl:text-2xl 2xl:text-2xl">
                Mastering Dubai's Trade Routes with Hassle-Free Clearance
              </p>
              <h1 className="font-semibold text-3xl md:text-4xl xl:text-6xl 2xl:text-6xl w-4/5 2xl:w-3/6 text-center !leading-normal">
                {title}
              </h1>
              {location.pathname === "/" && (
                <>
                  <p className="text-white sm:w-4/6 px-5 text-center text-base md:text-xl xl:text-2xl 2xl:text-2xl !leading-relaxed">
                    We Deliver your cargo seamlessly across the globe with our
                    reliable, efficient solutions. From air to sea, we ensure
                    timely delivery with tailored logistics service that meet
                    your personal or business needs.
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
