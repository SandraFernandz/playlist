import { configureStore } from '@reduxjs/toolkit';
import { songsReducer, addSong, removeSong } from './slices/songsSlice';
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

const startingState = store.getState();

console.log('store', store);
console.log('startingState', JSON.stringify(startingState));

const finalState = store.getState();

console.log('finalState', JSON.stringify(finalState));

export { store };
export { addSong, removeSong, addMovie, removeMovie };
