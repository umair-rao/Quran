import { configureStore } from '@reduxjs/toolkit';
import fetchSurahDataReducer from './GetSurahData';
import fetchSurahDetailReducer from './SurahDetails';

const store = configureStore({
  reducer: {
    surahData : fetchSurahDataReducer,
    surahDetail: fetchSurahDetailReducer,
  },
});

export default store;
