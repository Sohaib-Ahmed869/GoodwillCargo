import React from "react";
import InsiteImage from "../../assets/home/insites-img.png";
import { User } from "lucide-react";

const item = {
  value: "+971569584073",
  value2: "+971562951575",
  value3: "+971506448596",
  value4: "+971506448524",
  value5: "+971506446940",
};
const GlobeDelivery = () => {
  return (
    <div className="flex flex-col gap-5 h-full w-full  sm:gap-10 sm:px-9 mb-16 lg:mb-0 lg:mt-16 items-center justify-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-3xl sm:text-4xl xl:text-6xl 2xl:text-6xl font-medium text-center">
          Contact Us
        </h1>
        <div className="w-20 h-20 text-xl lg:text-3xl bg-primary rounded-full flex items-center justify-center">
          <User />
        </div>
        <h1 className="text-2xl sm:text-2xl xl:text-2xl 2xl:text-2xl font-medium text-center">
          Sales Agents
        </h1>
        <div className="flex gap-2 text-md lg:flex-row flex-col">
          <a href={`tel:${item.value}`} className="text-black">
            {item.value} <span className="hidden lg:inline-block">|</span>{" "}
          </a>

          <a href={`tel:${item.value2}`} className="text-black">
            {item.value2} <span className="hidden lg:inline-block">|</span>{" "}
          </a>

          <a href={`tel:${item.value3}`} className="text-black">
            {item.value3} <span className="hidden lg:inline-block">|</span>{" "}
          </a>

          <a href={`tel:${item.value4}`} className="text-black">
            {item.value4} <span className="hidden lg:inline-block">|</span>{" "}
          </a>

          <a href={`tel:${item.value5}`} className="text-black">
            {item.value5}
          </a>
        </div>
      </div>
      <h1 className="text-3xl sm:text-4xl xl:text-6xl 2xl:text-6xl font-medium text-center">
        Seamless Delivery Across the Globe
      </h1>
      <img src={InsiteImage} className="w-full xl:w-3/5" alt="insites image" />
    </div>
  );
};

export default GlobeDelivery;
