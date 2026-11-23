import { v4 as uuidv4 } from "uuid";

// In-memory task storage
let tasks = [];

export const getAllTasks = () => tasks;

export const getTaskById = (id) => tasks.find((t) => t.id === id);

export const createTask = (title) => {
  const task = { id: uuidv4(), title, completed: false, createdAt: new Date().toISOString() };
  tasks.push(task);
  return task;
};

export const updateTask = (id, completed) => {
  const task = tasks.find((t) => t.id === id);
  if (!task) return null;
  task.completed = completed;
  return task;
};

export const deleteTask = (id) => {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};
