import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaBlog } from "react-icons/fa";
import logo from "/h-logo.png";

const NavBar = () => {
  const isAuthenticated = true;
  const handleLogout = async () => {
    console.log("logged out");
  };
  const isAuthenticated = true;
  const handleLogout = async () => {
    console.log("logged out");
  };
  return (
    <header className="bg-white shadow-lg  fixed left-0 top-0 w-svw">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/">
            <img src={logo} className="h-16 mx-3" alt="" />
          </Link>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="rounded-md px-3 py-2 text-lg font-medium text-brand-500 hover:bg-brand-500 hover:text-white"
                >
                  Home
                </Link>
                {/* <!-- Logged In Only --> */}
                {isAuthenticated && (
                  <>
                    {" "}
                    <Link
                      to="/about"
                      className="rounded-md px-3 py-2 text-lg font-medium text-brand-500 hover:bg-brand-500 hover:text-white"
                    >
                      About
                    </Link>
                    <Link
                      to="/blogs/add"
                      className="rounded-md px-3 py-2 text-lg font-medium text-brand-500 hover:bg-brand-500 hover:text-white"
                    >
                      Add New
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* <!-- Right Side Menu --> */}
          <div className="ml-auto">
            <div className="ml-4 flex items-center md:ml-6">
              {/* <!-- Logged Out Only --> */}
              {!isAuthenticated && (
                <>
                  <Link
                    to="/login"
                    className="mr-3 text-gray-800 hover:text-gray-600"
                  >
                    <FaSignInAlt className="inline mr-1" /> Login
                  </Link>
                  <Link
                    to="/register"
                    className="mr-3 text-gray-800 hover:text-gray-600"
                  >
                    <FaUser className="inline mr-1" /> Register
                  </Link>
                </>
              )}
              {isAuthenticated && (
                <>
                  {" "}
                  <Link to="/blogs/my">
                    <FaBlog className="inline mr-1" /> My Blogs
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="mx-3 text-gray-800 hover:text-gray-600"
                  >
                    <FaSignOutAlt className="inline mr-1" /> Log Out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Mobile menu --> */}
      <div className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            to="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Blogs
          </Link>
          {/* <!-- Logged In Only --> */}
          {isAuthenticated && (
            <>
              {" "}
              <Link
                to="/bookings"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
              >
                Bookings
              </Link>
              <Link
                to="/rooms/add"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
              >
                Add Blog
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
    </header>
  );
};

export default NavBar;
