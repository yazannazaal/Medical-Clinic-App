import { BsHeartPulse } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { FaTooth } from "react-icons/fa6";
import { GiLoveInjection } from "react-icons/gi";
import { GiStomach } from "react-icons/gi";
import { PiBrain } from "react-icons/pi";

const ServicesSection = () => {
  return (
    <div>
      {/* Top section */}
      <section className="text-center py-16 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our All Services
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We offer a wide range of expert medical services to cater to all your
          health needs, ensuring the best care for every patient.
        </p>
      </section>
      {/* //Top section */}

      {/* services grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-4 md:gap-6 py-8 px-4">
        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4">
            <BsHeartPulse className="text-white text-3xl" />
          </div>
          <h3 className="font-semibold text-lg text-gray-800">Cardiology</h3>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mx-auto mb-4">
            <FaRegEye className="text-white text-3xl" />
          </div>
          <h3 className="font-semibold text-lg text-gray-800">Ophthalmology</h3>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-purple-500 rounded-full mx-auto mb-4">
            <FaUserMd className="text-white text-3xl" />
          </div>
          <h3 className="font-semibold text-lg text-gray-800">Gynecology</h3>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-yellow-500 rounded-full mx-auto mb-4">
            <FaTooth className="text-white text-3xl" />
          </div>
          <h3 className="font-semibold text-lg text-gray-800">Dental Care</h3>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-red-500 rounded-full mx-auto mb-4">
            <GiLoveInjection className="text-white text-3xl" />
          </div>
          <h3 className="font-semibold text-lg text-gray-800">
            Plastic Surgery
          </h3>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-teal-500 rounded-full mx-auto mb-4">
            <GiStomach className="text-white text-3xl" />
          </div>
          <h3 className="font-semibold text-lg text-gray-800">Pediatrics</h3>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mx-auto mb-4">
            <PiBrain className="text-white text-3xl" />
          </div>
          <h3 className="font-semibold text-lg text-gray-800">Gastrology</h3>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-indigo-500 rounded-full mx-auto mb-4">
            <PiBrain className="text-white text-3xl" />
          </div>
          <h3 className="font-semibold text-lg text-gray-800">Neurology</h3>
        </div>
      </section>
      {/* //services grid */}
    </div>
  );
};

export default ServicesSection;
