import React from "react";
import CommitmentImg from "../../assets/about/our-commitment.png";

const OurCommitment = () => {
  return (
    <div className="flex flex-col gap-20 md:px-9 my-10 sm:my-44 items-center text-center  ">
      <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-7xl">
        Our Commitment to You
      </h1>
      <p className="text-base md:text-xl xl:text-2xl 2xl:text-4xl !leading-normal  w-full xl:w-5/6 text-[#525252] ">
        From the moment your shipment is ready, until it reaches its final
        destination, we are dedicated to providing you with exceptional service.
        Our experienced team is available every step of the way, offering
        personalized support and expertise to ensure your logistics and customs
        clearance experience is as smooth as possible. Let us handle the details
        so you can focus on what matters most—your business.
      </p>
      <img
        src={CommitmentImg}
        className="w-4/6 h-full"
        alt="our commitment image"
      />
    </div>
  );
};

export default OurCommitment;
