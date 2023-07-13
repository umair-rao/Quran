import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_SURAH_DATA = 'SurahData/SurahData/SURAH_DATA';
const baseURL = 'https://api.alquran.cloud/v1/surah';

export const fetchSurahData = createAsyncThunk(
    FETCH_SURAH_DATA,
  async (test, { dispatch }) => {
    const response = await axios.get(baseURL);
    dispatch({ type: FETCH_SURAH_DATA, payload: response.data.data });
  },
);

const initialState = { surahData: [] };
const fetchSurahDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SURAH_DATA:
      return {
        ...state,
        surahData: action.payload,
      };
    default:
      return state;
  }
};

export default fetchSurahDataReducer;
