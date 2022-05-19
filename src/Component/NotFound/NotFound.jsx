import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const NotFound = () => {
  // auto scroll top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const url = window.location.href;

  return (
    <div className="py-32 bg-[#e9fcff]">
      <div className="sectionContainer flex flex-col sm:flex-row items-center">
        <div className="w-1/2 flex justify-center items-center order-2 sm:order-1 mt-10 sm:mt-0">
          <div className=" text-gray-600">
            <h1 className="text-3xl sm:text-5xl font-bold inline-block">
              Page Not Found
            </h1>
            <p className="text-xl font-[500] my-6">
              {`The requested URL: ${url}`} <br />
              was not found on this server
            </p>
            <Link
              to="/home"
              className="px-4 py-2 rounded-lg bg-[#43d4f9] text-2xl font-[500] text-white"
            >
              Go to Home
            </Link>
          </div>
        </div>
        <div className="w-1/2  order-1 sm:order-2">
          <img
            src="https://i.ibb.co/K66z2FG/Nice-Png-error-icon-png-9903223-1.png"
            alt="images"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
