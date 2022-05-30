import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/styles/styles.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registrar from './routes/Registrar';
import VerViaje from './routes/VerViaje';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path='/' element={<Registrar />} />
      <Route path='/verviaje' element={<VerViaje />} />
    </Routes>
  </BrowserRouter>
);


