import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Header from './Components/Header/Header.jsx';
import CardService from './Components/CardService/CardService.jsx';
import Footer from './Components/Footer/Footer.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
        <Header />
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
          </Routes>
          <Footer />
  
    </BrowserRouter>
  </React.StrictMode>,
)