import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";




const ForgotPassword = () => {
    const navigate = useNavigate();
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Recover password
        </h1>
        <p className="text-gray-600 mb-5 text-center">
         Enter your email to recover your password.
        </p>
        <form>
          
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              e-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          
          <button
            type="submit"
            onClick={() => navigate("/VerifyCode")}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send recovery link
            
          </button>
          
        </form>
        
        <div className="mt-4 text-center">
          <a
            href="/"
            className="text-blue-500 hover:underline text-sm"
          >
            Back to login page
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
