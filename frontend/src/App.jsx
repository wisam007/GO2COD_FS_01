import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyBlogsPage from "./pages/MyBlogsPage";
import AddBlogPage from "./pages/AddBlogPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/blogs/my" element={<MyBlogsPage />} />
          <Route path="/blogs/add" element={<AddBlogPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
