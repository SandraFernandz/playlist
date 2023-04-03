import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, song) {},
  },
});
const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

const startingState = store.getState();

console.log('store', store);
console.log('startingState', JSON.stringify(startingState));

store.dispatch(songsSlice.actions.addSong('some song'));

const finalState = store.getState();

console.log('finalState', JSON.stringify(finalState));

export { store };
export const { addSong } = songsSlice.actions;
