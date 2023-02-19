import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider} from "react-ruoter-dom";
import Create from './components/Create';
import SingInn from './components/SingInn';
import WallNotes from './components/WallNotes';
const router = createBrowserRouter(
  {
    path:"/",
    element:<SingInn></SingInn>
  },
  {
    path:"/Create",
    element: <Create></Create>,
  },
  {
    path:"/WallNotes",
    element:<WallNotes></WallNotes>
  }
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router= {router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
