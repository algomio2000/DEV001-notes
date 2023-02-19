import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider} from "react-ruoter-dom";

const router = createBrowserRouter(
  {
    path:"/",
    element:<h1>SingInn</h1>
  },
  {
    path:"/Create",
    element:<h1>Create</h1>
  },
  {
    path:"/WallNotes",
    element:<h1>WallNotes</h1>
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
