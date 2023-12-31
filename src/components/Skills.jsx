import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-[#FCF5ED] py-8 pb-4 border-2 border-white"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full ">
        <div className="flex flex-col justify-center items-center space-y-5">
          <p className="text-xl font-bold inline border-b-4 border-[#9BA4B5]-600 text-black">
            Skills
          </p>
          <p className="text-black text-sm text-black pb-3">My Tech Stack</p>
        </div>

        <div className="w-full flex flex-wrap justify-center items-center text-center p-10 items-center">
          <div className="w-[50%] max-w-screen-md bg-white shadow-md rounded-xl p-10 my-3 md:hover:scale-110 duration-500 hover:bg-black text-black hover:text-white ">
            <img className="w-10 md:w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4 font-bold">HTML</p>
            <p className="text-xs">Intermediate</p>
          </div>
          <div className="w-[50%] max-w-screen-md bg-white shadow-md rounded-xl p-10 my-3 md:hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img className="w-10 md:w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4 font-bold">CSS</p>
            <p className="text-xs">Intermediate</p>
          </div>
          <div className="w-[50%] max-w-screen-md bg-white shadow-md rounded-xl p-10 my-3 md:hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img
              className="w-10 md:w-20 mx-auto"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-4 font-bold">JavaScript</p>
            <p className="text-xs">Intermediate</p>
          </div>
          <div className="w-[50%] max-w-screen-md bg-white shadow-md rounded-xl p-10 my-3 md:hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img
              className="w-10 md:w-20 mx-auto"
              src={ReactImg}
              alt="HTML icon"
            />
            <p className="my-4 font-bold">React.js</p>
            <p className="text-xs">Intermediate</p>
          </div>
          <div className="w-[50%] max-w-screen-md bg-white shadow-md rounded-xl p-10 my-3 md:hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img
              className="w-10 md:w-20 mx-auto"
              src={GitHub}
              alt="HTML icon"
            />
            <p className="my-4 font-bold">Github</p>
            <p className="text-xs">Intermediate</p>
          </div>
          <div className="w-[50%] max-w-screen-md bg-white shadow-md rounded-xl p-10 my-3 md:hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img className="w-10 md:w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4 font-bold">Node.js</p>
            <p className="text-xs">Beginner</p>
          </div>
          <div className="w-[50%] max-w-screen-md bg-white shadow-md rounded-xl p-10 my-3 md:hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img className="w-10 md:w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4 font-bold">MongoDB</p>
            <p className="text-xs">Beginner</p>
          </div>
          <div className="w-[50%] max-w-screen-md bg-white shadow-md rounded-xl p-10 my-3 md:hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img
              className="w-10 md:w-20 mx-auto"
              src={Tailwind}
              alt="HTML icon"
            />
            <p className="my-4 font-bold">Tailwind</p>
            <p className="text-xs">Intermediate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
