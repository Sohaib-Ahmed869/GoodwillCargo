import React from 'react'
import OurMissionImg from '../../assets/about/our-mission.png'

const OurMission = () => {
  return (
    <>
    <h1 className="bg-primary text-2xl sm:text-3xl md:text-4xl xl:text-6xl 2xl:text-8xl font-medium py-14 text-center">
      From Dubai to the World, We Deliver
    </h1>
    <div className="flex flex-row-reverse  justify-between   py-20">
      <div className=" flex   justify-center w-3/4 flex-col gap-10 md:px-9 items-start text-center">
        <h1 className="text-3xl  ml-20  md:text-4xl xl:text-5xl 2xl:text-7xl">
          Our Mission
        </h1>
        <p className="text-start ml-20 text-base md:text-xl xl:text-2xl 2xl:text-4xl w-full xl:w-5/6 text-[#525252] !leading-normal">
        Our mission is to simplify the complex world of logistics and customs clearance for businesses and individuals alike. We are committed to providing clear pricing, fast service, and dependable support—ensuring that your goods are delivered on time and with no hidden fees.
        </p>
      </div>
      <div className="  flex justify-end h-full p-3">
        <img src={OurMissionImg} className="w-[59rem]" alt="about image" />
      </div>
    </div>
  </>
  )
}

export default OurMission
