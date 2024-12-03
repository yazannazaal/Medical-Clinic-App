import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { GoPerson } from "react-icons/go";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const handleNavClick = () => {
    setOpenNav(!openNav);
  };

  const pages = [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "Health library", route: "/" },
    { id: 3, name: "Doctors", route: "/" },
    { id: 4, name: "Blog", route: "/" },
    { id: 5, name: "About", route: "/" },
  ];

  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-white to-gray-100 h-[85px] px-5 shadow-md">
      <button className="cursor-pointer flex items-center w-full md:w-1/12 mt-4 md:mt-0">
        <p className="text-lg md:text-2xl font-semibold text-gray-800">
          Medical Clinic
        </p>
      </button>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-5">
        {pages.map((page) => (
          <button
            key={page.id}
            className="p-3 text-xl text-gray-700 hover:bg-gray-200 hover:text-red-500 transition-all duration-300 ease-in-out transform hover:scale-105 rounded-md"
          >
            {page.name}
          </button>
        ))}
      </ul>

      <div className="flex justify-center items-center gap-6">
        <button className="hidden md:block p-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-300 ease-in-out transform hover:scale-105">
          Request appointment
        </button>
        <div className="flex justify-center items-center gap-2">
          <GoPerson className="text-xl text-gray-700" />
          <button className="whitespace-nowrap p-2 rounded-md text-gray-700 hover:bg-gray-200 hover:text-red-500 transition-all duration-300 ease-in-out transform hover:scale-105">
            Log in
          </button>
        </div>
      </div>

      {/* Mobile menu icon */}
      <div
        className="md:hidden mx-5 cursor-pointer text-gray-700"
        onClick={handleNavClick}
      >
        <IoMdMenu size={40} />
      </div>

      {/* Mobile menu */}
      <ul
        className={`fixed top-0 right-0 text-center pt-20 bg-white text-black border-l border-l-gray-300 w-1/2 h-full z-50 transform transition-transform duration-500 ${
          openNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={handleNavClick}
          className="absolute top-2 right-2 text-black"
        >
          <IoIosClose size={30} />
        </button>

        {pages.map((page) => (
          <li
            key={page.id}
            className="p-7 hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105 rounded-md"
          >
            <button className="text-black">{page.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
