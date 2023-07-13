import DisplaySurah from './components/DisplaySurah';
import Surah from './components/Surah';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Surah/>} />
        <Route path="/1" element={<DisplaySurah />} />
      </Routes>
    </div>
  );
}

export default App;
