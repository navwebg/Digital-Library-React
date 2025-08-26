import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCard({ category }) {
  return (
    <Link to={`/books/${category.id}`} className="category-card">
      <div className="category-icon" />
      <p>{category.name}</p>
    </Link>
  );
}

export default CategoryCard;
