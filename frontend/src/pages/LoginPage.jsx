import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-around">
      <img src="logo.png" className="rounded-full h-96" alt="" />

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mt-20">
        <form>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-slate-50 border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className=" bg-slate-50 border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="bg-brand-500 text-white px-4 py-2 rounded hover:bg-brand-700"
            >
              Login
            </button>

            <p>
              No account?
              <Link to="/register" className="text-brand-400">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
