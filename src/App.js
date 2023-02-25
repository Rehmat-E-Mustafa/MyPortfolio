
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './Components/About';
import Portfolio from './Components/portfolio.jsx';
import Contact from './Components/Contact';
import Illustration from './Components/Illustration';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Portfolio />} />
        <Route path="/illustration" element={<Illustration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
