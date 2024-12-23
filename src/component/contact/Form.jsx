import React from "react";
import ContactImage from "../../assets/contact/contact-img.png";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="w-full h-full relative flex flex-col  items-center py-2 lg:py-0 ">
      <h1 className="text-3xl  flex flex-col gap-10 items-center justify-center text-center  md:text-4xl xl:text-5xl 2xl:text-5xl ">
        <span>What are you waiting for</span>
        <Link
          to="tel:+97142628523"
          className="bg-primary cursor-pointer shadow-xl text-center  text-white text-[1.3rem] md::w-[14rem] py-3 xl:py-5 px-5 xl:px-10 rounded-lg"
        >
          Contact us now
        </Link>
      </h1>
      <div id="Contact" className="flex flex-col lg:flex-row mt-5 lg:mt-20">
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
        <div className="w-full flex items-center  justify-center pb-20 lg:py-10 px-10 lg:w-2/4 h-full">
          <form
            action=""
            className="flex flex-col w-full px-2 lg:px-10 gap-4 xl:gap-8 "
          >
            <div className="w-full flex flex-wrap gap-y-3 xl:gap-y-8  gap-x-12 justify-between">
              <div className="flex flex-col lg:flex-row gap-10 w-full">
                {/* first name */}
                <div className="flex flex-col w-full ">
                  <label
                    className="text-[#8D8D8D] text-base xl:text-lg cursor-pointer"
                    htmlFor="firstName"
                  >
                    FirstName <span className="text-red-500">*</span>
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
                    LastName <span className="text-red-500">*</span>
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
                    Email <span className="text-red-500">*</span>
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
                    Phone Number <span className="text-red-500">*</span>
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
                Select Job Type <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-5 xl:gap-10 flex-wrap">
                <label className="flex items-center text-base xl:text-lg gap-2">
                  <input
                    type="radio"
                    name="subject"
                    value="Air"
                    className="peer hidden"
                  />
                  <span className="w-5 h-5 border-2 bg-[#E0E0E0] border-[#E0E0E0] rounded-full peer-checked:bg-black peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:block peer-checked:after:text-center peer-checked:after:leading-4 peer-checked:after:text-xs"></span>
                  Air
                </label>
                <label className="flex items-center text-base xl:text-lg gap-2">
                  <input
                    type="radio"
                    name="subject"
                    value="Sea"
                    className="peer hidden"
                  />
                  <span className="w-5 h-5 border-2 bg-[#E0E0E0] border-[#E0E0E0] rounded-full peer-checked:bg-black peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:block peer-checked:after:text-center peer-checked:after:leading-4 peer-checked:after:text-xs"></span>
                  Sea
                </label>
                <label className="flex items-center text-base xl:text-lg gap-2">
                  <input
                    type="radio"
                    name="subject"
                    value="Custom Clearance"
                    className="peer hidden"
                  />
                  <span className="w-5 h-5 border-2 bg-[#E0E0E0] border-[#E0E0E0] rounded-full peer-checked:bg-black peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:block peer-checked:after:text-center peer-checked:after:leading-4 peer-checked:after:text-xs"></span>
                  Custom Clearance
                </label>
                <label className="flex items-center text-base xl:text-lg gap-2">
                  <input
                    type="radio"
                    name="subject"
                    value="Personal"
                    className="peer hidden"
                  />
                  <span className="w-5 h-5 border-2 bg-[#E0E0E0] border-[#E0E0E0] rounded-full peer-checked:bg-black peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:block peer-checked:after:text-center peer-checked:after:leading-4 peer-checked:after:text-xs"></span>
                  Personal
                </label>
                <label className="flex items-center text-base xl:text-lg gap-2">
                  <input
                    type="radio"
                    name="subject"
                    value="Company"
                    className="peer hidden"
                  />
                  <span className="w-5 h-5 border-2 bg-[#E0E0E0] border-[#E0E0E0] rounded-full peer-checked:bg-black peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:block peer-checked:after:text-center peer-checked:after:leading-4 peer-checked:after:text-xs"></span>
                  Company
                </label>
              </div>
            </div>

            {/* message */}
            <div className="w-full">
              <label
                htmlFor="message"
                className="text-[#8D8D8D] text-base xl:text-lg cursor-pointer"
              >
                Message <span className="text-red-500">*</span>
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
            <div className="w-full">
              <label
                htmlFor="file"
                className="text-[#8D8D8D] text-base xl:text-lg cursor-pointer"
              >
                Attach File
              </label>
              <input
                type="file"
                name="file"
                id="file"
                className="w-full py-4 px-1 text-base xl:text-lg"
              />
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
    </div>
  );
};

export default Form;
