import React, { useState } from "react";

function TaskItem({ task, toggleCompleteTask, updateTask }) {
  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isExpandable, setIsExpandable] = useState(false);
  const { title, description } = formData;

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle task update
  const handleUpdate = () => {
    if (title.trim() && description.trim()) {
      updateTask(task.id, { title, description });
      setIsEditing(false);
    }
  };

  return (
    <li className="border-b border-gray-200 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompleteTask(task.id)}
            className="mr-2"
          />
          <span className={`flex-1 ${task.completed ? "line-through" : ""}`}>
            {task.title}
          </span>
        </div>
        <div>
          <button
            className="mr-2 text-blue-600"
            onClick={() => setIsExpandable(!isExpandable)}>
            {isExpandable ? "Collapse" : "Expand"}
          </button>
          <button
            className="text-green-600"
            onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>
      </div>
      {isExpandable && (
        <div className="mt-2">
          <p>{task.description}</p>
          <p className="text-sm text-gray-600">
            Last Updated: {new Date(task.lastUpdated).toLocaleString()}
          </p>
        </div>
      )}
      {isEditing && (
        <div className="mt-2">
          <input
            className="w-full p-3 mt-2 rounded border"
            type="text"
            value={title}
            name="title"
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            className="w-full p-3 mt-2 rounded border"
            rows={3}
            value={description}
            onChange={handleChange}
            required
          />
          <button
            className="w-full p-3 mt-2 rounded transition duration-150 ease-in-out bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleUpdate}>
            Update Task
          </button>
        </div>
      )}
    </li>
  );
}

export default TaskItem;
