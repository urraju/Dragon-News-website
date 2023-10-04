

import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Header/Navbar/Navbar'

const Roots = () => {
    return (
        <div className='w-9/12 my-8 mx-auto font-poppins mt-14'>
            
            <Outlet />
        </div>
    )
}

export default Roots