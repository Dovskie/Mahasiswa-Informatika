import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Breadcrumb from './components/Breadcrumb';
import Home from './components/Home';
import BC from './components/BelajarCoding';
import TipsKuliah from './components/TipsKuliah';
import Faq from './components/FAQ';
import PM from './components/ProyekMahasiswa';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tipskuliah' element={<TipsKuliah />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/proyekmahasiswa' element={<PM />} />
          <Route path='/belajarcoding' element={<BC />} />
        </Routes>
    </Router>
  );
}

export default App;
