import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import home from "../../assets/navbar/home.png";
import contact from "../../assets/navbar/contact.png";
import about from "../../assets/navbar/about.png";
import services from "../../assets/navbar/service.png";
import callNow from "../../assets/navbar/callNow.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Logo from "../../assets/navLogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);

  const handleToggle = () => {
    setOpen(!open);
  };

  // Close the navbar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]);

  return (
    <div className="absolute z-20 flex justify-between items-center w-full h-44 px-12 xl:px-24">
      {/* Left part of navbar with logo */}
      <div className="text-white flex items-center">
        <Link to="/">
          <img src={Logo} className="w-40 md:w-64" alt="logo" />
          {/* <h1 className="text-xl xl:text-2xl font-semibold">Goodwill Cargo</h1> */}
          {/* <p className="text-[.3rem] xl:text-[.4rem] tracking-[2.4px]">
            CLEARING AND FORWARDING CO. LLC
          </p> */}
        </Link>
      </div>

      {/* Center part of navbar */}
      <div
        className={`hidden lg:flex rounded-full items-center justify-center py-4 px-14 gap-14 ${
          location.pathname === "/"
            ? "bg-white bg-opacity-10"
            : "bg-primary bg-opacity-100"
        } hover:bg-opacity-35 hover:scale-105 transition-transform duration-500`}
      >
        <Link to="/">
          <img
            src={home}
            className="w-9 xl:w-10 2xl:w-12 hover:scale-110 transition-transform duration-200"
            alt="home-navbar-icon"
          />
        </Link>
        <Link to="/about">
          <img
            src={about}
            className="w-9 xl:w-10 2xl:w-12 hover:scale-110 transition-transform duration-200"
            alt="about-navbar-icon"
          />
        </Link>
        <Link to="/service">
          <img
            src={services}
            className="w-9 xl:w-10 2xl:w-12 hover:scale-110 transition-transform duration-200"
            alt="services-navbar-icon"
          />
        </Link>
        <Link to="/contact">
          <img
            src={contact}
            className="w-9 xl:w-10 2xl:w-12 hover:scale-110 transition-transform duration-200"
            alt="contact-navbar-icon"
          />
        </Link>
      </div>

      {/* Right part of navbar with Call Now button and Hamburger */}
      <div className="flex items-center gap-4">
        {/* Call Now button */}
        <Link to="tel:+97142628523">
          <div
            className={`hidden lg:flex border ${
              location.pathname === "/"
                ? "border-white border-opacity-30"
                : "border-primary border-opacity-100 border-2"
            } px-6 xl:px-6 py-3 xl:py-4 rounded-2xl gap-2 hover:scale-110 transition-transform duration-200 cursor-pointer`}
          >
            <h1 className="text-white tracking-wider text-md 2xl:text-xl">
              Call Now
            </h1>
            <img src={callNow} alt="call now icon" />
          </div>
        </Link>

        {/* Hamburger menu for mobile */}
        <div
          className={`lg:hidden  transition-opacity mr-0 duration-500 ease-in-out ${
            open ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {!open && (
            <GiHamburgerMenu
              onClick={handleToggle}
              className="text-white text-2xl z-40"
            />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={navbarRef}
        className={`fixed top-0 right-0 w-1/4 pt-20 h-screen shadow-2xl bg-primary bg-opacity-50 flex flex-col items-center lg:hidden transition-all duration-500 ease-in-out ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ImCross
          onClick={handleToggle}
          className="text-white text-2xl z-40 mb-5"
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
        <Link to="tel:+97142628523">
          <div className="flex lg:hidden border border-white border-opacity-100 p-3 rounded-full gap-2 hover:scale-110 transition-transform duration-200 cursor-pointer">
            <img src={callNow} className="w-7 " alt="call now icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
