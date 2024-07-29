import React, { useState } from "react";

function AddTaskForm({ addTask, toggleForm }) {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const { title, description } = formData;

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      addTask(title, description);
      setFormData({ title: "", description: "" });
      toggleForm(); // Hide the form after adding the task
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Task</h2>
      <input
        className="w-full p-3 mb-3 border rounded"
        type="text"
        value={title}
        name="title"
        onChange={handleChange}
        placeholder="Task Title"
        required
      />
      <textarea
        name="description"
        className="w-full p-3 mb-3 border rounded"
        rows={5}
        value={description}
        onChange={handleChange}
        placeholder="Task Description"
        required
      />
      <button
        className="w-full p-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition duration-150 ease-in-out"
        type="submit">
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;
