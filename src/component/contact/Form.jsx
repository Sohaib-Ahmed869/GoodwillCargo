import React from "react";
import location from "../../assets/contact/location.png";
import phone from "../../assets/contact/phone-call.png";
import agentCall from "../../assets/contact/direct-agent.png";
import ContactImage from "../../assets/contact/contact-img.png";

const Form = () => {
  return (
    <div className="w-full h-full relative flex flex-col lg:flex-row items-center py-10 lg:py-0 ">
      {/* left side  */}
      <div className="w-full lg:w-2/4 h-full hidden lg:flex items-center justify-center   text-white">
        <div className="lg:w-full h-full flex justify-center items-center">
          <img
            src={ContactImage}
            alt="contact form image"
            className="w-full h-full rounded-xl lg:rounded-none object-cover"
          />
        </div>
      </div>

      {/* right side  */}
      <div className="w-full flex items-center  justify-center py-20 lg:py-10   lg:w-2/4 h-full">
        <form action="" className="flex flex-col w-full px-10 gap-4 xl:gap-8 ">
          <div className="w-full flex flex-wrap gap-y-3 xl:gap-y-8  gap-x-12 justify-between">
            <div  className="flex flex-col lg:flex-row gap-10 w-full">

            
            {/* first name */}
            <div className="flex flex-col w-full ">
              <label
                className="text-[#8D8D8D] text-base xl:text-lg cursor-pointer"
                htmlFor="firstName"
              >
                FirstName
              </label>
              <input
                className="border-b-2 outline-none w-full text-base xl:text-lg py-4 px-1"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="John"
                required
                autoComplete="off"
              />
            </div>

            {/* last name */}
            <div className="flex flex-col w-full ">
              <label
                className="text-base xl:text-lg cursor-pointer"
                htmlFor="lastName"
              >
                LastName
              </label>
              <input
                className="border-b-2 outline-none w-full text-base xl:text-lg py-4 px-1"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Doe"
                required
                autoComplete="off"
              />
            </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 w-full">

            
            {/* email */}
            <div className="flex flex-col w-full">
              <label
                className="text-[#8D8D8D] text-base xl:text-lg cursor-pointer"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border-b-2 outline-none w-full text-base xl:text-lg py-4 px-1"
                type="text"
                name="email"
                id="email"
                placeholder="john@gmail.com"
                required
                autoComplete="off"
              />
            </div>

            {/* phone number */}
            <div className="flex flex-col w-full">
              <label
                className="text-base xl:text-lg cursor-pointer"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="border-b-2 outline-none w-full text-base xl:text-lg py-4 px-1"
                type="text"
                name="phone"
                id="phone"
                placeholder="+1012 3456 789"
                required
                autoComplete="off"
              />
            </div>
            </div>
          </div>

          {/* radio button for subject */}
          <div className="w-full xl:mt-8">
            <label className="block mb-4 text-base xl:text-lg font-semibold">
              Select Subject?
            </label>
            <div className="flex gap-5 xl:gap-10 flex-wrap">
              <label className="flex items-center text-base xl:text-lg gap-2">
                <input
                  type="radio"
                  name="subject"
                  value="General Inquiry 1"
                  className="peer hidden"
                />
                <span className="w-5 h-5 border-2 bg-[#E0E0E0] border-[#E0E0E0] rounded-full peer-checked:bg-black peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:block peer-checked:after:text-center peer-checked:after:leading-4 peer-checked:after:text-xs"></span>
                General Inquiry 1
              </label>
              <label className="flex items-center text-base xl:text-lg gap-2">
                <input
                  type="radio"
                  name="subject"
                  value="General Inquiry 2"
                  className="peer hidden"
                />
                <span className="w-5 h-5 border-2 bg-[#E0E0E0] border-[#E0E0E0] rounded-full peer-checked:bg-black peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:block peer-checked:after:text-center peer-checked:after:leading-4 peer-checked:after:text-xs"></span>
                General Inquiry 2
              </label>
              <label className="flex items-center text-base xl:text-lg gap-2">
                <input
                  type="radio"
                  name="subject"
                  value="General Inquiry 3"
                  className="peer hidden"
                />
                <span className="w-5 h-5 border-2 bg-[#E0E0E0] border-[#E0E0E0] rounded-full peer-checked:bg-black peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:block peer-checked:after:text-center peer-checked:after:leading-4 peer-checked:after:text-xs"></span>
                General Inquiry 3
              </label>
              <label className="flex items-center text-base xl:text-lg gap-2">
                <input
                  type="radio"
                  name="subject"
                  value="General Inquiry 4"
                  className="peer hidden"
                />
                <span className="w-5 h-5 border-2 bg-[#E0E0E0] border-[#E0E0E0] rounded-full peer-checked:bg-black peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:block peer-checked:after:text-center peer-checked:after:leading-4 peer-checked:after:text-xs"></span>
                General Inquiry 4
              </label>
            </div>
          </div>

          {/* message */}
          <div className="w-full">
            <label
              htmlFor="message"
              className="text-[#8D8D8D] text-base xl:text-lg cursor-pointer"
            >
              Message
            </label>
            <textarea
              className="border-b-2 outline-none h-14 scroll-none text-base xl:text-lg w-full py-4 px-1 overflow-hidden"
              name="message"
              id="message"
              placeholder="Write your message."
              required
              autoComplete="off"
            ></textarea>
          </div>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="bg-primary shadow-xl xl:text-xl text-white py-3 xl:py-5 px-5 xl:px-10 rounded-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
