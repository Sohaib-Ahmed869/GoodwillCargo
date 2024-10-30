import React from "react";
import location from "../../assets/contact/location.png";
import phone from "../../assets/contact/phone-call.png";
import email from "../../assets/contact/email.png";

const Form = () => {
  return (
    <div className={`w-full h-full relative flex flex-col md:flex-row`}>
      {/* left side  */}
      <div className="bg-primary w-full lg:w-2/5   items-center  py-20  text-white flex flex-col  ">
      <div className="flex flex-col gap-8 xl:gap-16  w-5/6">

        <h1 className=" text-3xl xl:text-5xl font-medium">Contact Information</h1>
        <span className="flex  justify-center    gap-4">
          <img src={phone} className="w-8 h-8   " alt="phone icon" />
          <p className="text-base  w-full  xl:text-xl">+1012 3456 789</p>
        </span>
        <span className="flex  justify-center    gap-4">
          <img src={email} className="w-8 h-8   " alt="email icon" />
          <p className="text-base  w-full  xl:text-xl">demo@gmail.com</p>
        </span>
        <span className="flex  justify-center    gap-4">
          <img src={location} className=" h-8    w-8" alt="location icon" />
          <p className="text-base  w-full  xl:text-xl">
            +132 Dartmouth Street Boston Massachusetts 02156 United State
          </p>
        </span>
      </div>
      </div>

      {/* right side  */}
      <div className="  w-full flex items-center justify-center py-20   lg:w-3/5">
        <form action="" className="flex flex-col w-5/6 gap-4 xl:gap-8 ">
          <div className="w-full flex flex-wrap gap-y-3 xl:gap-y-12 gap-x-12  justify-between">
            {/* first name  */}
            <div className="flex flex-col w-full lg:w-[32rem]">
              <label className="text-base xl:text-xl" htmlFor="firstName">FirstName</label>
              <input
                className="border-b-2 outline-none w-full text-base xl:text-xl py-4 px-1"
                type="text"
                name="firstName"
                placeholder="John"
                required
                autoComplete="off"
              />
            </div>

            {/* last name  */}
            <div className="flex flex-col w-full lg:w-[32rem]">
              <label className="text-base xl:text-xl" htmlFor="lastName">LastName</label>
              <input
            className="border-b-2 outline-none w-full text-base xl:text-xl py-4 px-1"
                type="text"
                name="lastName"
                placeholder="Doe"
                required
                autoComplete="off"
              />
            </div>

            {/* email  */}
            <div className="flex flex-col w-full lg:w-[32rem]">
              <label className="text-base xl:text-xl" htmlFor="email">Email</label>
              <input
                className="border-b-2 outline-none w-full text-base xl:text-xl py-4 px-1"
                type="text"
                name="email"
                placeholder="john@gmail.com"
                required
                autoComplete="off"
              />
            </div>

            {/* phone number  */}
            <div className="flex flex-col w-full lg:w-[32rem]">
              <label className="text-base xl:text-xl" htmlFor="phone">Phone Number</label>
              <input
                className="border-b-2 outline-none w-full text-base xl:text-xl py-4 px-1"
                type="text"
                name="phone"
                placeholder="+1012 3456 789"
                required
                autoComplete="off"
              />
            </div>
          </div>

          {/* radio button for subject */}
          <div className="w-full xl:mt-8">
            <label className="block mb-4 text-base xl:text-xl font-semibold">
              Select Subject?
            </label>
            <div className="flex gap-5 xl:gap-10 flex-wrap">
              <label className="flex items-center text-base xl:text-xl gap-2">
                <input
                  type="radio"
                  name="subject"
                  value="General Inquiry 1"
                  className="peer hidden"
                />
                <span className="w-5 h-5 border-2 border-black rounded-full peer-checked:bg-black peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:block peer-checked:after:text-center peer-checked:after:leading-4 peer-checked:after:text-xs"></span>
                General Inquiry 1
              </label>
              <label className="flex items-center text-base xl:text-xl gap-2">
                <input
                  type="radio"
                  name="subject"
                  value="General Inquiry 2"
                  className="peer hidden"
                />
                <span className="w-5 h-5 border-2 border-black rounded-full peer-checked:bg-black peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:block peer-checked:after:text-center peer-checked:after:leading-4 peer-checked:after:text-xs"></span>
                General Inquiry 2
              </label>
              <label className="flex items-center text-base xl:text-xl gap-2">
                <input
                  type="radio"
                  name="subject"
                  value="General Inquiry 3"
                  className="peer hidden"
                />
                <span className="w-5 h-5 border-2 border-black rounded-full peer-checked:bg-black peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:block peer-checked:after:text-center peer-checked:after:leading-4 peer-checked:after:text-xs"></span>
                General Inquiry 3
              </label>
              <label className="flex items-center text-base xl:text-xl gap-2">
                <input
                  type="radio"
                  name="subject"
                  value="General Inquiry 4"
                  className="peer hidden"
                />
                <span className="w-5 h-5 border-2 border-black rounded-full peer-checked:bg-black peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:block peer-checked:after:text-center peer-checked:after:leading-4 peer-checked:after:text-xs"></span>
                General Inquiry 4
              </label>
            </div>
          </div>

          {/* message  */}
          <div className="w-full">
            <label htmlFor="message" className="text-base xl:text-xl">
              Message
            </label>
            <textarea
              className="border-b-2 outline-none h-14 scroll-none text-base xl:text-xl w-full py-4 px-1 overflow-hidden "
              name="message"
              placeholder="Write your message."
              required
              autoComplete="off"
            ></textarea>
          </div>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="bg-primary shadow-xl  xl:text-2xl text-white py-3 xl:py-6 px-5 xl:px-12 rounded-lg"
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
