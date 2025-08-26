import React from 'react';
import { initialCategories } from '../data';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import CategoryCard from '../components/CategoryCard';

function Home() {
  const books = useSelector(state => state.books.list);
  const popularBooks = [...books].sort((a,b) => b.rating - a.rating).slice(0, 3);

  return (
    <div>
      <section className="welcome">
        <h1>Welcome to Digital Library</h1>
        <p>Discover thousands of books across various genres.</p>
      </section>

      <section className="categories">
        <h2>Browse Categories</h2>
        <div className="category-list">
          {initialCategories.map(cat => <CategoryCard key={cat.id} category={cat} />)}
        </div>
      </section>

      <section className="popular-books">
        <h2>Popular Books</h2>
        <div className="book-list">
          {popularBooks.map(book => <BookCard key={book.id} book={book} />)}
        </div>
      </section>
    </div>
  );
}

export default Home;
