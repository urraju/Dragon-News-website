import React, { useEffect, useState } from "react";
import LeftCard from "./LeftCard";

const LeftSiteNav = () => {
  const [news, setNews] = useState([]);
  const [news2, setNews2] = useState([]);
  const [show, setShow] = useState(5);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews2(data));
  }, []);
   
  return (
    <div className="p-5">
      <h1 className="font-semibold text-xl mb-4">All Caterogy</h1>
      <div className="">
        <h1 className="bg-gray-200 font-semibold w-full rounded text-center py-2">
          National News
        </h1>
        <div className="space-y-4  mt-5">
          {news.map((name) => (
            <p key={name.id}>
              <p className="text-gray-500 text-xl ">{name.name}</p>
            </p>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-5">
        {news2.slice(0, show).map((item) => (
          <LeftCard key={item.id} card={item} />
        ))}
        <div className={news2.length >= 4 ? "block" : "hidden"}>
          <div className={show === news2.length && "hidden"}>
            <button
              onClick={() => setShow(news2.length)}
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

export default LeftSiteNav;
