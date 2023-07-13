import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const SURAH_DETAIL = 'SurahDetail/SurahDetail/SURAH_DETAIL';
const baseURL = 'https://api.alquran.cloud/v1/surah';

export const fetchSurahDetail = createAsyncThunk(
    SURAH_DETAIL,
  async (number, { dispatch }) => {
    const response = await axios.get(`${baseURL}/${number}`);
    console.log(response.data)
    dispatch({ type: SURAH_DETAIL, payload: response.data });
  },
);

const initialState = { surahDetail: [] };
const fetchSurahDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SURAH_DETAIL:
      return {
        ...state,
        surahDetail: action.payload,
      };
    default:
      return state;
  }
};
export default fetchSurahDetailReducer;
