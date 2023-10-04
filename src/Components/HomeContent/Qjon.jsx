import React from "react";
import swing from "../../assets/qZone1.png";
import classZone from "../../assets/qZone2.png";
import play from "../../assets/qZone3.png";

const Qjon = () => {
  return (
    <div className="bg-gray-200 p-3 rounded mt-8">
        <h1 className="text-2xl font-bold">Q-Zone</h1>
      <div className="grid gap-5 p-3">
        <img className="mx-auto" src={swing} alt="" />
        <img className="mx-auto" src={classZone} alt="" />
        <img className="mx-auto" src={play} alt="" />
      </div>
    </div>
  );
};

export default Qjon;
