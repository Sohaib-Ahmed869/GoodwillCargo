import React from 'react'
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  return (
    <div className={` bg-black text-center p-7 -mt-16 text-base sm:text-lg xl:text-2xl ${location.pathname==="/" ?"top-[47rem]":"null"} relative  text-white `}>
      
    <p>
      Copyright © {new Date().getFullYear()} Goodwill Cargo LLC. All Right Reserved.
    </p>
 
</div>
  )
}

export default Footer
