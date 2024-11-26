import React from "react";
import { BeatLoader } from "react-spinners";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Heading from "../components/Heading";
import axios from "axios";
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:8000/api/blogs/");
        setBlogs(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);
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
