import React, { useRef, useState } from 'react'
import homedoctod from "../../assets/aboutAssete/homedoctod.jpg";
import FooterSection from '../../components/homeComps/FooterSection';
//items-center


const About = () => {
  return (
    <div className=" min-h-screen p-6 ">
       <h1 className="text-2xl font-bold text-gray-800 mb-4">Medical Clinc Management System</h1>
       <p className="text-gray-600 mb-6">"Your Health, Our Priority"</p>
      <div className="bg-gray-200 rounded-lg shadow-xl p-8 max-w-1xl mx-auto  min-h-screen p-6 flex flex-col  justify-center">
       
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="mb-6 md:mb-0">
            <img src={homedoctod} alt="Healthcare" className="w-full rounded-lg" />
          </div>
          <div className="space-y-4 text-left">
            <div className="bg-blue-100 p-4 rounded-lg hover:bg-blue-200 transition-colors">
              <h3 className="text-lg font-semibold text-blue-800"><i className="fas fa-calendar-alt mr-2"></i>Easy Appointments</h3>
              <p className="text-gray-700">Schedule your appointments conveniently with our user-friendly services.</p>
            </div>
            
            <div className="bg-green-100 p-4 rounded-lg hover:bg-green-200 transition-colors">
              <h3 className="text-lg font-semibold text-green-800"><i className="fas fa-notes-medical mr-2"></i>Medical History</h3>
              <p className="text-gray-700">Access your entire medical history from anywhere and at any time.</p>
            </div>

            <div className="bg-yellow-100 p-4 rounded-lg hover:bg-yellow-200 transition-colors">
              <h3 className="text-lg font-semibold text-yellow-800"><i className="fas fa-bullhorn mr-2"></i>Latest Notices</h3>
              <p className="text-gray-700">Stay informed about the latest updates from our medical center.</p>
            </div>

            <div className="bg-pink-100 p-4 rounded-lg hover:bg-pink-200 transition-colors">
              <h3 className="text-lg font-semibold text-pink-800"><i className="fas fa-user-check mr-2"></i>Doctor's Availability</h3>
              <p className="text-gray-700">Check real-time availability of doctors to plan your visit accordingly.</p>
            </div>

            <div className="bg-purple-100 p-4 rounded-lg hover:bg-purple-200 transition-colors">
              <h3 className="text-lg font-semibold text-purple-800"><i className="fas fa-heartbeat mr-2"></i>Quality Care</h3>
              <p className="text-gray-700">Receive top-notch treatment and care from our dedicated healthcare professionals.</p>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
    
  );
}

export default About