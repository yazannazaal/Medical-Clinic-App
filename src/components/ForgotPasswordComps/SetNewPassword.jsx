import React from "react";
import { useNavigate } from "react-router-dom";

const SetNewPassword = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <button onClick={() => navigate("/passwodreset")} className="text-gray-500 mb-4">&larr; Back</button>
        <h1 className="text-xl font-bold mb-2">Set a new password</h1>
        <p className="text-sm text-gray-600 mb-6">
          Create a new password. Ensure it differs from previous ones for security.
        </p>
        <form>
          <input
            type="password"
            placeholder="Enter your new password"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <input
            type="password"
            placeholder="Re-enter password"
            className="w-full p-3 border rounded-lg mb-6"
          />
          <button
            type="submit"
            onClick={() => navigate("/*")}
            className="w-full bg-blue-500 text-white py-3 rounded-lg"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetNewPassword;
