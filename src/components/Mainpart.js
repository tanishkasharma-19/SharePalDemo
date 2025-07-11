import React from 'react';
import CategoriesDropdown from './CategoriesDropdown';
import './Mainpart.css';

 export default function Hero() {
  return (
    <section className="hero">
      <h2>"Own the Experience, Rent the Gear"</h2>
      <p>Explore top-quality gear and share the joy of adventure.</p>
      <CategoriesDropdown />
    </section>
  );
}
