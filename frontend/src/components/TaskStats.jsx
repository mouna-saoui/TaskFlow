export default function TaskStats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div className="stats">
      <div className="stat-card">
        <span className="stat-number">{total}</span>
        <span className="stat-label">All Tasks</span>
      </div>
      <div className="stat-card stat-card--completed">
        <span className="stat-number">{completed}</span>
        <span className="stat-label">Completed</span>
      </div>
      <div className="stat-card stat-card--pending">
        <span className="stat-number">{pending}</span>
        <span className="stat-label">Pending</span>
      </div>
    </div>
  );
}
