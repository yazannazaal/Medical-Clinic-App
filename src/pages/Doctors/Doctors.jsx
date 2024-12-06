import { useState } from "react";
import doctor1 from "../../assets/homeAssets/doctor1.png";
import doctor2 from "../../assets/homeAssets/doctor2.png";
import doctor3 from "../../assets/homeAssets/doctor3.png";
import doctor4 from "../../assets/homeAssets/doctor4.png";
import doctor5 from "../../assets/homeAssets/doctor5.png";
import doctor6 from "../../assets/homeAssets/doctor6.png";
import doctor7 from "../../assets/homeAssets/doctor7.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import FooterSection from "../../components/homeComps/FooterSection";

const Doctors = () => {
  const specialties = [
    "All Departments",
    "Cardiology",
    "Ophthalmology",
    "Dental",
    "Plastic Surgery",
    "Pediatry",
    "Neurology",
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. John Doe",
      specialty: "Cardiology",
      image: doctor1,
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      specialty: "Ophthalmology",
      image: doctor2,
    },
    {
      id: 3,
      name: "Dr. Emma White",
      specialty: "Gynecology",
      image: doctor3,
    },
    {
      id: 4,
      name: "Dr. Tom Brown",
      specialty: "Dental",
      image: doctor4,
    },
    {
      id: 5,
      name: "Dr. Olivia Green",
      specialty: "Plastic Surgery",
      image: doctor5,
    },
    {
      id: 6,
      name: "Dr. Ava Blue",
      specialty: "Pediatry",
      image: doctor7,
    },
    {
      id: 7,
      name: "Dr. Jack Black",
      specialty: "Neurology",
      image: doctor6,
    },
  ];

  const [activeSpecialty, setActiveSpecialty] = useState("All Departments");

  const filteredDoctors =
    activeSpecialty === "All Departments"
      ? doctors
      : doctors.filter((doctor) => doctor.specialty === activeSpecialty);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-5 items-center p-20">
        {specialties.map((specialty, index) => (
          <button
            key={index}
            onClick={() => setActiveSpecialty(specialty)}
            className={`inline-block rounded px-6 py-3 text-base font-semibold transition-all duration-300 ${
              activeSpecialty === specialty
                ? "bg-blue-600 text-white"
                : "bg-white text-black-600 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {specialty}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-64 pb-28 ">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor.id} sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={doctor.image}
                alt={doctor.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {doctor.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {doctor.specialty}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <div className="bg-gray-900 bg-ttuPattern bg-cover bg-no-repeat relative pb-44 pt-44 grid justify-items-start px-40  ">
        <div className=" max-w-2xl flex-col justify-items-center ">
          <h1 className="text-4xl text-white font-bold text-center pb-10 ">
            We are pleased to offer you the chance to have the healthy
          </h1>
          <button className="hidden md:block py-3 px-8 bg-red-500 text-white rounded-xl  hover:bg-red-600 transition-all duration-300 ease-in-out transform hover:scale-105">
            Get Appointment
          </button>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Doctors;
