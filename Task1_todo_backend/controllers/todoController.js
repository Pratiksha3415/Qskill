const Todo = require("../models/todo");

// CREATE TODO
exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL TODOS
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE TODO
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE TODO
exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// MARK AS COMPLETE
exports.completeTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed: true },
      { new: true }
    );

    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
