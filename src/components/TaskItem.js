import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';

const TaskItem = ({ task, onMove }) => {
  const [dueDate, setDueDate] = useState(null);
  const [, drag] = useDrag(() => ({
    type: 'TASK',
    item: { task },
  }));

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const getStatusClasses = () => {
    switch (task.status) {
      case 'New':
        return 'bg-blue-100 border-blue-500';
      case 'Ongoing':
        return 'bg-orange-100 border-orange-500';
      case 'Done':
        return 'bg-green-100 border-green-500';
      default:
        return '';
    }
  };

  return (
    <div ref={drag} className="my-2">
      <ContextMenuTrigger id={task.title}>
        <div className={`p-4 border-l-4 ${getStatusClasses()}`}>
          <h3 className="font-bold">{task.title}</h3>
          <p>{task.description}</p>
          {task.status === 'Ongoing' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Due Date:
              </label>
              <input
                type="datetime-local"
                onChange={handleDateChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {dueDate && new Date(dueDate) < new Date() && (
                <p className="text-red-500 mt-2">Task is overdue!</p>
              )}
            </div>
          )}
        </div>
      </ContextMenuTrigger>
      <ContextMenu id={task.title}>
        <div className="bg-gray-800 text-white p-2 rounded shadow-lg">
          {task.status !== 'New' && (
            <MenuItem onClick={() => onMove(task, 'New')}>Move to New</MenuItem>
          )}
          {task.status !== 'Ongoing' && (
            <MenuItem onClick={() => onMove(task, 'Ongoing')}>
              Move to Ongoing
            </MenuItem>
          )}
          {task.status !== 'Done' && (
            <MenuItem onClick={() => onMove(task, 'Done')}>
              Move to Done
            </MenuItem>
          )}
        </div>
      </ContextMenu>
    </div>
  );
};

export default TaskItem;
