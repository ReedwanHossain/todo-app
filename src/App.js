import React, { useState } from 'react';
import Board from './components/Board';
import Modal from './components/Modal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addTask = (title, description) => {
    const newTask = { title, description, status: 'New' };
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (taskToUpdate, newStatus) => {
    const updatedTasks = tasks.map((currentTask) => {
      if (currentTask === taskToUpdate) {
        return { ...currentTask, status: newStatus };
      }
      return currentTask;
    });

    setTasks(updatedTasks);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Task Manager</h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full max-w-6xl">
          <Board
            title="New"
            tasks={tasks.filter((task) => task.status === 'New')}
            onAdd={openModal}
            onMove={updateTaskStatus}
          />
          <Board
            title="Ongoing"
            tasks={tasks.filter((task) => task.status === 'Ongoing')}
            onMove={updateTaskStatus}
          />
          <Board
            title="Done"
            tasks={tasks.filter((task) => task.status === 'Done')}
            onMove={updateTaskStatus}
          />
        </div>
        <Modal isOpen={showModal} onClose={closeModal} onSubmit={addTask} />
      </div>
    </DndProvider>
  );
};

export default App;
