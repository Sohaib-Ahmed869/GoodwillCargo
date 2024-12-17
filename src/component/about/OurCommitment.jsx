import React from "react";
import CommitmentImg from "../../assets/about/our-commitment.png";

const OurCommitment = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-20 md:px-9 mb-20 px-10  items-center text-center  ">
      <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-5xl">
        Our Commitment to You
      </h1>
      <p className="text-base md:text-xl xl:text-2xl 2xl:text-2xl !leading-normal text-justify w-full xl:w-5/6 text-[#525252] ">
        From Start to Finish, We&#39;ve Got You Covered From the Moment Your
        Shipment Is Ready to Its Final Destination, We Are Committed to
        Delivering Exceptional Service. Our Experienced Team Is With You Every
        Step of the Way, Providing Personalized Support and Expert Guidance to
        Ensure a Seamless Logistics and Customs Clearance Experience. Let Us
        Take Care of the Details, So You Can Focus on What Matters Most , Your
        Business.
      </p>
      <img
        src={CommitmentImg}
        className="w-full sm:w-4/6 h-full"
        alt="our commitment image"
      />
    </div>
  );
};

export default OurCommitment;
