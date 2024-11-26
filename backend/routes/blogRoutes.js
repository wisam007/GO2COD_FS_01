const express = require("express");

const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  getBlogs,
  addBlog,
  editBlog,
  deleteBlog,
  getMyBlogs,
  openBlog,
} = require("../controllers/blogController");

router.get("/", getBlogs);
router.post("/", protect, addBlog);

router.put("/:id", protect, editBlog);
router.get("/:id", openBlog);
router.delete("/:id", protect, deleteBlog);
router.get("/my", protect, getMyBlogs);
module.exports = router;
