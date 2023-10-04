

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../ContextApi/ContextApi'
import Navbar from '../Header/Navbar/Navbar'

const Resigter = () => {

   const {resigter} = useContext(AuthContext)
  
    const resigterHandler = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        

        resigter(email, password)
        .then(res => console.log(res.user))
        .catch(error => console.log(error.message))
     
    }





    return (
        
       <div className='bg-gray-100 py-5'>
        <Navbar />
         <div className="flex bg-gray-100 md:h-[700px]  lg:h-[700px] items-center justify-center">
           
           <div className="  bg-white md:w-7/12 lg:w-7/12 md:p-8 lg:p-8 py-10 flex items-center justify-center rounded flex-col">
     
             <h1 className="text-3xl font-semibold mb-7 ">Register your account</h1>
     
            <form onSubmit={resigterHandler}> 
            <input
               className="w-full bg-gray-100 px-2 py-2 rounded text-sm outline-none border mb-3"
               type="name"
               name="name"
               id=""
               placeholder="Enter Name"
             />
             <input
               className="w-full bg-gray-100 px-2 py-2 rounded text-sm outline-none border mb-3"
               name="photo"
               type="photo"
               id=""
               placeholder="Photo URL"
             />
             <input
               className="w-full bg-gray-100 px-2 py-2 rounded text-sm outline-none border mb-3"
               type="email"
               name="email"
               id=""
               placeholder="Enter Email"
             />
     
             <input
               className="w-full bg-gray-100 px-2 py-2 rounded text-sm outline-none border mb-3"
               type="password"
               name="password"
               id=""
               placeholder="Password"
             />
     
             <button type='submit' className="text-white bg-black w-full rounded py-2 uppercase mb-3">
               Resigter
             </button>
              </form>
     
             <p>
                You have already Acount?{" "}
               <Link to="/login">
                 {" "}
                 <span className="text-rose-600">Login</span>
               </Link>{" "}
             </p>
           </div>
         </div>
       </div>
    )
}

export default Resigter