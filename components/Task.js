// components/Task.js
const Task = ({ task, onDelete, onToggleComplete }) => (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="mr-4"
        />
        <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
  
  export default Task;
  