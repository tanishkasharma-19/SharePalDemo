import React from "react";
import "./CategoriesGrid.css";

const categories = [
  {
    title: "Photography",
    description: "Rent GoPro, Insta360, DJI, DSLR Cameras & more",
    className: "photography",
  },
  {
    title: "Gaming",
    description: "Rent PS5, Xbox, Racing Wheel & more",
    className: "gaming",
  },
  {
    title: "Outdoor",
    description: "Rent Trekking Jacket, Riding Boots, Camping Tents & more",
    className: "outdoor",
  },
  {
    title: "Entertainment",
    description: "Rent Projectors, Speakers, VR, Mics & more",
    className: "entertainment",
  },
];

const CategoriesGrid = () => {
  return (
    <div className="categories-grid">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`category-card ${category.className}`}
        >
          <h3>{category.title}</h3>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoriesGrid;
