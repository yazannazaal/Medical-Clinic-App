import React from "react";
import { Link } from "react-router-dom";
import ProfessionalCareSection from "../../components/homeComps/ProfessionalCareSection";
import hd from "../../assets/aboutAssete/hd.jpg";
import doc from "../../assets/aboutAssete/doc.jpg";
import doctosAbout from "../../assets/aboutAssete/doctosAbout.jpg";
import hosb from "../../assets/aboutAssete/hosb.jpg";



import About from "../../components/aboutComps/About";

const Aboutt = () => {
    
        const solutions = [
          {
            title: "Choose a Specialist",
            description: "Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care.",
          },
          {
            title: "Make a Schedule",
            description: "Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care.",
          },
          {
            title: "Get Your Solutions",
            description: "Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health.",
          },
        ];
  return (
    
    <div className="bg-gray-100">

{/* Header Section */}
<div className="relative w-full h-[40vh] overflow-hidden">
    
      <img
                src={doctosAbout}
                alt="Hospital"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
      <div className="absolute bottom-20 left-8 text-left">
        <h1 className=" font-bold text-gray-500 text-4xl md:text-6xl font-light md:leading-6">
        About Us
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
          
            
          </div>
          <div>
            <Link to="/">
        <p className="mt-12 border border-gray-900 px-12 py-3 text-gray-800 bg-inherit hover:bg-white hover:text-slate-900 rounded-3xl text-lg transition-all duration-300 ease-in-out font-bold">
        About {">"} Home</p>
      </Link>
          </div>
        </div>
      </div>
    </div>
    
      
      

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 ">
        <div className="grid grid-cols-12 gap-8">

          {/* Left Section */}
          <div className="col-span-4 bg-white shadow-lg p-6 rounded-lg">
            <div className="max-w-xs mx-auto p-4 space-y-6">
      {/* Navigation Section */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <ul className="divide-y divide-gray-200">
          <li className="py-2 flex justify-between items-center">
            <button className="text-blue-500 font-semibold  hover:text-hover:bg-white hover:text-slate-900">Who We Are</button>
            <span className="text-gray-500">&gt;</span>
          </li>
          <li className="py-2 flex justify-between items-center">
            <button className="text-blue-500 font-semibold  hover:text-slate-900">Our Mission</button>
            <span className="text-blue-600">&gt;</span>
          </li>
          <li className="py-2 flex justify-between items-center">
            <button className="text-blue-500 font-semibold  hover:text-slate-900">Experience</button>
            <span className="text-gray-500">&gt;</span>
          </li>
          <li className="py-2 flex justify-between items-center">
            <button className="text-blue-500 font-semibold  hover:text-slate-900">About the Party</button>
            <span className="text-gray-500">&gt;</span>
          </li>
          <li className="py-2 flex justify-between items-center">
            <button className="text-blue-500 font-semibold  hover:text-slate-900 ">Success Story</button>
            <span className="text-gray-500">&gt;</span>
          </li>
        </ul>
      </div>


           {/* Emergency Cases Section */}
           <div className="bg-white shadow-md rounded-lg p-4 text-center">
        <div className="flex justify-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m-1-4h4a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2h4z"
            />
          </svg>
        </div>
        <p className="text-gray-800 font-semibold">Emergency Cases</p>
        <p className="text-gray-600">2-800-700-6200</p>
      </div>



      {/* Offer Section */}
      <div className="bg-blue-600 text-white rounded-lg p-4 text-center">
        <p className="text-3xl font-bold">15% Off</p>
        <p className="text-sm">Limited Time Offer!</p>
        <div className="mt-4">
          <img
            src={hosb}
            alt="Building"
            className="rounded-lg mx-auto"
          />
        </div>
        <button className="mt-4 bg-white text-blue-600 font-semibold py-2 px-4 rounded-full">
          SEE DETAILS
        </button>
      </div>
    </div>
    </div>

          {/* Right Section */}
          <div className="col-span-8 bg-white shadow-lg p-6 rounded-lg ">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Let's get a general overview of this medical clinic.
            </h2>
            <p className="text-gray-600 mb-6">
            Welcome to the medical clinic, where healthcare is accessible and personalized. Our expert doctors provide specialized consultations and services, putting your health first. Join us on this journey towards a healthier life.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6 ">
            <img
                src={doc}
                alt="Hospital"
                className="rounded-lg "
              />
              <img
                src={hd}
                alt="Operations"
                className="rounded-lg"
              />
            </div>
            



            <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Solutions</h2>
      <div className="space-y-6">
        {solutions.map((solution, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="mt-1">
              <svg
                
                className="h-6 w-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {solution.title}
              </h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
          </div>
        </div>




        {/* Specialist Doctors Section */}
        <div className="mt-10">
        <ProfessionalCareSection />
        <About />
        
        </div>
      </div>
    </div>
  );
};

export default Aboutt;