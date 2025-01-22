import React from "react";
import { useLocation, Link } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <div
      className={`bg-black text-center p-7 -mt-16 lg:mt-0 2xl:-mt-16 text-base sm:text-lg xl:text-xl ${
        location.pathname === "/" ? "" : "null"
      } relative text-white`}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <p>
          Copyright © {new Date().getFullYear()} Goodwill Cargo LLC. All Rights
          Reserved.
        </p>
        <span className="hidden sm:inline-block">|</span>
        <Link
          to="/privacy-policy"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
