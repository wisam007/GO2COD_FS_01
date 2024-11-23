const asyncHandler = require("express-async-handler");

const Blog = require("../model/blogModel");
const User = require("../model/userModel");
// Get all blogs

const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.status(200).json(blogs);
});

//Get only user blogs
const getMyBlogs = asyncHandler(async (req, res) => {
  const myBlogs = await Blog.find({ "user.userId": req.user }).sort({
    createdAt: -1,
  });
  res.status(200).json(myBlogs);
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
    user: { userId: req.user.id, userName: req.user.name },
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

  // check for user
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User does not exist");
  }

  if (blog.user.userId.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized ");
  }

  //update blog
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

  // check for user
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User does not exist");
  }

  if (blog.user.userId.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized ");
  }
  const deletedBlog = await Blog.findByIdAndDelete(id);
  res.status(200).json(deletedBlog);
});

module.exports = { getBlogs, getMyBlogs, addBlog, editBlog, deleteBlog };
