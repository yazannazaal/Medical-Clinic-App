import React from "react";
import { useNavigate } from "react-router-dom";

const VerifyCode = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <button onClick={() => navigate("/forgotpassword")} className="text-gray-500 mb-4">&larr; Back</button>
        <h1 className="text-xl font-bold mb-2">Check your email</h1>
        <p className="text-sm text-gray-600 mb-6">
          We sent a reset link to <b>contact@dscodetech.com</b>. Enter the 5-digit code
          mentioned in the email.
        </p>
        <div className="flex justify-between mb-6">
          {[...Array(5)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border rounded-lg"
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => navigate("/passwodreset")}
          className="w-full bg-blue-500 text-white py-3 rounded-lg"
        >
          Verify Code
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Haven't got the email yet? <a href="/" className="text-blue-500">Resend email</a>
        </p>
      </div>
    </div>
  );
};

export default VerifyCode;
