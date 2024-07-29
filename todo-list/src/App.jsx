import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import tasksData from "./data/tasks.json";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  // Load tasks from the JSON file
  useEffect(() => {
    setTasks(tasksData);
  }, []);

  // Add a new task
  const addTask = (title, description) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
      lastUpdated: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };

  // Update an existing task
  const updateTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, ...updatedTask, lastUpdated: new Date().toISOString() }
          : task
      )
    );
  };

  // Toggle task completion status
  const toggleCompleteTask = (id) => {
    updateTask(id, {
      completed: !tasks.find((task) => task.id === id).completed,
    });
  };

  // Handle search input change and update URL parameter
  const handleSearch = (e) => {
    setSearchParams({ search: e.target.value });
  };

  const searchTerm = searchParams.get("search") || "";
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Todo List</h1>
        <div className="mb-6 flex justify-center items-center">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full lg:w-1/2 p-3 mb-4 border rounded"
          />
          <button
            className="ml-4 p-3 rounded bg-green-600 text-white hover:bg-green-700 transition duration-150 ease-in-out"
            onClick={() => setShowAddTaskForm(!showAddTaskForm)}>
            {showAddTaskForm ? "Hide Form" : "Add Task"}
          </button>
        </div>
        {showAddTaskForm && (
          <AddTaskForm
            addTask={addTask}
            toggleForm={() => setShowAddTaskForm(false)}
          />
        )}
        <TaskList
          tasks={filteredTasks}
          toggleCompleteTask={toggleCompleteTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
}

export default App;
