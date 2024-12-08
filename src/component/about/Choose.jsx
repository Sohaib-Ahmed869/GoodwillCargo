import React from "react";
import ChooseImg1 from "../../assets/about/choose-card-1.png";
import ChooseImg2 from "../../assets/about/choose-card-2.png";
import ChooseImg3 from "../../assets/about/choose-card-3.png";
import ChooseImg4 from "../../assets/about/choose-card-4.png";

const chooseData = [
  {
    title: "Leading Since 1976",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum dolorum tempora doloribus unde blanditiis culpa et aut architecto dolore.",
    image: ChooseImg1,
  },
  {
    title: "Clear Pricing, No Hidden Fees",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum dolorum tempora doloribus unde blanditiis culpa et aut architecto dolore.",
    image: ChooseImg2,
  },
  {
    title: "Global Reach",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum dolorum tempora doloribus unde blanditiis culpa et aut architecto dolore.",
    image: ChooseImg3,
  },
  {
    title: "Hassle-Free Customs Clearance",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum dolorum tempora doloribus unde blanditiis culpa et aut architecto dolore.",
    image: ChooseImg4,
  },
];

const Choose = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5 ">
      <h1 className="text-3xl   md:text-4xl xl:text-5xl 2xl:text-5xl">
        Why Choose Us?
      </h1>
      <div className="flex items-center justify-center  py-20">
        <div className="flex flex-wrap  items-center justify-center w-full px-5 gap-10">
          {chooseData.map((item, index) => (
            <div
              key={index}
              className="bg-[#F4F6FA] w-full md:w-[25rem] xl:w-[40rem] md:h-60 rounded-3xl flex flex-col relative"
            >
              <span className="p-7  flex flex-col gap-10 w-full">
                <h1 className="text-md lg:text-3xl font-semibold">
                  {item.title}
                </h1>
              </span>
              <div className="pl-7   w-full flex ">
                <img
                  src={item.image}
                  className="w-1/3 sm:w-52 h-20 sm:h-52 md:w-2/3 xl:w-1/2 absolute right-0 bottom-0"
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
