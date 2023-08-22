import React from "react";
import { FaArrowsAltV } from "react-icons/fa";

const Education = () => {
  return (
    <div
      name="education"
      className=" w-full min-h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 background-animation flex flex-col items-center justify-center font-poppins"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pl-4">
          <p className=" text-4xl font-bold inline border-b-4 border-pink-600 text-black my-5">
            Education
          </p>
        </div>
      </div>
      <div className="w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 hover:scale-110 duration-500 border-dashed border-2 border-black">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs mr-4">
            2020
          </div>
          <div className="text-lg md:text-xl font-semibold text-[#1a202c]">
            Your Degree/Course
          </div>
        </div>
        <div className="text-sm text-[#4a5568] mb-2">
          Your educational institution
        </div>
        <div className="text-sm text-[#4a5568] mb-4">Graduated: Month Year</div>
        <p className="text-[#1a202c]">
          Description of your degree and educational experience.
        </p>
      </div>
      <FaArrowsAltV className="text-white" />
      <div className="w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 hover:scale-110 duration-500 border-dashed border-2 border-black">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs mr-4">
            2020
          </div>
          <div className="text-lg md:text-xl font-semibold text-[#1a202c]">
            Your Degree/Course
          </div>
        </div>
        <div className="text-sm text-[#4a5568] mb-2">
          Your educational institution
        </div>
        <div className="text-sm text-[#4a5568] mb-4">Graduated: Month Year</div>
        <p className="text-[#1a202c]">
          Description of your degree and educational experience.
        </p>
      </div>
    </div>
  );
};

export default Education;