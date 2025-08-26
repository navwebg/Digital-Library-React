import React from 'react';

function Rating({ rating }) {
  const stars = Array(5).fill(0).map((_, i) => (
    <span key={i} className={i < Math.floor(rating) ? 'star filled' : 'star'}>★</span>
  ));
  return <div className="rating">{stars} <span>{rating.toFixed(1)}</span></div>;
}

export default Rating;
