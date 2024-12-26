import React from "react";
import patientImage from "../../assets/Patient/osamaImage.JPG";
import NoteCard from "../../components/NoteCard/NoteCard";

const PatientProfileTest = () => {
  return (
    <div className="p-10 bg-red-100 h-full  space-y-10">
      <div className="grid grid-cols-2 gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[700px]">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col space-y-5">
            <div className="flex flex-col items-center">
              <img
                src={patientImage} // Replace with the actual image URL
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="text-center mt-4">
                <h2 className="text-2xl font-semibold">Jennifer Kelly</h2>
                <p className="text-gray-500">jenniferkelly@gmail.com</p>
                <div className="mt-4 flex justify-center space-x-6">
                  <div>
                    <p className="text-sm text-gray-500">Appointments</p>
                    <p className="font-semibold text-lg">287</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Payment Made</p>
                    <p className="font-semibold text-lg">$879.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="text-sm text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
                Send Message
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Gender</p>
              <p className="font-semibold">Female</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Birth Date</p>
              <p className="font-semibold">24 March, 1995</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">City</p>
              <p className="font-semibold">Essex</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Mobile Number</p>
              <p className="font-semibold">+44 097654798</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Zip Code</p>
              <p className="font-semibold">E18 4BR</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-semibold">46 Staint Street</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Member Status</p>
              <p className="font-semibold">Active</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Register Date</p>
              <p className="font-semibold">12 Jan, 2021</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Reports</h3>
            <button className="text-sm text-blue-500 hover:underline">
              + Add Reports
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                    Report Type
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                    Date
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { type: "CheckUp Result", date: "12 Mar, 2022" },
                  { type: "Medicine Prescription", date: "17 Jan, 2022" },
                  { type: "CheckUp Result", date: "21 Nov, 2021" },
                  { type: "Root Cleaning Report", date: "19 Aug, 2021" },
                ].map((report, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {report.type}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-500">
                      {report.date}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <button className="text-blue-500 hover:underline">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Appointment</h3>
          <button className="text-sm text-blue-500 hover:underline">
            + Add Appointment
          </button>
        </div>
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left font-medium">Date</th>
              <th className="px-4 py-2 text-left font-medium">
                Treatment Type
              </th>
              <th className="px-4 py-2 text-left font-medium">Booking Time</th>
              <th className="px-4 py-2 text-left font-medium">Comments</th>
              <th className="px-4 py-2 text-left font-medium">Payment</th>
              <th className="px-4 py-2 text-left font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2">13 Jan, 2022</td>
              <td className="px-4 py-2">Regular Checkup</td>
              <td className="px-4 py-2">4:00 PM</td>
              <td className="px-4 py-2">No Comments</td>
              <td className="px-4 py-2 text-red-500">Pending</td>
              <td className="px-4 py-2 text-blue-500 hover:underline">Edit</td>
            </tr>
            <tr>
              <td className="px-4 py-2">21 Nov, 2021</td>
              <td className="px-4 py-2">Bleaching</td>
              <td className="px-4 py-2">1:00 PM</td>
              <td className="px-4 py-2">See Comments</td>
              <td className="px-4 py-2 text-green-500">Complete</td>
              <td className="px-4 py-2 text-blue-500 hover:underline">Edit</td>
            </tr>
            <tr>
              <td className="px-4 py-2">21 Nov, 2021</td>
              <td className="px-4 py-2">Bleaching</td>
              <td className="px-4 py-2">1:00 PM</td>
              <td className="px-4 py-2">See Comments</td>
              <td className="px-4 py-2 text-green-500">Complete</td>
              <td className="px-4 py-2 text-blue-500 hover:underline">Edit</td>
            </tr>
            <tr>
              <td className="px-4 py-2">21 Nov, 2021</td>
              <td className="px-4 py-2">Bleaching</td>
              <td className="px-4 py-2">1:00 PM</td>
              <td className="px-4 py-2">See Comments</td>
              <td className="px-4 py-2 text-green-500">Complete</td>
              <td className="px-4 py-2 text-blue-500 hover:underline">Edit</td>
            </tr>
            <tr>
              <td className="px-4 py-2">21 Nov, 2021</td>
              <td className="px-4 py-2">Bleaching</td>
              <td className="px-4 py-2">1:00 PM</td>
              <td className="px-4 py-2">See Comments</td>
              <td className="px-4 py-2 text-green-500">Complete</td>
              <td className="px-4 py-2 text-blue-500 hover:underline">Edit</td>
            </tr>
            <tr>
              <td className="px-4 py-2">21 Nov, 2021</td>
              <td className="px-4 py-2">Bleaching</td>
              <td className="px-4 py-2">1:00 PM</td>
              <td className="px-4 py-2">See Comments</td>
              <td className="px-4 py-2 text-green-500">Complete</td>
              <td className="px-4 py-2 text-blue-500 hover:underline">Edit</td>
            </tr>
            <tr>
              <td className="px-4 py-2">21 Nov, 2021</td>
              <td className="px-4 py-2">Bleaching</td>
              <td className="px-4 py-2">1:00 PM</td>
              <td className="px-4 py-2">See Comments</td>
              <td className="px-4 py-2 text-green-500">Complete</td>
              <td className="px-4 py-2 text-blue-500 hover:underline">Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientProfileTest;
