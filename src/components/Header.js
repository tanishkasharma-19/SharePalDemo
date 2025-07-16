import React from 'react';
import './Header.css';
import { FiMapPin, FiCalendar, FiUser, FiSearch, FiShoppingCart } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/LOGO.png" alt="Logo" className="logo-img" />
      </div>

      <div className="header-center">
        <div className="rental-bar">
          <button className="location-btn">
            <FiMapPin />
            <span>Hyderabad</span>
          </button>
          <span className="divider"></span>
          <button className="date-btn">
            <FiCalendar />
            <span>Delivery Date</span>
          </button>
          <span className="divider"></span>
          <button className="date-btn">
            <FiCalendar />
            <span>Pickup Date</span>
          </button>
          <span className="divider"></span>
          <button className="select-btn">
            <FiCalendar />
            <span>Select</span>
          </button>
        </div>
      </div>

      <div className="header-right">
        <button className="icon-btn"><FiSearch /></button>
        <button className="icon-btn"><FiShoppingCart /></button>
        <button className="login-btn"><FiUser /><span>Hi, Login</span></button>
      </div>
    </header>
  );
}
