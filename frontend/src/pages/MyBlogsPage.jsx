import React, { useContext } from "react";
import Heading from "../components/Heading";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { BlogContext } from "../context/BlogContext";
import { BeatLoader } from "react-spinners";

const MyBlogsPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, currentUser } = useContext(AuthContext);
  const { blogs, isLoading, deleteBlog } = useContext(BlogContext);

  // Redirect if the user is not logged in
  if (!isAuthenticated || !currentUser) {
    navigate("/login");
    return null;
  }

  // Filter blogs created by the logged-in user
  const myBlogs = blogs.filter((blog) => blog.user.userId === currentUser._id);

  return (
    <div className="h-96">
      <Heading title="Manage Your Blogs" />
      {isLoading ? (
        <div className="h-96 flex items-center justify-center">
          <BeatLoader />
        </div>
      ) : (
        <>
          {myBlogs.length > 0 ? (
            myBlogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white  shadow rounded-lg p-4 mt-4 flex-col sm:flex-row items-center justify-start sm:items-center"
              >
                <h4 className="text-2xl font-bold">{blog.title}</h4>
                <p className="pr-8 text-left font-light">
                  {/* Safely handle undefined or null content */}
                  {blog.body
                    ? `${blog.body.substring(0, 100)}...`
                    : "No content available."}
                  <Link
                    to={`/${blog._id}`}
                    className="text-brand-500 font-semibold"
                  >
                    Read More
                  </Link>
                </p>
                <div className="flex justify-end items-center space-x-4 text-2xl mx-7">
                  <button onClick={() => navigate(`/blogs/edit/${blog._id}`)}>
                    <MdEditSquare className="text-green-900 cursor-pointer" />
                  </button>
                  <button
                    onClick={() => {
                      deleteBlog(blog._id, currentUser.token);
                    }}
                  >
                    <MdDelete className="text-red-600 cursor-pointer" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <p className="text-gray-500">
                You haven't created any blogs yet!
              </p>
            </div>
          )}
        </>
      )}

      <Link
        to="/blogs/add"
        className="flex text-brand-500 text-lg  items-center justify-center mt-2 space-x-2 border-1 border-brand-500 p-2 "
      >
        <h1 className=" text-brand-500 font-bold">Add Blog</h1>
        <FaPlusCircle className="block" />
      </Link>
    </div>
  );
};

export default MyBlogsPage;
