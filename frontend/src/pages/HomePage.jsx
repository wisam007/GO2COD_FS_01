import { BeatLoader } from "react-spinners";
import BlogCard from "../components/BlogCard";
import Heading from "../components/Heading";
import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
const HomePage = () => {
  const { isLoading, blogs } = useContext(BlogContext);

  return (
    <>
      <Heading title="Recent Blogs" />
      {isLoading && (
        <div className="h-96 flex items-center justify-center">
          <BeatLoader />
        </div>
      )}
      {!isLoading &&
        blogs.map((blog, index) => <BlogCard key={index} blog={blog} />)}
    </>
  );
};

export default HomePage;
