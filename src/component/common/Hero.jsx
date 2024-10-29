import React from "react";
import hero from "../../assets/home/hero.png";
import GetStarted from "../../assets/home/hero-getStarted.png";
import { useLocation } from "react-router-dom";

const Hero = ({ title }) => {
  const location = useLocation();
  return (
    <div className="w-full h-full relative">
      <img
        className={`absolute w-full ${location.pathname === "/" ? null : "h-full"} z-0 object-cover`}
        src={hero}
        alt="hero image"
      />
      <div className="relative flex flex-col items-center justify-center w-full h-screen">
        <div className="flex items-center justify-center flex-col gap-5 -mt-52">
          <p className="font-semibold text-3xl">
            Mastering Dubai's Trade Routes with Hassle-Free Clearance
          </p>
          <h1 className="font-semibold text-8xl w-3/5 text-center">{title}</h1>
          {location.pathname === "/" && (
            <>
              <p className="text-white w-4/6 text-center text-3xl">
                We Deliver your cargo seamlessly across the globe with our reliable,
                efficient solutions. From air to sea, we ensure timely delivery with
                tailored logistics service that meet your personal or business
                needs.
              </p>
              <button className="bg-white bg-opacity-10 hover:bg-opacity-35 hover:scale-105 transition-transform duration-500 flex items-center gap-2 rounded-full text-white py-6 text-2xl px-6">
                Get Started
                <img src={GetStarted} alt="get started image" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;