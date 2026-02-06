const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const todoRoutes = require("./routes/todoRoutes");
app.use("/api/todos", todoRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
