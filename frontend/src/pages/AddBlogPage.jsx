import React, { useContext, useState } from "react";
import Heading from "../components/Heading";
import { AuthContext } from "../context/AuthContext";
import { BlogContext } from "../context/BlogContext";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const AddBlogPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, currentUser } = useContext(AuthContext);
  const { blogs, isLoading, addBlog } = useContext(BlogContext);
  const [formData, setFormData] = useState({ title: "", body: "" });

  // Redirect if the user is not logged in
  if (!isAuthenticated || !currentUser) {
    navigate("/login");
    return null;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(formData, currentUser.token);
  };

  return (
    <div className="flex-col items-center justify-center">
      <Heading title={"Create Your Post"} />
      <div className="bg-white shadow-lg rounded-lg p-6 w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              className="border bg-slate-100 rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="body"
              className="block text-gray-700 font-bold mb-2"
            >
              Blog Body
            </label>
            <textarea
              type="text"
              id="body"
              name="body"
              onChange={handleChange}
              className="bg-slate-100 border rounded w-full h-44 py-2 px-3"
              required
            />
          </div>

          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="bg-brand-500 text-white px-4 py-2 rounded hover:bg-brand-700"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlogPage;
