// components/TaskList.js
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggleComplete }) => (
  <div className="space-y-4">
    {tasks.map((task) => (
      <Task
        key={task.id}
        task={task}
        onDelete={onDelete}
        onToggleComplete={onToggleComplete}
      />
    ))}
  </div>
);

export default TaskList;
