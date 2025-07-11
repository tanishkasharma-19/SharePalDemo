import React from 'react';
import './App.css';
import Header from './components/Header';
import Mainpart from './components/Mainpart';
import TrendingItems from './components/TrendingItems';
import ZeroPolicy from './components/ZeroPolicy';
import SharepalPromise from './components/SharepalPromise';
import Benefits from './components/Benefits';
import Impact from './components/Impact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

function Home() {
  return (
    <>
      <Header />
      <Mainpart />
      <TrendingItems />
      <ZeroPolicy />
      <SharepalPromise />
      <Benefits />
      <Impact />
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
