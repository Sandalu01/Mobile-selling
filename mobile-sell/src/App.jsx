import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage';
import Signup from './Components/Signup';
import AboutPage from './Components/AboutPage';
import NaviBar from './Components/NaviBar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import BestSellersPage from './Components/BestSellersPage';
import NewArrivalsPage from './Components/NewArrivalsPage';
import LatestModelsPage from './Components/LatestModelsPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <NaviBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/latest-models" element ={<LatestModelsPage/>} />
        <Route path="/best-sellers" element={<BestSellersPage/>} />
        
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default App
