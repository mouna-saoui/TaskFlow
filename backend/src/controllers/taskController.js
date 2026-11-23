import * as taskService from "../services/taskService.js";

export const getTasks = async (req, res) => {
  try {
    res.json(await taskService.getAllTasks());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createTask = async (req, res) => {
  const { title } = req.body;
  if (!title || !title.trim()) return res.status(400).json({ error: "Title is required" });
  try {
    const task = await taskService.createTask(title.trim());
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateTask = async (req, res) => {
  const { completed } = req.body;
  if (typeof completed !== "boolean") return res.status(400).json({ error: "completed must be a boolean" });
  try {
    const task = await taskService.updateTask(req.params.id, completed);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deleted = await taskService.deleteTask(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Task not found" });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
