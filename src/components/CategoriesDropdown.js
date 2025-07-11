import React, { useState } from 'react';
import './CategoriesDropdown.css';

export default function CategoriesDropdown() {
  const [show, setShow] = useState(false);

  const toggleDropdown = () => {
    setShow(!show);
  };

  return (
    <div className="dropdown-container">
      <button onClick={toggleDropdown}>Shop by Categories</button>
      {show && (
        <ul className="dropdown-content">
          <li>PS5 Console</li>
          <li>Winter Wear</li>
          <li>Riding Gear</li>
          <li>Audio Equipment</li>
          <li>Camping Gear</li>
        </ul>
      )}
    </div>
  );
}
