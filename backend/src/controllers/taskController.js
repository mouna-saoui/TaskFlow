import * as taskService from "../services/taskService.js";

export const getTasks = (req, res) => {
  res.json(taskService.getAllTasks());
};

export const getTask = (req, res) => {
  const task = taskService.getTaskById(req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
};

export const createTask = (req, res) => {
  const { title } = req.body;
  if (!title || !title.trim()) return res.status(400).json({ error: "Title is required" });
  const task = taskService.createTask(title.trim());
  res.status(201).json(task);
};

export const updateTask = (req, res) => {
  const { completed } = req.body;
  if (typeof completed !== "boolean") return res.status(400).json({ error: "completed must be a boolean" });
  const task = taskService.updateTask(req.params.id, completed);
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
};

export const deleteTask = (req, res) => {
  const deleted = taskService.deleteTask(req.params.id);
  if (!deleted) return res.status(404).json({ error: "Task not found" });
  res.status(204).send();
};
