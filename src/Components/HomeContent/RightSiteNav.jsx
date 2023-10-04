
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FcGoogle , } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import FindON from './FIndON';
import Qjon from './Qjon';
import NewsPaper from './NewsPaper';
import { AuthContext } from '../ContextApi/ContextApi';
const RightSiteNav = () => {
    const {googleLogin , gitHubLogin } = useContext(AuthContext)
    const handleGoogle = (media) => {
        media()
        .then()
        .catch()
    }
    return (
        <div className='p-5'>
            <h1 className='text-xl font-semibold'>Login With</h1>
             <div className='p-3'>
                <div onClick={() => handleGoogle(googleLogin)} className='flex justify-center items-center mb-2 gap-2 border py-1 rounded '>
                    <FcGoogle className='text-2xl'/>
                    <NavLink className=' uppercase'>Login With Google</NavLink>
                </div>
                <div onClick={() => handleGoogle(gitHubLogin)} className='flex justify-center items-center gap-2 border py-1 rounded '>
                    <AiFillGithub className='text-2xl'/>
                    <NavLink className=' uppercase'>Login With github</NavLink>
                </div>
             </div>
            <div className=''>
            <FindON />
             <Qjon />
             <NewsPaper />
            </div>
        </div>
    )
}

export default RightSiteNav