import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes, Route} from "react-ruoter-dom";
//import Create from './components/Create';
import SingInn from './components/SingInn';
//import WallNotes from './components/WallNotes';
ReactDOM.render(
<BrowserRouter>
<Routes>
  <Route path="/" element= {<SingInn />} />
</Routes>
</BrowserRouter>,
document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
