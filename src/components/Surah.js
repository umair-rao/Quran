import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurahData } from "../Redux/GetSurah";
import '../styles/surah.css'

const Surah = () => {
  const surahData = useSelector((state) => state.surahData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSurahData());
  }, []);
  console.log(surahData);
  return (
    <div>
      {surahData.surahData?.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.number}</h1>
            <h2>{item.englishName}</h2>
            <h2>{item.name}</h2>
            <p>{item.englishNameTranslation}</p>
            <p>{item.numberOfAyahs}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Surah;
