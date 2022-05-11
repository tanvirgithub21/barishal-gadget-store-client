import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

//email and pass regex
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const Login = () => {
  const [validEmail, setValidEmail] = useState("");
  const [validPassword, setValidPassword] = useState("");

  const { register, handleSubmit } = useForm();

  const onSubmit = ({ email, password }) => {
    //email valid function
    if (email.match(regexEmail)) {
      setValidEmail(email);
    } else {
      return toast.error("Please Input Valid Email");
    }

    //password valid function
    if (password.match(regexPassword)) {
      setValidPassword(password);
    } else {
      return toast.error("Minimum eight characters, One letter & one number");
    }
  };

  return (
    <div>
      <div className="flex sm:items-center justify-center sm:min-h-screen bg-gray-100">
        <div className="px-8 sm:py-6 sm:mt-4 text-left bg-white shadow-lg w-[45rem] rounded-xl">
          <h3 className="text-2xl md:text-4xl mt-24 sm:mt-8 font-bold text-center">
            Login to your account
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-xl sm:text-2xl"
          >
            <div className="mt-4">
              <div>
                <label className="block font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="text"
                  placeholder="Email"
                  name="email"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block font-semibold">Password</label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 w-full font-[500]">
                Login
              </button>
              <div className="flex justify-between items-center pt-5 pb-8">
                <Link
                  to="forgot"
                  className="text-xl font-[500] text-blue-600 hover:underline"
                >
                  Forgot password?
                </Link>
                <Link
                  to="/singIn"
                  className="text-xl font-[500] text-blue-600 hover:underline"
                >
                  Create new account
                </Link>
              </div>
              <p className="bothSideLine text-center text-gray-400 font-[500]">
                Or continue with
              </p>

              <div className="singInGoogleBtn flex justify-center items-center my-5  mb-24 sm:mb-0 ">
                <div className="bg-slate-200 hover:bg-slate-300 ease-in-out duration-300 px-5 py-3 rounded-md flex justify-center items-center font-[500] text-slate-600 cursor-pointer">
                  <FcGoogle className="mr-1 text-[2.5rem]" />
                  <p> SingIn with Google</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
