import React, { useEffect, useState } from "react";
import CenterCard from "./CenterCard";

const CenterNav = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(4);
 
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="mb-3 p-3">
      <div>
        {data.slice(0, showAll).reverse().map((item) => (
          <CenterCard key={item.id} data={item} />
        ))}

        <div className={data.length >= 4 ? "block" : "hidden"}>
          <div className={showAll === data.length && "hidden"}>
            <button
              onClick={() => setShowAll(data.length)}
              className="bg-rose-500 text-white py-1 px-3 rounded w-full"
            >
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterNav;
