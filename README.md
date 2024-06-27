# Todo App Documentation

## Welcome

Welcome to the Todo App!

## Installation

To get started with the Todo app, follow these simple steps:

1. **Clone the repository**:

   Open your command prompt or terminal, then type:

   ```bash
   git clone https://github.com/ReedwanHossain/todo-app
   cd todo-app

   ```

2. **Install dependencies:**:
   While in the todo-app directory, run:

   on the terminal

   ````npm install


   [!WARNING]
   Might need to run

   ```npm config set legacy-peer-deps true

   ````

3. **Running the App:**:
   type on the terminal to run the app

   ```npm start

   ```

# Todo-App Component Overview

## App Component

- **Description**: Central control of the Todo app.
- **Function**: Manages task columns (`New`, `Ongoing`, `Done`) and task movements.

## Board Component

- **Description**: Displays task columns.
- **Function**: Shows tasks, supports drag-and-drop for task movement.

## TaskItem Component

- **Description**: Represents a task.
- **Function**: Displays task details, supports drag-and-drop, integrates context menu.

## Modal Component

- **Description**: Pop-up for adding new tasks.
- **Function**: Allows users to input task details and add tasks to the `New` column.

## ContextMenu Component

- **Description**: Menu for task management.
- **Function**: Provides options to move tasks between columns with right-click.
