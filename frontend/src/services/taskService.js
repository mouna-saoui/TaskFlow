import axios from "axios";

const api = axios.create({ baseURL: "/api/tasks" });

export const fetchTasks = () => api.get("/").then((r) => r.data);
export const createTask = (title) => api.post("/", { title }).then((r) => r.data);
export const updateTask = (id, completed) => api.patch(`/${id}`, { completed }).then((r) => r.data);
export const deleteTask = (id) => api.delete(`/${id}`);
