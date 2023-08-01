import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/header/navbar/Navbar.tsx';
import Home from './components/home/Home.tsx';
import AboutMe from './components/about-me/AboutMe.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },{
    path: "/utilities",
    element: <div>Hello mazafaka!</div>
  },{
    path: "/about-me",
    element: <AboutMe/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar title='Husokania'/>
    <div className="hus-routed-content">
    <RouterProvider router={router} />
    </div>
    
  </React.StrictMode>,
)
