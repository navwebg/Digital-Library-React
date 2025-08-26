import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

function BookCard({ book }) {
  return (
    <div className="book-card">
      <div className={`book-cover ${book.coverColor}`} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <Rating rating={book.rating} />
      <Link to={`/book/${book.id}`} className="details-btn">View Details</Link>
    </div>
  );
}

export default BookCard;
