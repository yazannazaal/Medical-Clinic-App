import React from 'react';
import DoctorImage from "../../assets/homeAssets/doctor1.png"
const DoctorProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="col-span-1 text-center md:text-left">
            <img
              src={DoctorImage}
              alt="Dr. Zinia Zara"
              className="w-48 h-48 rounded-full mx-auto md:mx-0 mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-700">Dr. Zinia Zara</h2>
            <p className="text-blue-500">Cardiology</p>
            <p className="text-gray-500">MBBS, M.D of Medicine</p>

            <div className="mt-4 space-y-2">
              <div>
                <span className="font-semibold">Phone:</span> +123 1000-567
              </div>
              <div>
                <span className="font-semibold">Office:</span> +8800-567
              </div>
              <div>
                <span className="font-semibold">Email:</span> ziniazara@gmail.com
              </div>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-blue-500 hover:underline">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-blue-500 hover:underline">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-blue-500 hover:underline">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="col-span-2">
            <h3 className="text-lg font-bold mb-4">About Me:</h3>
            <p className="text-gray-600 mb-6">
              Efficiently myocardinate markets-driven innovation via open-source alignments. Dramatically
              engage high-performance expertise impactful supply chains in focused results.
            </p>

            {/* Education */}
            <h3 className="text-lg font-bold mb-4">Education:</h3>
            <div className="border border-gray-300 rounded-md">
              <table className="w-full text-left text-gray-600">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-2">Year</th>
                    <th className="p-2">Degree</th>
                    <th className="p-2">Institute</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">2006</td>
                    <td className="p-2">MBBS, MD</td>
                    <td className="p-2">University of Wyoming</td>
                  </tr>
                  <tr>
                    <td className="p-2">2010</td>
                    <td className="p-2">M.D of Medicine</td>
                    <td className="p-2">Netherland Medical College</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Experience */}
            <h3 className="text-lg font-bold mt-6 mb-4">Experience:</h3>
            <div className="border border-gray-300 rounded-md">
              <table className="w-full text-left text-gray-600">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-2">Year</th>
                    <th className="p-2">Department</th>
                    <th className="p-2">Position</th>
                    <th className="p-2">Hospital</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">2007-2008</td>
                    <td className="p-2">MBBS, MD</td>
                    <td className="p-2">Senior Prof.</td>
                    <td className="p-2">Midtown Medical Clinic</td>
                  </tr>
                  <tr>
                    <td className="p-2">2010-2018</td>
                    <td className="p-2">M.D of Medicine</td>
                    <td className="p-2">Associate Prof.</td>
                    <td className="p-2">Netherland Medical College</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Appointment Section */}
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-4">Appointment Schedules:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { day: 'Saturday', time: '10:00 AM - 12:00 PM' },
              { day: 'Monday', time: '05:00 PM - 09:00 PM' },
              { day: 'Wednesday', time: '07:00 PM - 10:00 PM' },
              { day: 'Friday', time: '08:00 PM - 11:00 PM' },
            ].map((schedule, index) => (
              <div
                key={index}
                className="p-4 border border-gray-300 rounded-lg flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{schedule.day}</p>
                  <p className="text-gray-600">{schedule.time}</p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
