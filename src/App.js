import React, { useState } from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import DeleteBook from './components/DeleteBook';

function App() {
  const [books, setBooks] = useState([]);

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <AddBook />
        <BookList />
        <DeleteBook onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
