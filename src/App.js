
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './Components/About';
import Portfolio from './Components/portfolio.jsx';
import Contact from './Components/Contact';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
