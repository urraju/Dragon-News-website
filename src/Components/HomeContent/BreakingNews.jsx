import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex gap-3 items-center mb-10 bg-gray-100 p-2 rounded ">
      <button className=" rounded py-1 px-4 text-white bg-rose-500">
        News
      </button>
      <Marquee pauseOnHover={true}>
        I can be a React component, multiple React components, or just some
        text.
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
