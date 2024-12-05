import video from "../../assets/homeAssets/a.mp4";
import { FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-20 left-8 text-left">
        <h1 className="text-white text-4xl md:text-6xl font-light md:leading-6">
          Transforming Your Care
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="text-white text-xl md:text-2xl mt-8 font-light leading-6">
              Ready to get started
            </p>
            <FaArrowRight className="text-white text-xl md:text-2xl mt-8 transform rotate-0" />
          </div>
          <div>
            <button className="mt-8 border border-gray-200 px-12 py-3 text-white bg-inherit hover:bg-white hover:text-slate-900 rounded-3xl text-lg transition-all duration-300 ease-in-out">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
