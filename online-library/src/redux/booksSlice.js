import { createSlice } from '@reduxjs/toolkit';
import { initialBooks } from '../data';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    list: initialBooks,
  },
  reducers: {
    addBook: (state, action) => {
      state.list.push({ id: (state.list.length + 1).toString(), ...action.payload });
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
