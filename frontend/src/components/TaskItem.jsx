export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? "task-item--completed" : ""}`}>
      <input
        type="checkbox"
        className="task-checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id, !task.completed)}
      />
      <span className="task-title">{task.title}</span>
      <button className="btn-delete" onClick={() => onDelete(task.id)} aria-label="Delete task">
        ✕
      </button>
    </div>
  );
}
