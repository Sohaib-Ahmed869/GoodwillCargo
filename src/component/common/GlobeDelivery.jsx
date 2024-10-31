import React from "react";
import InsiteImage from "../../assets/home/insites-img.png";

const GlobeDelivery = () => {
  return (
    <div className="flex flex-col gap-5 h-full w-full  sm:gap-10 sm:px-9 my-16 items-center justify-center">
      <h1 className="text-3xl sm:text-4xl xl:text-6xl 2xl:text-6xl font-medium text-center">
        Seamless Delivery Across the Globe.
      </h1>
      <img
        src={InsiteImage}
        className="w-full lg:w-3/5"
        alt="insites image"
      />
    </div>
  );
};

export default GlobeDelivery;
