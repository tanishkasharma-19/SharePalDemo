import React from 'react';
import './TrendingItems.css';
import { Link } from 'react-router-dom';

export default function TrendingItems() {
  return (
    <section className="trending-items">
      <h2 className="section-heading">
        <span className="highlight">Top Categories</span> to choose from
      </h2>

      <div className="items-grid">
        <Link to="/product/camera" className="item-card">
          <img src="/DSLR Camera.jpeg" alt="DSLR Camera" />
          <h3>DSLR Camera</h3>
          
        </Link>

        <Link to="/product/riding" className="item-card">
          <img src="/Riding.jpeg" alt="Riding Gear" />
          <h3>Riding Gear</h3>
          
        </Link>

        <Link to="/product/trekking" className="item-card">
          <img src="/Trkking Item.jpeg" alt="Trekking Items" />
          <h3>Trekking Items</h3>
          
        </Link>

        <Link to="/product/gaming" className="item-card">
          <img src="/Gaming Console.jpeg" alt="Gaming Console" />
          <h3>Gaming Console</h3>
        
        </Link>

        
        <Link to="/product/winter" className="item-card">
          <img src="/Winter.jpeg" alt="Winter Wear" />
          <h3>Winter Wear</h3>
          
        </Link>

      
        <Link to="/product/bikes" className="item-card">
          <img src="/Yamaha.jpeg" alt="Audio Equipment" />
          <h3>Bikes</h3>
          
        </Link>

      
        <Link to="/product/camping-gear" className="item-card">
          <img src="/Tents.jpeg" alt="Camping Gear" />
          <h3>Camping Gear</h3>
        
        </Link>
         <Link to="/product/creator" className="item-card">
          <img src="/Tanishka.jpeg" alt="Camping Gear" />
          <h3>Creator Guide</h3>
           </Link>
       

        
        
      </div>
    </section>
  );
}
