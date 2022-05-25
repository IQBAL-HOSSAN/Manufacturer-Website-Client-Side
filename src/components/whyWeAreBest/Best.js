import React from "react";
import { BsFillFlagFill, BsPeopleFill } from "react-icons/bs";

const Best = ({ icon, title, text }) => {
  return (
    <div className="w-full text-center shadow rounded p-5">
      <div className="text-secondary text-6xl flex justify-center  ">
        <icon />
      </div>
      <h3 className="text-4xl font-bold my-6">{title}</h3>
      <p className="text-2xl font-bold">{text}</p>
    </div>
  );
};

export default Best;
