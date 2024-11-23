const express = require("express");

const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  getBlogs,
  addBlog,
  editBlog,
  deleteBlog,
  getMyBlogs,
} = require("../controllers/blogController");

router.get("/", getBlogs);
router.post("/", protect, addBlog);

router.put("/:id", protect, editBlog);
router.delete("/:id", protect, deleteBlog);
router.get("/my", protect, getMyBlogs);
module.exports = router;
