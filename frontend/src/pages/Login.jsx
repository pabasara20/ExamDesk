import React, { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center  bg-cover bg-center bg-[url('/Images/bg.png')]">

      {/* Login Card */}
      <div className="bg-white shadow-lg rounded-xl w-full max-w-xs h-[400px] px-6 pt-10 pb-6">
        <h2 className="text-xl font-semibold mb-6 text-left">Admin Login</h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Login
            </label>
            <input
              type="text"
              placeholder="Email or phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
              >
                {showPassword ? '👁' : '👁'}
              </span>
            </div>
          </div>

          <div className="text-right mb-4">
            <a href="#" className="text-xs text-pink-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-2 rounded-md hover:bg-gray-900 transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;