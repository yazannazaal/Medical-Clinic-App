import React, { useState } from "react";
import FooterSection from "../../components/homeComps/FooterSection";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      title: "Accepting Insurance Cards",
      content: "We accept a wide variety of insurance cards to make your experience hassle-free.",
    },
    {
      title: "Using Innovative Technology",
      content: "Our clinic uses the latest in medical technology to ensure the best care possible.",
    },
    {
      title: "Highly Qualified Doctors",
      content: "Our team consists of highly trained and experienced medical professionals.",
    },
    {
      title: "Comprehensive Services",
      content: "We offer a wide range of medical services to meet your healthcare needs.",
    },
  ];

  return (
    <div className="p-4 space-y-20">
      <div className="bg-faq bg-cover bg-no-repeat space-y-5 relative pb-36 pt-28 grid justify-items-center sm:justify-items-start px-4 sm:px-12 lg:px-44 max-h-[200px]">
        <h1 className="font-bold text-2xl sm:text-3xl text-white">FAQ</h1>
        <p className="text-white text-lg">Frequently Asked Questions</p>
      </div>
      <div className="grid grid-cols-2 h-screen">
        <div className="flex flex-col pl-20 space-y-16 w-3/4">
          <div className="flex flex-col pl-20 space-y-5">
            <h1 className="font-bold text-2xl sm:text-3xl">Why People Choose Us?</h1>
            <p>
              Our team of doctors and staff are committed to providing the best
              care for our patients. We offer a wide range of services to meet
              your needs.
            </p>
            <hr className="w-16 border-t-2 border-blue-500 my-4" />
          </div>
          <div className="flex flex-col pl-20 space-y-5">
            {faqs.map((faq, index) => (
              <div key={index} className="flex flex-col">
                <button
                  className={`rounded-md border border-gray-200 flex flex-row justify-between items-center px-5 py-3 transition-colors duration-300 ${
                    activeIndex === index ? "bg-blue-500 text-white" : "bg-blue-200"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-bold text-lg">{faq.title}</span>
                  <span className="text-3xl">{activeIndex === index ? "-" : "+"}</span>
                </button>
                {activeIndex === index && (
                  <div className="mt-4 p-4 bg-gray-50 border border-gray-100 font-semibold  rounded-md">
                    {faq.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-faq2 bg-top bg-no-repeat relative pb-32 pt-32 w-3/4 grid justify-items-center sm:justify-items-start px-4 sm:px-12 lg:px-44"></div>
      </div>
      <FooterSection/>
    </div>
  );
};

export default FAQ;
