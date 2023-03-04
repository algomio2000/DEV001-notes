import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './routes/SignIn';
import WallNotes from './routes/WallNotes';
import Create from './routes/Create';
import Note from './components/Note';
import 'bootstrap/dist/css/bootstrap.min.css';
import  ModalShow  from './components/ModalShow';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/WallNotes" element={<WallNotes />} />
      <Route path="/Note" element={<Note />} />
      <Route path="/ModalShow" element={<ModalShow />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();