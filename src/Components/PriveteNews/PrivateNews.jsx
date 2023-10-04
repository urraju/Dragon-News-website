import React from "react";
import RightSiteNav from "../HomeContent/RightSiteNav";
import Header from "../Header/Header";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const PrivateNews = () => {
  const data = useLoaderData();
  const { _id } = useParams();

  const idFindData = data.find((item) => item._id === _id);
  const {
    category_id,
    published_date,
    total_view,
    title,
    author,
    thumbnail_url,
    image_url,
    details,
  } = idFindData;

  return (
    <div className="my-5">
      <Header />
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:gridloc3
             gap-4"
      >
        <div className="col-span-2 border p-5 h-max">
            <h1 className="text-xl font-bold">Dragon News</h1>
          <img className="mx-auto w-full mt-4" src={image_url} alt="" />
          <div className="mt-5">
            <p className="text-2xl font-semibold mb-3">{title}</p>
            <p className="font-light">{details}</p>
          </div>

         <Link to='/'> <button className="bg-rose-600 text-white flex items-center font-light gap-1 px-4 mt-5 py-1"> <AiOutlineArrowLeft/> All News in this Category</button></Link>

        </div>
        <div className="border h-max">
          {" "}
          <RightSiteNav />{" "}
        </div>
      </div>
    </div>
  );
};

export default PrivateNews;
