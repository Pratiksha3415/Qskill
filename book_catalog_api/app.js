
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/books", bookRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Book Catalog API Running");
});

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
