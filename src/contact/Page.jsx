import React from 'react'
import Hero from '../component/common/Hero'
import ContactForm from '../component/contact/Form'
import Choose from '../component/about/Choose'

const Page = () => {
  const title="Contact Us"
  return (
    <div>
      <Hero title={title} />
      <ContactForm />
      <Choose />
    </div>
  )
}

export default Page
