import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-gray-100 h-screen m-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="">
          <img
            className="w-fit"
            src="https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/theme/404.png"
            alt=""
          />
          <div className="text-center">
            <p className="text-2xl my-5"> Oops! Page not found</p>
            <Link
              to="/"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
