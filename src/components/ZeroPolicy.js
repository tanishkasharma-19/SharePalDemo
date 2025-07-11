import React from 'react';
import './ZeroPolicy.css';

export default function ZeroPolicy() {
  return (
    <section className="zero-policy">
      <h2>
        Transparent prices <span className="Highlight">Zero Surprises</span>
      </h2>


      <div className="policy-scroll-wrapper">
        <div className="policy-items">
          <div className="policy-item">
            <h3>Zero Security Deposit</h3>
            <p>We’ll leave the deposit drama to your landlord because your adventures should be exciting, not expensive.</p>
            <img src="/Zero Security.png" alt="Zero Security Deposit" />
          </div>

          <div className="policy-item">
            <h3>Zero Delivery Charges</h3>
            <p>Get your rentals delivered to your doorstep with no extra delivery cost.</p>
            <img src="/Zero Deposit.png" alt="Zero Delivery Charges" />
          </div>

        
          <div className="policy-item">
            <h3>Zero Hidden Charges </h3>
            <p>Pay what you see. No surge fee, 
              No Cancellation fee, no iPhone fee, no why are you still reading fee, no......</p>
            <img src="/Deposit.png" alt="Zero Late Fees" />
          </div>
        </div>
      </div>
    </section>
  );
}
