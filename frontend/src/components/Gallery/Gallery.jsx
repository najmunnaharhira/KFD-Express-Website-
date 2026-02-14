import React from 'react';
import './Gallery.css';
import { galleryImages } from '../../assets/assets';

const Gallery = () => {
  return (
    <div className="gallery" id="gallery">
      <h2>Offers & Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((img, i) => (
          <div key={i} className="gallery-item">
            <img src={img} alt={`Gallery ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
