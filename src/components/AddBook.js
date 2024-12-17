import React, { useState } from 'react';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = { title, author, year };

    fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Libro agregado:', data);
        setTitle('');
        setAuthor('');
        setYear('');
      })
      .catch(error => console.error('Error adding book:', error));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Agregar un Libro</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
          className="p-2 border rounded-md w-full"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Autor"
          className="p-2 border rounded-md w-full"
          required
        />
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Año"
          className="p-2 border rounded-md w-full"
          required
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
        >
          Agregar Libro
        </button>
      </form>
    </div>
  );
}

export default AddBook;
