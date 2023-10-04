import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import profile from '../../../assets/user.png'
import { AuthContext } from "../../ContextApi/ContextApi";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then()
    .catch()
  }
  return (
    <div className="flex gap-3 px-5 flex-col md:flex-row lg:flex-row items-center justify-between">
     <div></div>
     <div className="flex gap-3 uppercase">
     <NavLink
        className={({ isActive, isLoading }) =>
          isLoading
            ? "loading"
            : isActive
            ? "  bg-gray-200 text-black  px-3 "
            : ""
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive, isLoading }) =>
          isLoading
            ? "loading"
            : isActive
            ? "text-white bg-cyan-900 px-3 rounded"
            : ""
        }
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive, isLoading }) =>
          isLoading
            ? "loading"
            : isActive
            ? "text-white bg-cyan-900 opacity-50 px-3 rounded"
            : ""
        }
        to="/career"
      >
        Career
      </NavLink>

     </div>
      <div className="flex items-center gap-3">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user ? user.photoURL : profile}/>
        </div>
      </label>
      {
        user ? <button onClick={handleLogOut} className="px-4 py-1 rounded uppercase   bg-black text-white">sign out</button> :  <Link to='/login'><button className="px-4 py-1 rounded uppercase   bg-black text-white">Login</button></Link>
      }
          
      </div>
    </div>
  );
};

export default Navbar;
