import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import home from "../../assets/navbar/home.png";
import contact from "../../assets/navbar/contact.png";
import about from "../../assets/navbar/about.png";
import services from "../../assets/navbar/service.png";
import callNow from "../../assets/navbar/callNow.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="absolute z-20 flex justify-between items-center w-full h-44 px-12 xl:px-24">
      {/* Left part of navbar with logo */}
      <div className="text-white flex items-center">
        <Link to="/">
          <h1 className="text-xl xl:text-2xl font-semibold">Goodwill Cargo</h1>
          <p className="text-[.3rem] xl:text-[.4rem] tracking-[2.4px]">
            CLEARING AND FORWARDING CO. LLC
          </p>
        </Link>
      </div>

      {/* Center part of navbar */}
      <div
        className={`hidden lg:flex rounded-full items-center justify-center py-4 px-14 gap-14 ${
          location.pathname === "/contact"
            ? "bg-primary bg-opacity-100"
            : "bg-white bg-opacity-10"
        } hover:bg-opacity-35 hover:scale-105 transition-transform duration-500`}
      >
        <Link to="/">
          <img
            src={home}
            className="w-9 xl:w-12 hover:scale-110 transition-transform duration-200"
            alt="home-navbar-icon"
          />
        </Link>
        <Link to="/about">
          <img
            src={about}
            className="w-9 xl:w-12 hover:scale-110 transition-transform duration-200"
            alt="about-navbar-icon"
          />
        </Link>
        <Link to="/service">
          <img
            src={services}
            className="w-9 xl:w-12 hover:scale-110 transition-transform duration-200"
            alt="services-navbar-icon"
          />
        </Link>
        <Link to="/contact">
          <img
            src={contact}
            className="w-9 xl:w-12 hover:scale-110 transition-transform duration-200"
            alt="contact-navbar-icon"
          />
        </Link>
      </div>

      {/* Right part of navbar with Call Now button and Hamburger */}
      <div className="flex items-center gap-4">
        {/* Call Now button */}
        <div
          className={`hidden lg:flex border ${
            location.pathname === "/contact"
              ? "border-primary border-opacity-100 border-2"
              : "border-white border-opacity-30"
          } px-6 xl:px-6 py-3 xl:py-4 rounded-2xl gap-2 hover:scale-110 transition-transform duration-200 cursor-pointer`}
        >
          <h1 className="text-white tracking-wider text-md xl:text-xl">
            Call Now
          </h1>
          <img src={callNow} alt="call now icon" />
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden ">
          {open ? (
            null
          ) : (
            <GiHamburgerMenu
              onClick={handleToggle}
              className="text-white text-2xl z-40"
            />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 -right-0 w-1/4 pt-20 h-screen shadow-2xl bg-primary bg-opacity-50 flex flex-col items-center lg:hidden transition-all duration-500 ease-in-out ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
         <ImCross
              onClick={handleToggle}
              className="text-white text-2xl z-40"
            />
        <Link to="/" onClick={() => setOpen(false)}>
          <img
            src={home}
            className="w-9 xl:w-12 hover:scale-110 transition-transform duration-200 my-4"
            alt="home-navbar-icon"
          />
        </Link>
        <Link to="/about" onClick={() => setOpen(false)}>
          <img
            src={about}
            className="w-9 xl:w-12 hover:scale-110 transition-transform duration-200 my-4"
            alt="about-navbar-icon"
          />
        </Link>
        <Link to="/service" onClick={() => setOpen(false)}>
          <img
            src={services}
            className="w-9 xl:w-12 hover:scale-110 transition-transform duration-200 my-4"
            alt="services-navbar-icon"
          />
        </Link>
        <Link to="/contact" onClick={() => setOpen(false)}>
          <img
            src={contact}
            className="w-9 xl:w-12 hover:scale-110 transition-transform duration-200 my-4"
            alt="contact-navbar-icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
