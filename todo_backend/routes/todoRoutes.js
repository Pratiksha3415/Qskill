const express = require("express");
const router = express.Router();

const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  completeTodo
} = require("../controllers/todoController");

// Create Todo
router.post("/", createTodo);

// Get Todos
router.get("/", getTodos);

// Update Todo
router.put("/:id", updateTodo);

// Delete Todo
router.delete("/:id", deleteTodo);

// Mark Complete
router.put("/:id/complete", completeTodo);

module.exports = router;
