import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurahData } from "../Redux/GetSurahData";
import '../styles/surah.css'
import { fetchSurahDetail } from "../Redux/SurahDetails";

const Surah = () => {
  const surahData = useSelector((state) => state.surahData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSurahData());
  }, []);  

  const fetchDetails = (itemNumber) => {
    dispatch(fetchSurahDetail(itemNumber));
  }

  return (
    <div className="container">
      {surahData.surahData?.map((item, index) => {
        return (
          <div className="surah-card" key={index} onClick={() => fetchDetails(item.number)}>
            <div className="number-div">
            <h4 className="number">{item.number}</h4>
            </div>
            <div className="englishName">
            <h4>{item.englishName}</h4>
            <p className="englishTrans">{item.englishNameTranslation}</p>
            </div>
            <div>
            <p>{item.name}</p>        
            <p className="ayahs">{item.numberOfAyahs} Ayahs</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Surah;
