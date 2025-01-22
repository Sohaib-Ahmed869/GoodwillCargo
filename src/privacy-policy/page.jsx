import React from "react";
import herobg from "../assets/about/hero-bg.png";
import { Shield } from "lucide-react";

const Hero = ({ title }) => {
  return (
    <div className="w-full relative">
      <div
        className="dark:text-white w-full h-[28vh] lg:h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${herobg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative flex flex-col items-center justify-center w-full mt-20 h-[28vh] lg:h-[40vh]">
          <div className="flex items-center justify-center flex-col gap-5">
            <p className="font-semibold text-base md:text-xl text-white text-center xl:text-2xl 2xl:text-2xl px-4">
              Trusted Name in Customs Clearance and Logistics in Dubai Since
              1976.
            </p>
            <h1 className="font-semibold text-3xl md:text-4xl xl:text-6xl 2xl:text-6xl w-full text-center !leading-normal">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <div className="w-full">
      <Hero title="Privacy Policy" />

      <div className=" mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-b from-orange-400 to-orange-600 p-8 flex items-center gap-4">
            <Shield className="w-12 h-12 text-white" />
            <div>
              <h2 className="text-white text-2xl md:text-3xl font-semibold">
                Data Protection & Privacy
              </h2>
              <p className="text-blue-100 mt-2">
                Your trust is our top priority
              </p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-8 space-y-5">
            {/* Introduction */}
            <section className="border-b border-gray-100 pb-2">
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
                Introduction
              </h3>
              <p className="text-gray-600">
                Goodwill Clearing and Forwarding Co. L.L.C operates UAE Couriers
                (uae-couriers.com). This privacy policy explains how we collect,
                use, and protect your personal information when you use our
                services.
              </p>
              <p className="text-gray-600 mt-2">
                By using our service, you agree to the collection and use of
                information in accordance with this policy.
              </p>
            </section>

            {/* Information Collection */}
            <section className="border-b border-gray-100 pb-2">
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
                Information We Collect
              </h3>
              <p className="text-gray-600 mb-2">
                We collect the following types of information to provide and
                improve our services:
              </p>
              <div className="bg-gray-50 rounded-xl p-2">
                <ul className="space-y-1">
                  {[
                    "Full Name",
                    "Email Address",
                    "Phone Number",
                    "Shipping and Billing Address",
                    "Delivery Details",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Data Usage */}
            <section className="border-b border-gray-100 pb-2">
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
                How We Use Your Information
              </h3>
              <div className="bg-gray-50 rounded-xl p-2">
                <ul className="space-y-3">
                  {[
                    "Providing and maintaining our courier and logistics services",
                    "Processing and delivering your shipments",
                    "Communicating with you about your shipments and services",
                    "Sending service updates and administrative messages",
                    "Improving our services and customer experience",
                    "Ensuring compliance with customs and regulatory requirements",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Data Protection */}
            <section className="border-b border-gray-100 pb-2">
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
                Data Protection Measures
              </h3>
              <p className="text-gray-600 mb-2">
                We implement comprehensive security measures to protect your
                data:
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  {
                    title: "Secure Storage",
                    desc: "Advanced encryption and secure data storage systems",
                  },
                  {
                    title: "Limited Access",
                    desc: "Strictly controlled access to personal information",
                  },
                  {
                    title: "Regular Updates",
                    desc: "Continuous security assessments and improvements",
                  },
                  {
                    title: "Staff Training",
                    desc: "Ongoing privacy and security training for all staff",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Your Rights */}
            <section className="border-b border-gray-100 pb-2">
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
                Your Rights
              </h3>
              <div className="bg-gray-50 rounded-xl p-2">
                <ul className="space-y-1">
                  {[
                    "Access your personal information",
                    "Correct inaccurate information",
                    "Request deletion of your information",
                    "Object to certain processing of your information",
                    "Receive a copy of your information",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Contact Section */}
            <section>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-4">
                Contact Us
              </h3>
              <div className="bg-orange-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us at our office or through our
                  website contact form.
                </p>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6 text-center">
            <p className="text-sm text-gray-600">Last updated: January 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
