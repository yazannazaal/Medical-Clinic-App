import React from "react";
import patientImage from "../../assets/Patient/osamaImage.JPG";
import MedicalRecord from "../../components/PatientProfile/MedicalRecord";
import AppointmentTable from "../../components/PatientProfile/AppointmentTable";
import doctorImage from "../../assets/homeAssets/doctor1.png"
import SuggestDoctorCard from "../../components/PatientProfile/SuggestDoctorCard"
const PatientProfile = () => {
  const dummyDoctors = [
    { image: doctorImage, name: "Dr. Emma Watson", specialization: "Cardiologist" },
    { image: doctorImage, name: "Dr. John Doe", specialization: "Neurologist" },
    { image: doctorImage, name: "Dr. Sarah Lee", specialization: "Dermatologist" },
    { image: doctorImage, name: "Dr. Michael Brown", specialization: "Orthopedic" },
    { image: doctorImage, name: "Dr. Olivia Davis", specialization: "Pediatrician" }
  ];

  return (
    <div className="p-10 bg-gray-100 h-full w-full space-y-10">
      <div className="flex flex-row space-x-20">
        <div className="w-4/5 h- p-5">
        <div className="flex flex-col space-y-10">
            <div className="flex flex-row space-x-8">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg w-1/4 shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={patientImage}
                  alt="Profile"
                  className="w-52 h-52 rounded-xl object-top border-2 border-gray-200"
                />
                <div className="text-center mt-4">
                  <h2 className="text-2xl font-bold text-gray-700">Jennifer Kelly</h2>
                  <p className="text-gray-500">jenniferkelly@gmail.com</p>
                  <div className="mt-4 flex justify-center space-x-8">
                    <div>
                      <p className="text-sm text-gray-500">Appointments</p>
                      <p className="font-bold text-lg text-gray-700">287</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Payment Made</p>
                      <p className="font-bold text-lg text-gray-700">$879.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 w-1/4 grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Gender</p>
                  <p className="font-bold text-gray-700">Female</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Birth Date</p>
                  <p className="font-bold text-gray-700">24 March, 1995</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">City</p>
                  <p className="font-bold text-gray-700">Essex</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Mobile Number</p>
                  <p className="font-bold text-gray-700">+44 097654798</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Zip Code</p>
                  <p className="font-bold text-gray-700">E18 4BR</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-bold text-gray-700">46 Staint Street</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Member Status</p>
                  <p className="font-bold text-gray-700">Active</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Register Date</p>
                  <p className="font-bold text-gray-700">12 Jan, 2021</p>
                </div>
              </div>
              <MedicalRecord />
            </div>
            <AppointmentTable />
          </div>
        </div>
        <div className="w-1/5 p-5 bg-white rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold">Suggested Doctors</h2>
          {dummyDoctors.map((doctor, index) => (
            <SuggestDoctorCard
              key={index}
              image={doctor.image}
              name={doctor.name}
              specialization={doctor.specialization}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;


