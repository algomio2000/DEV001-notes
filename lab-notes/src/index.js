import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes, Route} from "react-router-dom";

import SingIn from './routes/SingIn';
import Dashboard from './routes/Dashboard';
import EditProfile from './routes/EditProfile';
import WallNotes from './routes/WallNotes';
import SignOuth from './routes/SignOuth';
import PublicProfile from './routes/PublicProfile';
import ChooseUsename from './routes/choose-username';
import Create from './routes/Create';
ReactDOM.render(
<BrowserRouter>
<Routes>
  <Route path="/" element= {<App />} />
  <Route path= "/SingIn" element= {<SingIn />}/>
  <Route path= "/Dashboard" element= {<Dashboard />}/>
  <Route path= "/EditProfile" element= {<EditProfile />}/>
  <Route path = "/Create" element ={<Create />}/>
  <Route path = "/WallNotes" element ={<WallNotes />} />
  <Route path = "/SignOut" element ={<SignOuth />} />
  <Route path = "/U/username:" element={<PublicProfile />}/>
 
</Routes>
</BrowserRouter>,
document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();