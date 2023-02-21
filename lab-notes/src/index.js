import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SingIn from './routes/SingIn';
import WallNotes from './routes/WallNotes';
import Create from './routes/Create';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/WallNotes" element={<WallNotes />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();