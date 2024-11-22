const asyncHandler = require("express-async-handler");
const Blog = require("../model/blogModel");

// Get all blogs

const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json(blogs);
});
// add blog
const addBlog = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.body) {
    res.status(400);
    throw new Error("Please add both fields");
  }
  const blog = await Blog.create({
    title: req.body.title,
    body: req.body.body,
  });
  res.status(200).json(blog);
});

// update blog
const editBlog = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const blog = await Blog.findById(id);
  if (!blog) {
    res.status(400);
    throw new Error("Blog not found");
  }
  const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });

  res.status(200).json(updatedBlog);
});

const deleteBlog = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const blog = await Blog.findById(id);
  if (!blog) {
    res.status(400);
    throw new Error("Could not find blog to delete");
  }
  const deletedBlog = await Blog.findByIdAndDelete(id);
  res.status(200).json(deletedBlog);
});

module.exports = { getBlogs, addBlog, editBlog, deleteBlog };
