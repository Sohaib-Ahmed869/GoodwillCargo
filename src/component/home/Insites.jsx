import React from "react";
import InsiteImage from "../../assets/home/insites-img.png";
import AnimatedNumbers from "react-animated-numbers";

const Insites = () => {
  return (
    <div className="h-full w-full flex flex-col relative top-[47rem] mt-10 sm:mt-32 px-9 md:px-20 xl:px-32">
      <div className="bg-[#EFEFEF] px-6 md:px-20 py-10 flex justify-between rounded-3xl">
        <span className="text-center">
          <h1 className=" items-center justify-center text-2xl sm:text-3xl md:text-4xl xl:text-6xl 2xl:text-8xl mb-0 xl:mb-4 flex">
            <AnimatedNumbers
              animateToNumber={45}
              duration={2000}
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.4,
              })}
            />
            +
          </h1>
          <p className="text-base sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl ">
            Years of experience
          </p>
        </span>
        <span className="text-center">
          <h1 className=" items-center justify-center text-2xl sm:text-3xl md:text-4xl xl:text-6xl 2xl:text-8xl mb-0 xl:mb-4 flex">
            <AnimatedNumbers
              animateToNumber={35900}
              duration={2000}
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.4,
              })}
            />
            +
          </h1>
          <p className="text-base sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
            Shipments Delivered
          </p>
        </span>
        <span className="text-center">
          <h1 className=" items-center justify-center text-2xl sm:text-3xl md:text-4xl xl:text-6xl 2xl:text-8xl mb-0 xl:mb-4 flex">
            <AnimatedNumbers
              animateToNumber={2.5}
              duration={2000}
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.4,
              })}
            />
            K+
          </h1>
          <p className="text-base sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
            Valued Customers
          </p>
        </span>
      </div>

      <div className="flex flex-col gap-10 md:px-9 my-10 sm:my-16 items-center text-center">
        <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-7xl">
          Ensuring Timely Delivery With Utmost Professionalism
        </h1>
        <p
          className="text-base md:text-xl xl:text-2xl 2xl:text-4xl leading-loose  w-full xl:w-5/6 text-[#525252]"
          
        >
          We specialize in customs clearance, freight forwarding, and
          transportation services. Our team expertly navigates customs
          formalities and logistics, ensuring seamless import/export processes.
          From air and sea freight to local distribution, we handle your
          shipments with precision and care. With a commitment to transparency
          and efficiency, we prioritize your business needs while ensuring your
          goods reach their destination without delay.
        </p>
      </div>
      <div className="flex flex-col gap-5 sm:gap-10 sm:px-9 my-10 sm:my-16 items-center justify-center">
        <h1 className="text-3xl sm:text-4xl xl:text-6xl 2xl:text-8xl font-medium text-center ">
          Seamless Delivery Across the Globe.
        </h1>
        <img
          src={InsiteImage}
          className="  w-full lg:w-3/5"
          alt="insites image"
        />
      </div>
    </div>
  );
};

export default Insites;
