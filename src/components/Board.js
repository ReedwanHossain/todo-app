import React from 'react';
import TaskItem from './TaskItem';
import { useDrop } from 'react-dnd';

const Board = ({ title, tasks, onAdd, onMove }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => onMove(item.task, title),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`w-full md:w-1/3 bg-white rounded-lg shadow-lg p-4 ${
        isOver ? 'bg-gray-200' : ''
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {title === 'New' && (
        <button
          onClick={onAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          Add Task
        </button>
      )}
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} onMove={onMove} />
      ))}
    </div>
  );
};

export default Board;
