import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskStats from "./components/TaskStats";
import TaskList from "./components/TaskList";
import * as taskService from "./services/taskService";
import "./styles/global.css";
import "./styles/App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    taskService.fetchTasks()
      .then(setTasks)
      .catch(() => setError("Failed to load tasks."));
  }, []);

  const handleAdd = async (title) => {
    try {
      const task = await taskService.createTask(title);
      setTasks((prev) => [...prev, task]);
    } catch {
      setError("Failed to create task.");
    }
  };

  const handleToggle = async (id, completed) => {
    try {
      const updated = await taskService.updateTask(id, completed);
      setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
    } catch {
      setError("Failed to update task.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await taskService.deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch {
      setError("Failed to delete task.");
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <h2 className="page-title">My Todo List</h2>
        {error && <p className="error-msg">{error}</p>}
        <TaskForm onAdd={handleAdd} />
        <TaskStats tasks={tasks} />
        <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
      </main>
    </div>
  );
}
