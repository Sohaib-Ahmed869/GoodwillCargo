import React from 'react'
import Hero from '../component/common/Hero'
import About from '../component/about/About'
import OurMission from '../component/about/OurMission'
import Choose from '../component/about/Choose'
import OurCommitment from '../component/about/OurCommitment'

const Page = () => {
  const title = "About Us"
  return (
    <div>
      <Hero title={title} />
      <About />
      <OurMission />
      {/* <Choose /> */}
      <OurCommitment />
    </div>
  )
}

export default Page
