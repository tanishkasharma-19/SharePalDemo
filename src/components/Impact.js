import React from 'react';
import './Impact.css';

export default function Impact() {
  return (
    <section className="impact">
      <h2>Our Impact</h2>
      <div className="impact-scroll-wrapper">
        <div className="impact-stats">
          <div className="impact-stat">
            <h3>250Cr+</h3>
            <p>Saved Together</p>
          </div>
          <div className="impact-stat">
            <h3>4.5M Kg</h3>
            <p>CO2e Saved</p>
          </div>
        </div>
      </div>
    </section>
  );
}
