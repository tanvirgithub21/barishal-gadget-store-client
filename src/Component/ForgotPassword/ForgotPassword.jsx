import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const imageUrl =
  "https://raw.githubusercontent.com/tanvirgithub21/assainment-11-data/main/rsz_60111.jpg";

//email regex
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const ForgotPassword = () => {
  //loading tiger
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const [validEmail, setValidEmail] = useState("");

  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const onSubmit = async ({ email }) => {
    setLoading(true);
    if (email.match(regexEmail)) {
      setValidEmail(email);
    } else if (!email.match(regexEmail)) {
      return toast.error("Please Input Valid Email");
    }

    await sendPasswordResetEmail(email);

    if (error) {
      return toast.error(`${error?.message.slice(22, -2)?.toUpperCase()}`);
    } else if (!error) {
      setLoading(false);
      toast.success("Check your Email");
      reset();
    }
  };

  return (
    <div className=" relative bg-[#e9fcff]">
      {loading && <Loading />}
      <div className="sectionContainer relative">
        <div className="backBtn flex justify-start text-slate-100 sm:absolute sm:top-6 sm:left-5 mt-4 ml-4 sm:mt-0 sm:ml-0">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-xl font-semibold bg-sky-600 pr-5 rounded-lg cursor-pointer py-2"
          >
            <MdKeyboardArrowLeft className="text-4xl" /> BACK
          </button>
        </div>

        <div className="flex sm:items-center justify-center sm:min-h-screen mb-20 sm:mb-0">
          <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-[35rem] rounded-xl">
            <h3 className="text-3xl md:text-4xl mt-8 font-bold text-center">
              Forgot password ?
            </h3>

            <div className="flex justify-center my-6">
              <img
                className="w-[12rem] h-[12rem] border-4 border-gray-300 rounded-[50%] overflow-hidden"
                src={imageUrl}
                alt="images"
              />
            </div>
            <div className="resetText text-[1.3rem] font-[500] px-8 text-center">
              <p className="mb-5">
                Enter the email address associated with your account
              </p>
              <p className="mb-5 text-gray-400 ">
                we will email you a link to reset your password
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="text-2xl">
              <div className="mt-4">
                <div>
                  <input
                    {...register("email")}
                    type="text"
                    placeholder="Enter Email Address"
                    name="email"
                    required
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 w-full font-[500]">
                  Reset Password
                </button>

                <Link
                  to="/singIn"
                  className="text-center block mt-5 text-2xl font-[500] text-blue-600 hover:underline"
                >
                  Create new account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
