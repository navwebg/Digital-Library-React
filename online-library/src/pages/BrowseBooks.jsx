import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(state => state.books.list);
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter(book => 
    (category ? book.category === category : true) &&
    (book.title.toLowerCase().includes(search.toLowerCase()) || 
     book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <h1>Browse Books {category && `- ${category}`}</h1>
      <input type="text" placeholder="Search books..." value={search} onChange={e => setSearch(e.target.value)} />
      <div className="book-list">
        {filteredBooks.length > 0 ? filteredBooks.map(book => <BookCard key={book.id} book={book} />)
        : <p>No books found.</p>}
      </div>
    </div>
  );
}

export default BrowseBooks;
