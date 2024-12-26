import React from 'react'

const MedicalRecord = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-2/4">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">Medical Records</h3>

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
  )
}

export default MedicalRecord