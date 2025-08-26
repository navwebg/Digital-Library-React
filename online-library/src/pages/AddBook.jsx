import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import { initialCategories } from '../data';

function AddBook() {
  const [form, setForm] = useState({title:'', author:'', description:'', category:'fiction', rating:3, coverColor:'blue'});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBook(form));
    navigate('/books');
  };

  return (
    <div className="add-book">
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <input required placeholder="Title" value={form.title} onChange={e => setForm({...form, title:e.target.value})} />
        <input required placeholder="Author" value={form.author} onChange={e => setForm({...form, author:e.target.value})} />
        <textarea required placeholder="Description" value={form.description} onChange={e => setForm({...form, description:e.target.value})} />
        <select value={form.category} onChange={e => setForm({...form, category:e.target.value})}>
          {initialCategories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <input type="number" min="1" max="5" value={form.rating} onChange={e => setForm({...form, rating:Number(e.target.value)})} />
        <select value={form.coverColor} onChange={e => setForm({...form, coverColor:e.target.value})}>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="gray">Gray</option>
          <option value="purple">Purple</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
