import { useDispatch, useSelector } from 'react-redux'
import { fetchSurahDetail } from '../Redux/SurahDetails';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import '../styles/DisplaySurah.css'

const DisplaySurah = () => {
  const dispatch = useDispatch();
  const {id} = useParams();

  const surahDetail = useSelector((state) => state.surahDetail)
  console.log(surahDetail)

  useEffect(() => {
    dispatch(fetchSurahDetail(id));
  }, [dispatch, id]);

  if (!surahDetail || !surahDetail.surahDetail || !surahDetail.surahDetail.data || !surahDetail.surahDetail.data.ayahs) {
    return <div>Loading...</div>;
  }

  const { ayahs } = surahDetail.surahDetail.data;

  return (  
    <div>
      <div>
        <h1>{surahDetail.surahDetail.data.name}</h1>
        <h3>{surahDetail.surahDetail.data.englishName}</h3>
        <h3>Title Meaning: {surahDetail.surahDetail.data.englishNameTranslation}</h3>
        <h3>Revelation city: {surahDetail.surahDetail.data.revelationType}</h3>
      </div>
      {ayahs?.map ((item,index)=> {
        return (
          <div className='surah-detail' key={index}>
            <h4>{item.text}</h4>
            <h4 className='ayah-number'>{item.numberInSurah}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default DisplaySurah
