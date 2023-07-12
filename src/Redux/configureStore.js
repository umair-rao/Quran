import { configureStore } from '@reduxjs/toolkit';
import fetchSurahDataReducer from './GetSurah';

const store = configureStore({
  reducer: {
    surahData : fetchSurahDataReducer,
  },
});

export default store;
