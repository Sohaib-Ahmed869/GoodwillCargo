import React from "react";
import location from "../../assets/contact/location.png";
import phone from "../../assets/contact/phone-call.png";
import email from "../../assets/contact/email.png";

const Form = () => {
  return (
    <div className={`w-full h-full relative flex`}>
      {/* left side  */}
      <div className="bg-primary w-2/5 p-36 text-white flex flex-col gap-16">
        <h1 className="text-4xl font-semibold">Contact Information</h1>
        <span className="flex items-center gap-4">
          <img src={phone} className="w-8" alt="phone icon" />
          <p className="text-xl">+1012 3456 789</p>
        </span>
        <span className="flex items-center gap-4">
          <img src={email} className="w-8" alt="email icon" />
          <p className="text-xl">demo@gmail.com</p>
        </span>
        <span className="flex items-center gap-4">
          <img src={location} className="w-8" alt="location icon" />
          <p className="text-xl">
            +132 Dartmouth Street Boston Massachusetts 02156 United State
          </p>
        </span>
      </div>

      {/* right side  */}
      <div className="p-36 w-3/5">
        <form action="" className="flex flex-wrap w-full gap-8 justify-between">
          <div className="w-full flex flex-wrap gap-y-12 gap-x-12">
            {/* first name  */}
            <div className="flex flex-col w-[32rem]">
              <label htmlFor="firstName">FirstName</label>
              <input
                className="border-b-2 outline-none w-full py-4 px-1"
                type="text"
                name="firstName"
                placeholder="John"
                required
                autoComplete="off"
              />
            </div>

            {/* last name  */}
            <div className="flex flex-col w-[32rem]">
              <label htmlFor="lastName">LastName</label>
              <input
                className="border-b-2 outline-none w-full py-4 px-1"
                type="text"
                name="lastName"
                placeholder="Doe"
                required
                autoComplete="off"
              />
            </div>

            {/* email  */}
            <div className="flex flex-col w-[32rem]">
              <label htmlFor="email">Email</label>
              <input
                className="border-b-2 outline-none w-full py-4 px-1"
                type="text"
                name="email"
                placeholder="john@gmail.com"
                required
                autoComplete="off"
              />
            </div>

            {/* phone number  */}
            <div className="flex flex-col w-[32rem]">
              <label htmlFor="phone">Phone Number</label>
              <input
                className="border-b-2 outline-none w-full py-4 px-1"
                type="text"
                name="phone"
                placeholder="+1012 3456 789"
                required
                autoComplete="off"
              />
            </div>
          </div>

          {/* radio button for subject */}
          <div className="w-full mt-8">
            <label className="block mb-4 text-lg font-semibold">
              Select Subject?
            </label>
            <div className="flex gap-4 flex-wrap">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="subject"
                  value="General Inquiry 1"
                  className="peer hidden"
                />
                <span className="w-5 h-5 border-2 border-black rounded-full peer-checked:bg-black peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:block peer-checked:after:text-center peer-checked:after:leading-4 peer-checked:after:text-xs"></span>
                General Inquiry 1
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="subject"
                  value="General Inquiry 2"
                  className="peer hidden"
                />
                <span className="w-5 h-5 border-2 border-black rounded-full peer-checked:bg-black peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:block peer-checked:after:text-center peer-checked:after:leading-4 peer-checked:after:text-xs"></span>
                General Inquiry 2
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="subject"
                  value="General Inquiry 3"
                  className="peer hidden"
                />
                <span className="w-5 h-5 border-2 border-black rounded-full peer-checked:bg-black peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:block peer-checked:after:text-center peer-checked:after:leading-4 peer-checked:after:text-xs"></span>
                General Inquiry 3
              </label>
              <label className="flex items-center gap-2">
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
            <label htmlFor="message" className="block mb-4 text-lg">
              Message
            </label>
            <textarea
              className="border-b-2 outline-none h-14 w-full py-4 px-1"
              name="message"
              placeholder="Write your message."
              required
              autoComplete="off"
            ></textarea>
          </div>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="bg-primary shadow-xl text-2xl text-white py-6 px-12 rounded-lg"
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
