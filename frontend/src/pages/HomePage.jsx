<<<<<<< HEAD
import { BeatLoader } from "react-spinners";
import BlogCard from "../components/BlogCard";
import Heading from "../components/Heading";
import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";
const HomePage = () => {
  const { isLoading, blogs } = useContext(BlogContext);

=======
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
>>>>>>> 2472349f217b5e4588a5673a926f9f8f87454dd2
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
