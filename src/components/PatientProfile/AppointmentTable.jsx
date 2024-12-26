import React from 'react'

const AppointmentTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 ">
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
  )
}

export default AppointmentTable