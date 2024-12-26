import DoctorImage from "../../assets/homeAssets/doctor1.png";
import TableEduction from "./DoctorTables/TableEducation";
import ExperiencedTable from "./DoctorTables/ExperiencedTable";
import AppointmnetSchedulesTable from "./DoctorTables/AppointmnetSchedulesTable";

const DoctorProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 space-y-10">
      <div className="bg-gray-900 bg-doctorAdd bg-cover bg-no-repeat relative pb-32 pt-32 grid justify-items-center sm:justify-items-start px-4 sm:px-12 lg:px-44 max-h-[200px]">
        <h1 className="font-bold text-2xl sm:text-3xl ">Dr. Osama Ghneem</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  px-4 sm:px-10 lg:px-20 ">
        <div className="flex flex-col space-y-10 items-center">
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-[350px] text-center sm:text-left">
            <img
              src={DoctorImage}
              alt="Dr. Zinia Zara"
              className="w-full h-[350px] rounded-md mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold">Dr. Zinia Zara</h2>
            <p className="text-gray-500 font-semibold">Cardiology</p>
            <p className="text-blue-500 font-bold">MBBS, M.D of Medicine</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-[350px] text-center sm:text-left">
            <div>
              <h2 className="text-2xl font-bold">Personal Info</h2>
              <hr className="w-16 border-t-2 border-blue-800 my-4" />
            </div>
            <div className="space-y-2">
              <div>
                <span className="font-bold text-gray-600">Phone:</span> +123
                1000-567
              </div>
              <div>
                <span className="font-bold text-gray-600">Office:</span>{" "}
                +8800-567
              </div>
              <div>
                <span className="font-bold text-gray-600">Email:</span>{" "}
                ziniazara@gmail.com
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 md:col-span-2 w-full text-center sm:text-left">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold">Education</h2>
              <hr className="w-16 border-t-2 border-blue-800 my-4" />
              <TableEduction />
            </div>

            <div>
              <h2 className="text-2xl font-bold">Experience</h2>
              <hr className="w-16 border-t-2 border-blue-800 my-4" />
              <ExperiencedTable />
            </div>

            <div>
              <h2 className="text-2xl font-bold">Appointment Schedules:</h2>
              <hr className="w-16 border-t-2 border-blue-800 my-4" />
              <AppointmnetSchedulesTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
