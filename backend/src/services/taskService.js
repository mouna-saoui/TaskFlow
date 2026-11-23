import Task from "../models/Task.js";

export const getAllTasks = () => Task.find().sort({ createdAt: -1 });

export const getTaskById = (id) => Task.findById(id);

export const createTask = (title) => Task.create({ title });

export const updateTask = (id, completed) =>
  Task.findByIdAndUpdate(id, { completed }, { new: true });

export const deleteTask = (id) => Task.findByIdAndDelete(id);
