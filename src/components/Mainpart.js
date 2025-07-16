import React from 'react';
import './Mainpart.css';

export default function Mainpart() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h2>
          <span className="hello">Hello</span> <span className="pal">Pal!</span>
        </h2>
        <h1>
          <span className="own-experience">
            Own the <span className="highlight">Experience</span>
          </span>
          <br />
          <span className="rent-gear">
            Rent the Gear
          </span>
        </h1>

        <div className="taglines">
          <div className="tagline">
            Good for our <span className="bold">Planet</span>
          </div>
          <div className="tagline">
            Good for your <span className="bold">Pocket</span>
          </div>
        </div>
      </div>
    </main>
  );
}
