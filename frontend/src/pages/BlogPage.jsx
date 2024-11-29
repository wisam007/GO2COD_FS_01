import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { BlogContext } from "../context/BlogContext";
import { BeatLoader } from "react-spinners";

const BlogPage = () => {
  const { id } = useParams();
  const { isLoading, blogs } = useContext(BlogContext);
  const blog = blogs.find((b) => {
    return b._id == id;
  });

  if (isLoading) {
    return (
      <div className="flex my-auto h-svh justify-center items-center">
        <BeatLoader />
      </div>
    );
  }

  if (blog) {
    return (
      <>
        <Heading title="Blog detail" />

        <div className="bg-white shadow rounded-lg p-6">
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
          >
            <FaChevronLeft className="inline mr-1" />{" "}
            <span className="ml-2">Back to Home</span>
          </Link>

          <div className="flex flex-col sm:flex-row sm:space-x-6">
            <div className="mt-4 sm:mt-0 sm:flex-1">
              <h1 className="text-brand-500 text-2xl">{blog.title}</h1>
              <p className="text-gray-600 mb-4">{blog.body} </p>

              <ul className="space-y-2">
                <li>
                  <span className="font-semibold text-gray-800">
                    Posted by:
                  </span>{" "}
                  {blog.user.userName}
                </li>
                <li>
                  <span className="font-semibold text-gray-800">
                    Created at:{" "}
                  </span>
                  {blog.createdAt.split("T")[0]}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default BlogPage;
