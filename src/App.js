import React from 'react';
import './App.css';
import Header from './components/Header';
import Mainpart from './components/Mainpart';
import CategoriesGrid from './components/CategoriesGrid';
import TrendingItems from './components/TrendingItems';
import Rent from './components/Rent';
import ZeroPolicy from './components/ZeroPolicy';
import SharepalPromise from './components/SharepalPromise';
import Benefits from './components/Benefits';
import Last from './components/Last';
import Footer from './components/Footer';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

function Home() {
  return (
    <>
      <Header />
      <Mainpart />
       <CategoriesGrid /> 
      <TrendingItems />
      <Rent />
      <ZeroPolicy />
      <SharepalPromise />
      <Benefits />
      <Last />
      <Footer/>
      
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
