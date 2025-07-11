import React from 'react';
import './SharepalPromise.css';

export default function SharepalPromise() {
  return (
    <section className="sharepal-promise">
      <div className="promise-header">  
        <h3>SharePal <span>Promise</span></h3>
      </div>

      
      <div className="promise-scroll-wrapper">
        <div className="promise-items">
          <div className="promise-item">
            <h4>12-Point Quality Check</h4>
            <p>
              Before delivery, we conduct a 12-point quality check to ensure your order meets our quality standard.
            </p>
          </div>

          <div className="promise-item">
            <h4>Lowest Price Guarantee</h4>
            <p>
              We provide lowest price guarantee so you can rent with confidence. No more searching here and there.
            </p>
          </div>

          <div className="promise-item">
            <h4>Prompt Help & Support</h4>
            <p>
              Fast and efficient support, right at your fingertips. We are available from 10 am to 10 pm everyday.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
