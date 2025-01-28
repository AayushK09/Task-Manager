// pages/index.js
import { useState } from 'react';
import TaskList from '../components/TaskList';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObject = {
        id: Date.now(),
        text: newTask,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTaskObject]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Task Manager</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            className="flex-grow p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleAddTask}
            className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>
        <TaskList
          tasks={tasks}
          onDelete={handleDeleteTask}
          onToggleComplete={handleToggleComplete}
        />
      </div>
    </div>
  );
}
