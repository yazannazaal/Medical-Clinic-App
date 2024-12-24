import React from "react";
import { useNavigate } from "react-router-dom";

const PasswodReset = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <button onClick={() => navigate("/verifyCode")} className="text-gray-500 mb-4">&larr; Back</button>
        <h1 className="text-xl font-bold mb-4">Password reset</h1>
        <p className="text-sm text-gray-600 mb-6">
          Your password has been successfully reset. Click confirm to set a new password.
        </p>
        <button
          type="button"
          onClick={() => navigate("/setNewPassword")}
          className="w-full bg-blue-500 text-white py-3 rounded-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default PasswodReset;
