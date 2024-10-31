import React from 'react'
import Hero from '../component/common/Hero'
import GlobeDelivery from '../component/common/GlobeDelivery'
import ServicesCard from '../component/common/ServicesCard'

const Page = () => {
    const title  = "Our Servicec"
  return (
    <div>
      <Hero title={title} />
      <ServicesCard />
      <GlobeDelivery />
    </div>
  )
}

export default Page
