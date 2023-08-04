import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/home/Home';
import AboutMe from './components/about-me/AboutMe';
import ContactMe from './components/contact-me/ContactMe';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

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
  },{
    path: "/contact-me",
    element: <ContactMe/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <div className="hus-routed-content">
    <RouterProvider router={router} />
    </div>
    <Footer/>
    
  </React.StrictMode>,
)
