import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Rating from '../components/Rating';

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector(state => state.books.list.find(b => b.id === id));

  if(!book) return <p>Book not found</p>;

  return (
    <div className="book-details">
      <button onClick={() => navigate('/books')}>Back to Browse</button>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <Rating rating={book.rating} />
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetails;
