# Todo List Application
## Overview
This Todo List application is built using React. It allows users to manage their tasks effectively. The key features include creating tasks, updating tasks, marking tasks as done, searching tasks, and displaying tasks in an expandable list format. The application uses a dummy JSON file as a data repository.

## System Design

### Components
- **App**: The main component that holds the state for tasks, handles the search functionality, and toggles the "Add Task" form visibility.
- **AddTaskForm**: A form component that allows users to add new tasks.
- **TaskList**: A component that renders a list of tasks.
- **TaskItem**: A component that represents an individual task, allowing it to be edited, expanded, or marked as completed.

### Features
- **Create Task**: Users can add new tasks with a title and description.
- **Update Task**: Users can edit the title and description of existing tasks.
- **Mark as Done**: Users can mark tasks as completed.
- **Search Tasks**: Users can filter tasks based on the search term.
- **Expandable List**: Tasks can be expanded to show their description and last update timestamp.
- **URL Parameters**: The search functionality is handled using URL parameters for better navigation and bookmarking.

## Implementation

### AddTaskForm Component
- Handles the form state for title and description.
- Calls the `addTask` function passed as a prop to add a new task.
- Resets the form fields and hides the form upon successful submission.

### TaskItem Component
- Displays individual task details.
- Allows task completion toggling, editing, and expanding.
- Calls `toggleCompleteTask` and `updateTask` functions passed as props to update the task state in the App component.

### TaskList Component
- Maps through the list of tasks and renders each `TaskItem`.

### App Component
- Manages the state for tasks and search term.
- Loads initial tasks from a dummy JSON file.
- Handles adding, updating, and toggling tasks.
- Filters tasks based on the search term using URL parameters.
- Toggles the visibility of the `AddTaskForm`.

## Setup and Run

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
2. Navigate to the project directory:
   ```bash
   cd todo-list
3. Install dependencies:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm run dev
