import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import { AuthContext } from "../ContextApi/ContextApi";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const loginHandler = (e) => {
    
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    

    login(email, password)
      .then((res) => console.log(res.user))
       navigate(location?.state ? location.state : '/' )
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="bg-gray-100 py-5">
      <Navbar />
      <div className="flex bg-gray-100 h-[700px] items-center justify-center">
        <div className="  bg-white w-7/12 p-8 py-10 flex items-center justify-center rounded flex-col">
          <h1 className="text-3xl font-semibold mb-7 ">Please Login</h1>
          <form onSubmit={loginHandler}>
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

            <button
              type="submit"
              className="text-white bg-black w-full rounded py-2 uppercase mb-3"
            >
              Login
            </button>
          </form>

          <p>
            Don’t Have An Account ?{" "}
            <Link to="/resigter">
              {" "}
              <span className="text-rose-600">Register</span>
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
