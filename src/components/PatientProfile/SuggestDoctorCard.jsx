

const SuggestDoctorCard = ({ image, name, specialization }) => {
    return (
      <div className="flex flex-row items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow-md">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{specialization}</p>
        </div>
      </div>
    );
  };
  export default SuggestDoctorCard;