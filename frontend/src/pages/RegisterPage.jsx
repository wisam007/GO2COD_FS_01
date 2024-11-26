import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-around">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mt-20">
        <form>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Register
          </h2>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>

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
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="mb-4">
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
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="bg-brand-500 text-white px-4 py-2 rounded hover:bg-brand-700"
            >
              Register
            </button>

            <p>
              Have an account?
              <Link to="/login" className="text-brand-500">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <img src="logo.png" className="rounded-full h-96" alt="" />
    </div>
  );
};

export default RegisterPage;
