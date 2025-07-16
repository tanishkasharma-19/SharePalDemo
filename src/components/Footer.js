import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-columns">
        <div className="footer-col">
          <h4>Action Cameras</h4>
          <ul>
            <li>Action Camera Mounts</li>
            <li>GoPro Cameras</li>
            <li>DJI Cameras</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Cameras</h4>
          <ul>
            <li>DSLR Lens</li>
            <li>Wildlife Photography</li>
            <li>Tripod and camera accessories</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Trekking Gear</h4>
          <ul>
            <li>Trekking Jackets</li>
            <li>Trekking Shoes</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Riding Gear</h4>
          <ul>
            <li>Adventure Bikes</li>
            <li>Riding Gear</li>
            <li>Riding Luggage</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Creator Gear</h4>
          <ul>
            <li>Wireless & Collar Mics</li>
            <li>UNLMTD Vlogging</li>
            <li>Gimbals and Grips</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SharePal. All rights reserved.</p>
      </div>
    </footer>
  );
}
