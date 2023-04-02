import { faker } from '@faker-js/faker/locale/en';

// This file has nothing to do with Redux
// It exports functions that create random
// movies and song names

export const createRandomMovie = () => {
  return `${faker.word.adjective()} ${faker.word.noun()}`;
};

export const createRandomSong = () => {
  return faker.music.songName();
};
