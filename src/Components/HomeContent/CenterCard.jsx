import React from "react";
import { BsShare , BsBookmark } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const CenterCard = ({ data }) => {
  const {
    _id,
    category_id,
    published_date,
    total_view,
    title,
    author,
    thumbnail_url,
    image_url,
    details,
  } = data;
  return <div className="p-2">
    
   <div className="flex items-center justify-between p-5 bg-gray-200 rounded mt-2">
   <div className="flex gap-3">
        <img className="w-10 h-10 rounded-full" src={author.img} alt="" />
       <div>
       <p>{author.name}</p>
        <p>{author.published_date}</p>
       </div>
    </div>
    <div className="flex gap-3">
        <BsBookmark/>
        <BsShare/>
    </div>
   </div>
   {/* big card part  */}
   <div className="mt-5 p-3">
      <h1 className="text-xl font-bold mb-3">{title}</h1>
      <img src={image_url} alt="" />
      <p className="mt-6 font-light">{details.slice(0,200)}</p>
      <NavLink to={`/privatenews/${_id}`} className="text-orange-600 text-lg "  >Read More</NavLink>
   </div>
  </div>;
};

export default CenterCard;
