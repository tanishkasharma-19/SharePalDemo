import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { productId } = useParams();
  console.log('productId:', productId);
  const productImages = {
    camera: '/Camera.png',
    riding: '/Riding.png',
    trekking: '/Hiking.png',
    gaming: '/PS5.png',
    winter: '/Winter.png',
    bikes: '/Bike.png',
    'camping-gear': '/Camping.png',
    creator: '/Selfie.png',
  };

  const imageUrl = productImages[productId.toLowerCase()] || '/Default.png';

  return (
    <div>
      <h2>Product Details: {productId}</h2>
      <img src={imageUrl} alt={productId} />
    </div>
  );
}
