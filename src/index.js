import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToggleIntro from './ToggleIntro';
import RubberduckIntro from './RubberduckIntro';
import Biography from './Biography';
import ContactMe from './ContactMe';
import Construction from './construction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="toggle_intro" element={<ToggleIntro />} />
        <Route path="rubberduck_intro" element={<Construction />} />
        <Route path="biography" element={<Construction />} />
        <Route path="minutebook_intro" element={<Construction />} />
        <Route path="contactme" element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
