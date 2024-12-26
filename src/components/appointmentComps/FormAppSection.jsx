import { HiPhone } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { DevTool } from "@hookform/devtools";

const FormAppSection = () => {
  const form = useForm();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const [selectedDepartment, setSelectedDepartment] = useState("");

  const departments = [
    { name: "Cardiology", doctors: ["Dr. Heart A", "Dr. Heart B"] },
    { name: "Ophthalmology", doctors: ["Dr. Eye A", "Dr. Eye B"] },
    { name: "Gynecology", doctors: ["Dr. Women A", "Dr. Women B"] },
    { name: "Dental Care", doctors: ["Dr. Tooth A", "Dr. Tooth B"] },
    { name: "Plastic Surgery", doctors: ["Dr. Skin A", "Dr. Skin B"] },
    { name: "Pediatrics", doctors: ["Dr. Child A", "Dr. Child B"] },
    { name: "Gastrology", doctors: ["Dr. Stomach A", "Dr. Stomach B"] },
    { name: "Neurology", doctors: ["Dr. Brain A", "Dr. Brain B"] },
  ];

  const onDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };

  const filteredDoctors =
    departments.find((dept) => dept.name === selectedDepartment)?.doctors || [];

  return (
    <section className="flex flex-col md:flex-row justify-between items-start px-10 py-6">
      <div className="w-full md:w-1/3 mt-5 p-4 flex flex-col items-start justify-end">
        <div className="flex justify-center mb-4">
          <HiPhone className="text-5xl text-slate-700" />
        </div>
        <h3 className="text-2xl text-[#222] font-semibold">
          Call for an Emergency Service!
        </h3>
        <p className="text-5xl text-[#223a66] font-extrabold mt-2">
          +84 789 1256
        </p>
      </div>

      <div className="w-full md:w-2/3 p-4">
        <h2 className="text-4xl font-bold mb-4 text-[#223a66]">
          Book an Appointment
        </h2>
        <p className="text-lg text-[#6F8BA4] mb-4">
          Please fill out the form below to schedule an appointment with one of
          our doctors.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <input
              {...register("fullName", { required: "Full name is required" })}
              placeholder="Full Name"
              type="text"
              className="w-full p-3 border rounded-md mt-2"
            />
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          <div className="mb-4">
            <select
              {...register("department", {
                required: "Please select a department",
              })}
              className="w-full p-3 border rounded-md mt-2"
              onChange={onDepartmentChange}
            >
              <option value="">Select a department</option>
              {departments.map((dept) => (
                <option key={dept.name} value={dept.name}>
                  {dept.name}
                </option>
              ))}
            </select>
            {errors.department && (
              <p className="text-red-500">{errors.department.message}</p>
            )}
          </div>

          <div className="mb-4">
            <select
              {...register("doctor", { required: "Please select a doctor" })}
              className="w-full p-3 border rounded-md mt-2"
              disabled={!selectedDepartment}
            >
              <option value="">Select a doctor</option>
              {filteredDoctors.map((doctor) => (
                <option key={doctor} value={doctor}>
                  {doctor}
                </option>
              ))}
            </select>
            {errors.doctor && (
              <p className="text-red-500">{errors.doctor.message}</p>
            )}
          </div>

          <div className="mb-4 flex gap-5">
            <div className="w-1/2">
              <input
                {...register("date", {
                  required: "Preferred date is required",
                })}
                type="date"
                className="w-full p-3 border rounded-md mt-2"
              />
              {errors.date && (
                <p className="text-red-500">{errors.date.message}</p>
              )}
            </div>
            <div className="w-1/2">
              <input
                {...register("time", {
                  required: "Preferred time is required",
                })}
                type="time"
                className="w-full p-3 border rounded-md mt-2"
              />
              {errors.time && (
                <p className="text-red-500">{errors.time.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-1/3 bg-[#223a66] hover:bg-[#dc3545] transition duration-300 ease-in-out text-white p-3 rounded-3xl"
          >
            Make Appointment
          </button>
        </form>
        <DevTool control={control} />
      </div>
    </section>
  );
};

export default FormAppSection;
