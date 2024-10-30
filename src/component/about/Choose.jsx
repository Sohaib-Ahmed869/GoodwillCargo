import React from "react";
import ChooseImg1 from "../../assets/about/choose-card-1.png";
import ChooseImg2 from "../../assets/about/choose-card-2.png";
import ChooseImg3 from "../../assets/about/choose-card-3.png";
import ChooseImg4 from "../../assets/about/choose-card-4.png";

const Choose = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20  -black">
      <h1 className="text-3xl  ml-20  md:text-4xl xl:text-5xl 2xl:text-5xl">
        Why Choose Us?
      </h1>
      <div className=" flex items-center justify-center py-20">
        {/* card container */}
        <div className="flex flex-wrap items-center justify-center w-3/4 gap-10 ">
          {/* card 1 */}
          <div className=" bg-[#F4F6FA] w-[40rem] h-72 rounded-3xl flex">
            <span className="p-7 flex flex-col gap-10 w-2/4">
              <h1 className="text-2xl font-bold">Leading Since 1976</h1>
              <p className="text-md">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                dolorum tempora doloribus unde blanditiis culpa et aut
                architecto dolore.
              </p>
            </span>
            <div className=" w-2/4 ">
              <img src={ChooseImg1} className="  w-full  h-full" alt="image 1" />
            </div>
          </div>
          {/* card 2 */}
          <div className="p- bg-[#F4F6FA] w-[40rem] h-[72]  rounded-3xl flex">
            <span className="p-7 flex flex-col gap-10 w-2/4">
              <h1 className="text-2xl font-bold">Clear Pricing, No Hidden Fees</h1>
              <p className="text-md">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                dolorum tempora doloribus unde blanditiis culpa et aut
                architecto dolore. 
              </p>
            </span>
            <div className=" w-2/4 ">
              <img src={ChooseImg2} className="  w-full h-full" alt="image 1" />
            </div>
          </div>
          {/* card 3 */}
          <div className=" bg-[#F4F6FA] w-[40rem] h-72  rounded-3xl flex">
            <span className="p-7 flex flex-col gap-10 w-2/4">
              <h1 className="text-2xl font-bold">Global Reach</h1>
              <p className="text-md">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                dolorum tempora doloribus unde blanditiis culpa et aut
                architecto dolore.
              </p>
            </span>
            <div className=" w-2/4 ">
              <img src={ChooseImg3} className="  w-full h-full" alt="image 1" />
            </div>
          </div>
          {/* card 4 */}
          <div className=" bg-[#F4F6FA] w-[40rem] h-72  rounded-3xl flex">
            <span className=" p-7 flex flex-col gap-10 w-2/4">
              <h1 className="text-2xl font-bold">Hassle-Free Customs Clearance</h1>
              <p className="text-md">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                dolorum tempora doloribus unde blanditiis culpa et aut
                architecto dolore.
              </p>
            </span>
            <div className=" w-2/4 ">
              <img src={ChooseImg4} className="  w-full h-full" alt="image 1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
