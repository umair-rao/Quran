import DisplaySurah from './components/DisplaySurah';
import Surah from './components/Surah';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Surah/>} />

        <Route path="/Surah/:id" element={<DisplaySurah />} />
      </Routes>
    </div>
  );
}

export default App;
