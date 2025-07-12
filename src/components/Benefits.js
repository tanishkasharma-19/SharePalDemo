import React from 'react';
import './Benefits.css';

export default function Benefits() {
  return (
    <section className="benefits">
      <h2>Benefits</h2>
      <div className="benefit-scroll-wrapper">
        <div className="benefit-items">

          <div className="benefit-item">
            <img 
              src="/Benefit1.jpeg" 
              alt="1"/>
            <h3>Good for our Planet</h3>
            <p>
              Reduce waste, cut down on landfills,
              and lower your carbon footprint by renting.
            </p>
          </div>

          <div className="benefit-item">
            <img 
              src="/Benefit2.jpeg" 
              alt="2"/>
            <h3>Great for Adventure</h3>
            <p>
              Save big by renting instead of buying.
              Enjoy premium products without breaking the bank.
            </p>
          </div>

          <div className="benefit-item">
            <img 
              src="/Benefit3.jpeg" 
              alt="3"/>
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

