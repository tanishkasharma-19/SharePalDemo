import React, { useRef } from 'react';
import './Rent.css';

export default function Rent() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -250,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 250,
      behavior: 'smooth',
    });
  };

  return (
    <section className="rent-items">
      <h2 className="rent-heading">
        <span className="highlight">Trending Items</span> people love to rent
      </h2>

      <div className="rent-carousel">
        
        <button className="scroll-btn left-btn" onClick={scrollLeft}>
          &#8592;
        </button>

        <div className="rent-grid" ref={scrollRef}>
          
          <div className="rent-card">
            <img src="/Selfie.png" alt="Trekking Shoes" />
            <h3>Unisex Trek100 Boots</h3>
            <p>Full Waterproof; High Ankle</p>
            <div className="booked">&#8599; 584 booked</div>
            <div className="rating">⭐⭐⭐⭐⭐ (4.8)</div>
          </div>

          <div className="rent-card">
            <img src="/PS5.png" alt="PS5 Combo" />
            <h3>PS5 All in one Combo</h3>
            <p>Games pre-installed</p>
            <div className="booked">&#8599; 514 booked</div>
            <div className="rating">⭐⭐⭐⭐☆ (4.5)</div>
          </div>

          <div className="rent-card">
            <img src="/Riding.png" alt="Riding Jacket" />
            <h3>Men Riding Jacket</h3>
            <p>All season with protection</p>
            <div className="booked">&#8599; 446 booked</div>
            <div className="rating">⭐⭐⭐⭐⭐ (4.8)</div>
          </div>

          <div className="rent-card">
            <img src="/Camping.png" alt="Riding Pants" />
            <h3>Riding Pants</h3>
            <p>Hip & knee protection</p>
            <div className="booked">&#8599; 421 booked</div>
            <div className="rating">⭐⭐⭐⭐☆ (4.5)</div>
          </div>

          <div className="rent-card">
            <img src="/Hiking.png" alt="Riding Boots" />
            <h3>Riding Boots</h3>
            <p>Comfort & grip boots</p>
            <div className="booked">&#8599; 406 booked</div>
            <div className="rating">⭐⭐⭐⭐☆ (4.7)</div>
          </div>

          <div className="rent-card">
            <img src="/Tents.jpeg" alt="Camping Tent" />
            <h3>Camping Tent</h3>
            <p>2-person waterproof</p>
            <div className="booked">&#8599; 352 booked</div>
            <div className="rating">⭐⭐⭐⭐☆ (4.6)</div>
          </div>

          <div className="rent-card">
            <img src="/Camera.png" alt="DSLR Camera" />
            <h3>Canon DSLR</h3>
            <p>18MP with accessories</p>
            <div className="booked">&#8599; 287 booked</div>
            <div className="rating">⭐⭐⭐⭐⭐ (4.9)</div>
          </div>

          <div className="rent-card">
            <img src="/Yamaha.jpeg" alt="Adventure Bike" />
            <h3>Adventure Bike</h3>
            <p>Fully serviced, ready</p>
            <div className="booked">&#8599; 310 booked</div>
            <div className="rating">⭐⭐⭐⭐☆ (4.7)</div>
          </div>
         
        </div>

        
        <button className="scroll-btn right-btn" onClick={scrollRight}>
          &#8594;
        </button>
      </div>
    </section>
  );
}
