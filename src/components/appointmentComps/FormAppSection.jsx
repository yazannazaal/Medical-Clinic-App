import { HiPhone } from "react-icons/hi";

const FormAppSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start px-10 py-6">
      {/* right section */}
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
      {/* //right section */}

      {/* left section */}
      <div className="w-full md:w-2/3 p-4">
        {/* title */}
        <h2 className="text-4xl font-bold mb-4 text-[#223a66]">
          Book an Appointment
        </h2>
        <p className="text-lg text-[#6F8BA4] mb-4">
          Please fill out the form below to schedule an appointment with one of
          our doctors. You can select your preferred date, time, and provide any
          additional details for your visit.
        </p>
        {/* form */}
        <form>
          <div className="mb-4">
            <input
              placeholder="Full Name"
              type="text"
              id="fullName"
              name="fullName"
              className="w-full p-3 border rounded-md mt-2"
              required
            />
          </div>

          <div className="mb-4 flex gap-5">
            <div className="w-1/2">
              <input
                placeholder="Phone Number"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full p-3 border rounded-md mt-2"
                required
              />
            </div>

            <div className="w-1/2">
              <input
                placeholder="Email Address"
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border rounded-md mt-2"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <select
              id="doctor"
              name="doctor"
              className="w-full p-3 border rounded-md mt-2"
              required
            >
              <option value="">Select a doctor</option>
              <option value="doctor1">Dr. John Doe</option>
              <option value="doctor2">Dr. Jane Smith</option>
            </select>
          </div>

          <div className="mb-4 flex gap-5">
            <div className="w-1/2">
              <input
                placeholder="Preferred Date"
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                className="w-full p-3 border rounded-md mt-2"
                required
              />
            </div>

            <div className="w-1/2">
              <input
                placeholder="Preferred Time"
                type="time"
                id="appointmentTime"
                name="appointmentTime"
                className="w-full p-3 border rounded-md mt-2"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Reason for Appointment"
              id="reason"
              name="reason"
              className="w-full p-3 border rounded-md mt-2"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-1/3 bg-[#223a66] hover:bg-[#dc3545] transition duration-300 ease-in-out text-white p-3 rounded-3xl"
          >
            Make Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormAppSection;
