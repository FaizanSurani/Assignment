import React from "react";
import TaskItem from "./TaskItem";

// TaskList component to render the list of tasks
function TaskList({ tasks, toggleCompleteTask, updateTask }) {
  return (
    <ul className="bg-white p-6 rounded-lg shadow-md mt-6 max-h-96 overflow-y-auto">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleCompleteTask={toggleCompleteTask}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
