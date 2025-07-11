import React from 'react';
import './Benefits.css';

export default function Benefits() {
  return (
    <section className="benefits">
      <h2>Benefits</h2>
      <div className="benefit-scroll-wrapper">
        <div className="benefit-items">
          <div className="benefit-item">
            <img src="/download (4).jpeg" alt="Planet" />
            <h3>Good for our Planet</h3>
            <p>
              Reduce waste, cut down on landfills,
              and lower your carbon footprint by renting.
            </p>
          </div>
          <div className="benefit-item">
            <img src="/Benefit2.jpeg" alt="Quality" />
            <h3>Great for Adventure</h3>
            <p>
              Save big by renting instead of buying.
              Enjoy premium products without breaking the bank.
            </p>
          </div>
          <div className="benefit-item">
            <img src="/Benefit3.jpeg" alt="Pocket Friendly" />
            <h3>Easy on Your Pocket</h3>
            <p>
              Save big by renting instead of buying.
              Enjoy premium products without breaking the bank.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
