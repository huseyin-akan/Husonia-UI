import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/header/navbar/Navbar.tsx';
import Home from './components/home/Home.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },{
    path: "/utilities",
    element: <div>Hello mazafaka!</div>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar title='Husokania'/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
