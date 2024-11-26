import React from "react";
import Heading from "../components/Heading";

const AddBlogPage = () => {
  return (
    <div className="flex-col items-center justify-center">
      <Heading title={"Create Your Post"} />
      <div className="bg-white shadow-lg rounded-lg p-6 w-full">
        <form>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Blog Title
            </label>
            <input
              type="title"
              id="title"
              name="title"
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
              type="body"
              id="body"
              name="body"
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
