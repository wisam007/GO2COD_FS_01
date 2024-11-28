import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:8000/api/blogs/");
        setBlogs(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false); // Reset loading state on error
      }
    };
    fetchBlogs();
  }, []);

  const deleteBlog = async (id, token) => {
    try {
      setIsLoading(true);
      const response = await axios.delete(
        `http://localhost:8000/api/blogs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBlogs(blogs.filter((blog) => blog._id !== id));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const contextData = {
    blogs,
    isLoading,
    deleteBlog,
  };

  return (
    <BlogContext.Provider value={contextData}>{children}</BlogContext.Provider>
  );
};
