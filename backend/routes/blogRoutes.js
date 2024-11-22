const express = require("express");

const router = express.Router();

const {
  getBlogs,
  addBlog,
  editBlog,
  deleteBlog,
} = require("../controllers/blogController");

router.get("/", getBlogs);
router.post("/", addBlog);

router.put("/:id", editBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
