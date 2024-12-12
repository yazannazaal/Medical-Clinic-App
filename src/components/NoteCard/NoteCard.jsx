import React from "react";

const NoteCard = () => {
  return (
    <div className=" bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-start gap-2">
      {/* Header Section */}
      <div className="w-[364px] h-[67px] relative bg-red-500 flex items-center px-4">
        <div className="absolute left-5 top-[26px] text-center text-white text-lg font-bold">
          1
        </div>
        <div className="absolute left-12 top-[26px] text-white text-lg font-bold">
          Agenda/Topic
        </div>
        <div className="absolute left-[221px] top-4 flex items-center gap-3">
          <div className="flex items-center">
            <span className="text-white text-lg font-bold">SAAS-</span>
            <span className="text-white text-lg font-bold">0000</span>
          </div>
          <div className="w-7 h-7 relative">
            <div className="w-6 h-6 absolute left-[3px] top-[2.5px] bg-white"></div>
          </div>
        </div>
        <div className="absolute left-2 top-[20px] w-8 h-8 rounded-full border border-white"></div>
      </div>

      {/* Description Section */}
      <div className="px-5 py-2 flex items-center gap-2">
        <p className="w-[321px] text-gray-800 text-base font-normal">
          Description of what is done here
        </p>
      </div>

      {/* Footer Section */}
      <div className="w-[364px] h-9 relative">
        <div className="absolute left-5 top-0 w-[330px] border-t border-gray-300"></div>
        <div className="absolute left-5 top-[9px] text-gray-500 text-sm font-normal">
          Last Updated
        </div>
        <div className="absolute right-5 top-[9px] text-gray-500 text-sm font-normal text-right">
          3/8/2020
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
