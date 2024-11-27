import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [myBlogs, setMyBlogs] = useState([]);

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
  const getMyBlogs = async (token) => {
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:8000/api/blogs/my",
        config
      );
      setMyBlogs(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false); // Reset loading state on error
    }
  };

  const contextData = {
    blogs,
    isLoading,
  };

  return (
    <BlogContext.Provider value={contextData}>{children}</BlogContext.Provider>
  );
};
