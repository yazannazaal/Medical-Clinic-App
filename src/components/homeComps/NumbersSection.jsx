import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaUserMd } from "react-icons/fa";
import { FaSyringe, FaUsers } from "react-icons/fa6";

const NumbersSection = () => {
  const [happyPeople, setHappyPeople] = useState(0);
  const [surgeryCompleted, setSurgeryCompleted] = useState(0);
  const [expertDoctors, setExpertDoctors] = useState(0);
  const [worldwideBranch, setWorldwideBranch] = useState(0);

  const animateNumber = (target, setState) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < target) {
        count += 1;
        setState(count);
      } else {
        clearInterval(interval);
      }
    }, 50);
  };
  useEffect(() => {
    animateNumber(50, setHappyPeople);
    animateNumber(60, setSurgeryCompleted);
    animateNumber(50, setExpertDoctors);
    animateNumber(10, setWorldwideBranch);
  }, []);

  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Happy People */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-md">
          <div className="flex justify-center items-center mb-4">
            <FaUsers className="text-4xl text-gray-600" />
          </div>
          <h3 className="text-4xl font-semibold text-gray-800">
            {happyPeople}k
          </h3>
          <p className="text-xl text-gray-500">Happy People</p>
        </div>

        {/* Surgery Completed */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-md">
          <div className="flex justify-center items-center mb-4">
            <FaSyringe className="text-4xl text-gray-600" />
          </div>
          <h3 className="text-4xl font-semibold text-gray-800">
            {surgeryCompleted}+
          </h3>
          <p className="text-xl text-gray-500">Surgery Completed</p>
        </div>

        {/* Expert Doctors */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-md">
          <div className="flex justify-center items-center mb-4">
            <FaUserMd className="text-4xl text-gray-600" />
          </div>
          <h3 className="text-4xl font-semibold text-gray-800">
            {expertDoctors}+
          </h3>
          <p className="text-xl text-gray-500">Expert Doctors</p>
        </div>

        {/* Worldwide Branch */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-md">
          <div className="flex justify-center items-center mb-4">
            <FaMapMarkerAlt className="text-4xl text-gray-600" />
          </div>
          <h3 className="text-4xl font-semibold text-gray-800">
            {worldwideBranch}+
          </h3>
          <p className="text-xl text-gray-500">Worldwide Branches</p>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
