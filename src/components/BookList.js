import React, { useState, useEffect } from 'react';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Lista de Libros</h1>
      <ul className="space-y-2">
        {books.map(book => (
          <li key={book.id} className="p-2 border rounded-md">
            <h2 className="font-semibold">{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
