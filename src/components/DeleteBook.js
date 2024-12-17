import React from 'react';

function DeleteBook({ id, onDelete }) {
  const handleDelete = () => {
    fetch(`http://localhost:3000/books/${id}`, {
      method: 'DELETE',
    })
      .then(() => onDelete(id))
      .catch((error) => console.error('Error deleting book:', error));
  };

  return (
    <button
      onClick={handleDelete}
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
    >
      Eliminar
    </button>
  );
}

export default DeleteBook;
