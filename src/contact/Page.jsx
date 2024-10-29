import React from 'react'
import Hero from '../component/common/Hero'
import ContactForm from '../component/contact/Form'

const Page = () => {
  const title="Contact Us"
  return (
    <div>
      <Hero title={title} />
      <ContactForm />
    </div>
  )
}

export default Page
