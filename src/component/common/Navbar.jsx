import React from "react";
import { Link, useLocation } from "react-router-dom";
import home from "../../assets/navbar/home.png";
import contact from "../../assets/navbar/contact.png";
import about from "../../assets/navbar/about.png";
import services from "../../assets/navbar/service.png";
import callNow from "../../assets/navbar/callNow.png";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="absolute z-20 flex justify-between items-center w-full h-44  px-24">
      <div className="text-white">
        <Link to="/">
          <h1 className="text-3xl font-semibold">Goodwill Cargo</h1>
          <p className="text-[.5rem] tracking-[2.4px]">
            CLEARING AND FORWARDING CO. LLC
          </p>
        </Link>
      </div>
      <div
        className={` flex rounded-full items-center justify-center py-4 px-14 gap-14 ${
          location.pathname === "/contact"
            ? "bg-primary bg-opacity-100  "
            : "bg-white bg-opacity-10   "
        } hover:bg-opacity-35 hover:scale-105 transition-transform duration-500`}
      >
        <Link to="/">
          <img
            src={home}
            className="w-16 hover:scale-110 transition-transform duration-200"
            alt="home-navbar-icon"
          />
        </Link>
        <Link to="/about">
          <img
            src={about}
            className="w-16 hover:scale-110 transition-transform duration-200"
            alt="about-navbar-icon"
          />
        </Link>
        <Link to="/service">
          <img
            src={services}
            className="w-16 hover:scale-110 transition-transform duration-200"
            alt="services-navbar-icon"
          />
        </Link>
        <Link to="/contact">
          <img
            src={contact}
            className="w-16 hover:scale-110 transition-transform duration-200"
            alt="contact-navbar-icon"
          />
        </Link>
      </div>
      <div
        className={`flex border   ${
          location.pathname === "/contact"
            ? "border-primary border-opacity-100  "
            : "border-white border-opacity-30 "
        } border-opacity-30 px-9 py-5 rounded-2xl gap-2 hover:scale-110 transition-transform duration-200 cursor-pointer`}
      >
        <h1 className="text-white tracking-wider text-2xl">Call Now</h1>
        <img src={callNow} alt="call now icon" />
      </div>
    </div>
  );
};

export default Navbar;
