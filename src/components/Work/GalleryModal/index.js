import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './index.scss';

const GalleryModal = ({ isOpen, onClose, images, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (!isOpen && activeIndex === null) return;

    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (activeIndex !== null) {
          setActiveIndex(null);
        } else {
          onClose();
        }
      }
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, activeIndex]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const closeLightbox = () => setActiveIndex(null);
  const prevImage = () =>
    setActiveIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  const nextImage = () =>
    setActiveIndex((i) => (i < images.length - 1 ? i + 1 : 0));

  const modal = (
    <div className="gallery-overlay" onClick={handleOverlayClick}>
      <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
        <button className="gallery-close" aria-label="Close gallery" onClick={onClose}>×</button>
        <h3 className="gallery-title">{title}</h3>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${title} schematic ${i + 1}`}
              className="gallery-img"
              loading="lazy"
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" aria-label="Close" onClick={closeLightbox}>×</button>
          {images.length > 1 && (
            <button className="lightbox-nav lightbox-prev" aria-label="Previous" onClick={prevImage}>‹</button>
          )}
          <img
            key={activeIndex}
            src={images[activeIndex]}
            alt={`${title} schematic ${activeIndex + 1}`}
            className="lightbox-img"
            loading="eager"
            onClick={(e) => e.stopPropagation()}
          />
          {images.length > 1 && (
            <button className="lightbox-nav lightbox-next" aria-label="Next" onClick={nextImage}>›</button>
          )}
        </div>
      )}
    </div>
  );

  return createPortal(modal, document.body);
};

export default GalleryModal;
