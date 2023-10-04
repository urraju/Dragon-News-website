

import React from 'react'
import { AiFillCalendar } from "react-icons/ai";
const LeftCard = ({card}) => {
    const {category_id , published_date, total_view ,title , author,thumbnail_url,image_url,details,} = card;
    return (
        <div>
            <img className='w-full' src={thumbnail_url} alt="" />
             <p className='text-xl font-semibold mt-4'>{title}</p>

             <div className='flex items-center gap-3 mt-3'>
                <AiFillCalendar className='text-2xl text-gray-400' />
                <p className='text-gray-500'>{author.published_date}</p>
             </div>
        </div>
    )
}

export default LeftCard