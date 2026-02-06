const Book = require("../models/book");

// Create Book
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Single Book
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book)
      return res.status(404).json({ message: "Book not found" });

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Book
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!book)
      return res.status(404).json({ message: "Book not found" });

    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Book
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book)
      return res.status(404).json({ message: "Book not found" });

    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search Books
exports.searchBooks = async (req, res) => {
  try {
    const { title, author } = req.query;

    let query = {};

    if (title)
      query.title = { $regex: title, $options: "i" };

    if (author)
      query.author = { $regex: author, $options: "i" };

    const books = await Book.find(query);

    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
