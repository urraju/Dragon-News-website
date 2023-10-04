
import React from 'react'
import Logo from '../../assets/logo.png'
import moment from 'moment/moment';
const Header = () => {
    const dateTime = moment().format("dddd, MMMM D, YYYY ");
    return (
        <div className='text-center mb-8'>
            <img className='mx-auto mb-5' src={Logo} alt="" />
            <p className='text-gray-500 text-lg  mb-2'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-cyan-800'>{dateTime}</p>
        </div>
    )
}

export default Header