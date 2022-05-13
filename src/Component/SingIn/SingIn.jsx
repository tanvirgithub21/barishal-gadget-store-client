import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";


const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const SingIn = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const logInUser = useAuthState(auth)
  let from = location.state?.from?.pathname || "/";

  const { register, handleSubmit, reset } = useForm();

  const [ createUserWithEmailAndPassword, user, loading, createUserError, ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  
  // submit form function
  const onSubmit = (data) => {

    const { email, password, confirmPassword } = data;

    //check valid email or not
    if (email.match(regexEmail)) {
      //no work hear
    } else {
      return toast.error("Please Input Valid Email")
    }

    //check valid pass and confirm Pass
    if (password === confirmPassword) {
      if (confirmPassword.match(regexPassword)) {

        //create user with email and password
        createUserWithEmailAndPassword(email, confirmPassword)
        createUserError ? toast.error(`${createUserError?.message.slice(22, -2)?.toUpperCase()}`) : toast.success("Send Email Verification")
        reset()//reset form value
        
      } else {
        return toast.error("Minimum eight characters, One letter & one number")
      }
    } else {
        return toast.error("Password Not Match")
    }

    if(logInUser){
      navigate(from, {replace:true})
    }


  };

  return (
    <div className="bg-gray-100">
      <div className="sectionContainer relative">
        <div className="backBtn flex justify-start text-slate-100 sm:absolute sm:top-6 sm:left-5 mt-4 ml-4 sm:mt-0 sm:ml-0 mb-5 sm:mb-0">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-xl font-semibold bg-sky-600 pr-5 rounded-lg cursor-pointer py-2"
          >
            <MdKeyboardArrowLeft className="text-4xl" /> BACK
          </button>
        </div>

        <div className="flex sm:items-center justify-center sm:min-h-screen ">
          <div className="px-8 sm:py-6 sm:mt-4 text-left bg-white shadow-lg w-[45rem] rounded-xl">
            <h3 className="text-2xl md:text-4xl mt-24 sm:mt-8 font-bold text-center">
              SingIn your Account
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
                <div className="mt-4">
                  <label className="block font-semibold">
                    Confirm Password
                  </label>
                  <input
                    {...register("confirmPassword")}
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    required
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 w-full font-[500]">
                  Create Account
                </button>
                <div className="flex justify-center items-center pt-5 pb-14 sm:pb-8 ">
                  <p className="text-2xl font-[500] text-gray-500 text-center">
                    You have a already account?
                    <Link
                      to="/login"
                      className="text-2xl font-[500] text-blue-600 hover:underline"
                    >
                      {" "}
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
