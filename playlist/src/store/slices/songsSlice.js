import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      // action.payload === string title of song we want to remove
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    // to prevent typing errors inside the string
    // builder.addCase('movie/reset', (state,
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

// actions is an object, that is the reason why we are destructuring
export const { addSong, removeSong } = songsSlice.actions;

//reducer is not an object, no need to destructure
export const songsReducer = songsSlice.reducer;
