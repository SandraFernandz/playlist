import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

// actions is an object, that is the reason why we are destructuring
export const { addMovie, removeMovie } = moviesSlice.actions;

//reducer is not an object, no need to destructure
export const moviesReducer = moviesSlice.reducer;
