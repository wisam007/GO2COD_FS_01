const express = require("express");

const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  getBlogs,
  addBlog,
  editBlog,
  deleteBlog,
} = require("../controllers/blogController");

router.get("/", getBlogs);
router.post("/", protect, addBlog);

router.put("/:id", protect, editBlog);
router.delete("/:id", protect, deleteBlog);

module.exports = router;
