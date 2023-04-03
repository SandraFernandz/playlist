import { configureStore, createSlice } from '@reduxjs/toolkit';

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
export const { addSong, removeSong } = songsSlice.actions;
