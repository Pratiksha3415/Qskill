const express = require("express");
const router = express.Router();

const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  searchBooks,
} = require("../controllers/bookController");

// Routes
router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/search", searchBooks);
router.get("/:id", getBookById);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
