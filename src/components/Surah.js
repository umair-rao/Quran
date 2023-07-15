import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurahData } from "../Redux/GetSurahData";
import '../styles/surah.css'
import { useNavigate } from "react-router";

const Surah = () => {
  const surahData = useSelector((state) => state.surahData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSurahData());
  }, []);  

  const handleClick = (itemId) => {
    navigate(`/Surah/${itemId}`);
  }
  
  return (
    <div className="container">
      {surahData.surahData?.map((item, index) => {
        return (
          <div className="surah-card" key={index} onClick={() => handleClick(item.number)}>
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
