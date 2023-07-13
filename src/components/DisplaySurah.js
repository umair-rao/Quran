import { useDispatch, useSelector } from 'react-redux'
import { fetchSurahDetail } from '../Redux/SurahDetails';

const DisplaySurah = ({number}) => {
  const dispatch = useDispatch();

  dispatch(fetchSurahDetail(number));
  const surahDetail = useSelector((state) => state.surahDetail)
  console.log(surahDetail)


  return (
    <div>
      <h1>{surahDetail.surahDetail.data.ayahs[0].text}</h1>
    </div>
  )
}

export default DisplaySurah
