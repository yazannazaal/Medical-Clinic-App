import React, { useState } from "react";
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
        const [message , setmessage]= useState(null);

        const handleclick =() =>{
          setmessage(!message);
        } 
        const handleclick1 =() =>{
          setmessage(!message);
        }
        const toggleMessage = (buttonId) => {
          setmessage((prevMessage) =>
            prevMessage === buttonId ? null : buttonId
          );
        };




  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetails = () => {
    setShowDetails(true);
  };
  const handleCloseDetails = () => {
    setShowDetails(false);
  };


  const [showDetails1, setShowDetails1] = useState(false);
  const handleShowDetails1 = () => {
    setShowDetails1(true);
  };
  const handleCloseDetails1 = () => {
    setShowDetails1(false);
  };

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
            <div  >
            <button onClick={() => toggleMessage("button1")} className="text-blue-500 font-semibold  hover:text-hover:bg-white hover:text-slate-900 ">{message ? "Who We Are" : "Who We Are"}</button>
            <span className="text-gray-500 hover:text-hover:bg-white hover:text-slate-900">&gt;</span>
            {message === "button1" && (
              <p className="bg-blue-100 mt-4 text-gray-700 text-lg text-center border border-gray-300 p-4 rounded">
              A team of healthcare professionals and specialists, we strive to provide comprehensive and distinguished medical services based on your health needs and well-being.
            </p>

            )}
            
            </div>
          </li>

          
          <li className="py-2 flex justify-between items-center">
          <div>
            <button  onClick={() => toggleMessage("button2")} className="text-blue-500 font-semibold  hover:text-slate-900">{message ? "Our Mission" : "Our Mission"}</button>
            <span className="text-blue-600">&gt;</span>
            {message === "button2" && (
              <p className="bg-blue-100 mt-4 text-gray-700 text-lg text-center border border-gray-300 p-4 rounded">
             Our mission is to provide comprehensive and distinguished healthcare that puts the patient's needs first. We seek to improve the quality of life for each individual through accurate diagnosis, effective treatment, and medical services based on the latest international standards.
            </p>

            )}
            </div>
          </li>
          


          
          <li className="py-2 flex justify-between items-center">
          <div>
            <button onClick={() => toggleMessage("button3")} className="text-blue-500 font-semibold  hover:text-slate-900">{message ? "Experience" : "Experience"}</button>
            <span className="text-gray-500">&gt;</span>
            {message === "button3" && (
              <p className="bg-blue-100 mt-4 text-gray-700 text-lg text-center border border-gray-300 p-4 rounded">
             We pride ourselves on our long and distinguished experience in the field of healthcare. Our team includes an elite group of doctors and specialists in various medical specialties, with a proven track record of success in providing the best diagnostic and therapeutic services.
             * Years of experience
             * Multiple specialties.
             * Modern technologies.
             * Personal care.
            </p>

            )}
            </div>
          </li>
          


          
          <li className="py-2 flex justify-between items-center">
          <div>
            <button onClick={() => toggleMessage("button4")} className="text-blue-500 font-semibold  hover:text-slate-900">{message ? "About the Party" : "About the Party"}</button>
            <span className="text-gray-500">&gt;</span>
            {message === "button4" && (
              <p className="bg-blue-100 mt-4 text-gray-700 text-lg text-center border border-gray-300 p-4 rounded">
             We are a team of doctors and specialists in various medical specialties. We work together as an integrated group to provide comprehensive healthcare. We believe that teamwork and cooperation between doctors and specialists is the key to providing effective and successful healthcare, and we always strive to achieve the best health outcomes for our patients.
            </p>

            )}
            </div>
          </li>
          

          
          <li className="py-2 flex justify-between items-center">
          <div className="relative">
      {/* الزر لعرض التفاصيل */}
      <button 
        onClick={handleShowDetails} 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Success Story
      </button>

      {/* الجزء المظلل الذي يظهر عندما تظهر التفاصيل */}
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          {/* الفقرة التي تحتوي على التفاصيل */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-full h-full max-w-3xl overflow-auto">
            <h2 className=" text-2xl font-semibold mb-4">Success Story of a Health Clinic:</h2>
            <p className="text-lg ">
               Initially, the clinic was a small office providing basic health services, with a small number of patients. The owner of the clinic, a young doctor, believed that providing high-quality health care could have a significant impact on the community. She started by providing specialized medical services alongside general health care, with a focus on providing a comfortable and friendly environment for patients.
               Over time, she developed the clinic by adding new services such as regular check-ups, physiotherapy, and psychological counseling. She also developed health awareness programs for the community online and on social media. In addition, the clinic began to cooperate with health insurance companies to expand the customer base.
               The clinic succeeded in providing excellent health care, which made patients return regularly and recommend the services to others. It was able to develop a strong reputation as a reliable health care institution. Today, the clinic has become a comprehensive health center, providing excellent medical services and contributing significantly to enhancing the health of the community.
               Lesson learned: The success story lies in providing excellent and sustainable services, focusing on the health of patients, and providing a good experience that makes them trust the clinic and return to it.
            </p>
            {/* زر الرجوع إلى الصفحة الرئيسية */}
            <button
              onClick={handleCloseDetails}
              className="bg-blue-400 mt-4 px-4 py-2 text-black rounded-lg"
            >
              Back to Home Page
            </button>
          </div>
        </div>
      )}
    </div>  
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
        
        <div className="relative">
      <button 
        onClick={handleShowDetails1} 
        className="mt-4 bg-white text-blue-600 font-semibold py-2 px-4 rounded-full">
        SEE DETAILS
      </button>

      {/* الجزء المظلل الذي يظهر عندما تظهر التفاصيل */}
      {showDetails1 && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          {/* الفقرة التي تحتوي على التفاصيل */}
          <div className=" p-6 rounded-lg shadow-lg w-full h-full max-w-3xl overflow-auto">
            <h2 className=" text-2xl font-semibold mb-4">Success Story of a Health Clinic:</h2>
            <p className="text-lg ">
            Medical, and it is staffed by a team of highly experienced specialized doctors, in addition to qualified nurses and technicians. The clinic seeks to provide high-quality health care in a comfortable and safe environment for patients, with facilities equipped for everyone's comfort, and providing integrated services including medical consultations, examinations, and physical therapy, as well as providing online appointment booking services and emergency services.
            The health clinic is located in a prime location that is easily accessible, whether by public transport or private cars. The building that the clinic occupies is modern and contemporary, and is characterized by its design that reflects a comfortable and healthy environment. The building contains several floors, with rooms designated for each type of healthcare, such as medical examinations, physiotherapy, and specialized consultations. The building also includes fully equipped facilities for people with special needs, including elevators and easy entrances. It also features spacious waiting areas equipped with comfortable furniture, in addition to the availability of sufficient parking spaces for patients. The clinic is keen on high standards of hygiene, as all areas and medical equipment are sterilized periodically to ensure the safety of patients.
            <div className="bg-blue-600 text-white rounded-lg p-4 text-center">
       
             <div className="mt-4">
             <img
             src={hosb}
             alt="Building"
             className="rounded-lg mx-auto"
          />
        </div>
        </div>

            </p>
            {/* زر الرجوع إلى الصفحة الرئيسية */}
            <button
              onClick={handleCloseDetails1}
              className="bg-blue-400 mt-4 px-4 py-2 text-black rounded-lg"
            >
              Back to Home Page
            </button>
          </div>
        </div>
      )}
    </div>  
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