import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Header from './Components/Header/Header.jsx';
import CardService from './Components/CardService/CardService.jsx';
import Footer from './Components/Footer/Footer.jsx';
import LoginScreen from './Screens/LoginScreen.jsx';
import HomeScreenLogged from './Screens/HomeScreen/HomeScreenLogged.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="/logged" element={<HomeScreenLogged/>}/>
          </Routes>
          <Footer />
  
    </BrowserRouter>
  </React.StrictMode>,
)