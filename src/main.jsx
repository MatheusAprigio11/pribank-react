import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
        </Routes>
  
    </BrowserRouter>
  </React.StrictMode>,
)