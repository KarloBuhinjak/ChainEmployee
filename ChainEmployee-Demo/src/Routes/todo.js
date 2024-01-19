const { Router } = require("express");
const router = Router();
const Todo = require("../Models/Todo");

router.use((req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/api/v1/auth/userlogin");
  }
});

router.get("/todos", async (req, res) => {
  try {
    const user = req.session.user;

    const todos = await Todo.find({ user: user._id });
    res.render("todo", { todos, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch Todo list" });
  }
});

router.post("/addTodo", async (req, res) => {
  try {
    const user = req.session.user;
    const { text } = req.body;

    const newTodo = new Todo({
      text,
      user: user._id,
    });

    await newTodo.save();
    res.status(201).json({ text: newTodo.text, _id: newTodo._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add Todo item" });
  }
});

router.patch("/toggleTodo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo item not found" });
    }

    todo.isCompleted = !todo.isCompleted;
    await todo.save();

    res.status(200).json({ message: "Todo item toggled successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to toggle Todo item" });
  }
});

router.delete("/deleteTodo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo item not found" });
    }

    await todo.deleteOne();

    res.status(200).json({ message: "Todo item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete Todo item" });
  }
});
module.exports = router;
