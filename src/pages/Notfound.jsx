import React from "react";
import { Link, useNavigate } from "react-router";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaExclamationTriangle } from "react-icons/fa";
import { HiOutlineHomeModern } from "react-icons/hi2";

export default function Notfound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white dark:bg-neutral-800 rounded-xl shadow-xl overflow-hidden">
          <div className="p-5 sm:p-10 text-center">
            {/* Error Icon Animation */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center animate-ping opacity-25">
                  {/* <AlertTriangle size={80} className="text-red-400" /> */}
                  <FaExclamationTriangle size={80} className="text-red-500" />
                </div>
                {/* <AlertTriangle size={80} className="text-red-500 relative" /> */}
                  <FaExclamationTriangle size={80} className="text-red-500 relative" />

                
              </div>
            </div>

            {/* Error Title */}
            <h1 className="text-5xl sm:text-7xl font-bold text-gray-800 dark:text-gray-200 mb-3 animate-fade-in">
              4<span className="text-red-500">0</span>4
            </h1>

            {/* Error Message */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Page Not Found
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => goBack()}
                className="px-6 py-3 bg-gray-200  cursor-pointer text-gray-700 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-all font-medium"
              >
                {/* <MoveLeft size={18} /> */}
                <IoArrowBackCircleOutline size={18} />
                Go Back
              </button>
              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-neutral-400 cursor-pointer dark:bg-neutral-700 dark:hover:bg-neutral-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-neutral-500 transition-all font-medium"
              >
                <HiOutlineHomeModern size={18} />
                Home Page
              </button>
            </div>
          </div>

          {/* Footer Section */}
          <div className="py-4 bg-gray-50 dark:bg-neutral-800 text-center border-t border-gray-100 dark:border-neutral-700">
            <p className="text-sm text-gray-500">
              If you believe this is an error, please contact support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
