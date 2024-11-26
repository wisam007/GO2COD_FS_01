import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaBlog } from "react-icons/fa";

const NavBar = () => {
  const isAuthenticated = true;
  const handleLogout = async () => {
    console.log("logged out");
  };
  return (
    <header className="bg-white shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <div></div>
              <kbd className="kbd font-bold text-xl text-base-500 hover:text-base-300">
                B
              </kbd>
              <kbd className="kbd">L</kbd>
              <kbd className="kbd">O</kbd>
              <kbd className="kbd">G</kbd>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Rooms
                </Link>
                {/* <!-- Logged In Only --> */}
                {isAuthenticated && (
                  <>
                    {" "}
                    <Link
                      to="/bookings"
                      className="rounded-md px-3 py-2 text-sm font-medium text-brand-500 hover:bg-gray-700 hover:text-white"
                    >
                      Bookings
                    </Link>
                    <Link
                      to="/rooms/add"
                      className="rounded-md px-3 py-2 text-sm font-medium text-brand-500 hover:bg-gray-700 hover:text-white"
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
                  <Link to="/rooms/my">
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
  );
};

export default NavBar;
