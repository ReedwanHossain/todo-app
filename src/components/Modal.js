import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    onSubmit(title, description);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 mx-4">
        <h2 className="text-2xl font-bold mb-4">New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              id="title"
              name="title"
              type="text"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              id="description"
              name="description"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
