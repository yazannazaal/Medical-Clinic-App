import backgroundImg from "../../assets/appointments/heroAppBackgroundImg.jpg";

const HeroAppSection = () => {
  return (
    <div className="relative h-[60vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          filter: "brightness(0.3)",
        }}
      ></div>

      <div className="absolute inset-0 bg-[#6F8BA4] bg-opacity-50 flex flex-col items-center justify-center text-center">
        <p className="text-white text-lg md:text-xl ">Book Your Seat</p>
        <h2 className="text-white text-2xl font-bold md:text-5xl mt-1">
          Appointment
        </h2>
      </div>
    </div>
  );
};

export default HeroAppSection;
