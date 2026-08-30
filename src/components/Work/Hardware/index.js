import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import GalleryModal from '../GalleryModal';
import BDPill from '../../../assets/images/BDPill.jpg';
import PMTPill from '../../../assets/images/PMTPill.png';
import PDPill from '../../../assets/images/PDPill.png';
import HPcon from '../../../assets/images/HPCon.png';
import IMSDIG from '../../../assets/images/IMSDIG.png';
import ACDes from '../../../assets/images/ACDes.png';
import PDSe from '../../../assets/images/PDSe.png';
import BDSe from '../../../assets/images/BDSe.png';
import RCD from '../../../assets/images/RCD.png';

const schematics = {
  'pill-dispenser': [BDPill, PMTPill, PDPill],
  'ims-l': [ACDes, IMSDIG, HPcon],
  'RC': [RCD],
  'smartsoil': [PDSe, BDSe],
};

const Hardware = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryTitle, setGalleryTitle] = useState('');

  const openGallery = (projectId, title) => {
    setGalleryTitle(title);
    setGalleryImages(schematics[projectId] || []);
    setGalleryOpen(true);
  };

  const handleSchematicClick = (e, projectId, title) => {
    e.preventDefault();
    e.stopPropagation();
    openGallery(projectId, title);
  };

  return (
    <div className="hw-page">
      <header className="hw-hero">
        <div className="hw-hero-content">
          <div className="hw-text">
            <h1>
              Hardware
              <br />
              <span className="hw-accent">Projects</span>
            </h1>
            <p>From embedded firmware to physical product engineering — building systems that connect the digital and physical worlds.</p>
            <Link to="/Work" className="back-link">← Back to Projects</Link>
          </div>
          <div className="hw-character">
            <img src={process.env.PUBLIC_URL + '/char-hw.png'} alt="Hardware character" className="hw-character-img" />
          </div>
        </div>
      </header>

      <main className="hw-grid">
        <Link to="/Work/project/pill-dispenser" className="hw-card">
          <div className="hw-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3>Smart Medical Pill Dispenser</h3>
          <p>An automated medication management system that alerts and assists patients and caregivers with timely dosing.</p>
          <div className="hw-tags">
            <span className="hw-tag">Sensors</span>
            <span className="hw-tag">PCB</span>
            <span className="hw-tag">Firmware</span>
          </div>
          <button type="button" className="cta" onClick={(e) => handleSchematicClick(e, 'pill-dispenser', 'Smart Medical Pill Dispenser')}>View Diagrams</button>
        </Link>

        <Link to="/Work/project/ims-l" className="hw-card">
          <div className="hw-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3>IMS-L: Inventory Management System for Laptops</h3>
          <p>A smart physical laboratory cabinet integrated with hardware security and local tracking for campus equipment.</p>
          <div className="hw-tags">
            <span className="hw-tag">Kiosk</span>
            <span className="hw-tag">Inventory</span>
          </div>
          <button type="button" className="cta" onClick={(e) => handleSchematicClick(e, 'ims-l', 'IMS-L: Laboratory Management System')}>View Diagrams</button>
        </Link>

        <Link to="/Work/project/RC" className="hw-card">
          <div className="hw-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3>Remote Controlled Car</h3>
          <p>Custom sensor modules, enclosure design, and production-ready firmware for harsh environments.</p>
          <div className="hw-tags">
            <span className="hw-tag">ESP32</span>
            <span className="hw-tag">Bluetooth</span>
            <span className="hw-tag">Firmware</span>
          </div>
          <button type="button" className="cta" onClick={(e) => handleSchematicClick(e, 'RC', 'ESP32 Remote Controlled Car')}>View Diagrams</button>
        </Link>

        <Link to="/Work/project/smartsoil" className="hw-card">
          <div className="hw-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3>SmartSoil: Eggplant Monitoring System</h3>
          <p>Rugged gateway engineering and connectivity stacks for reliable IoT deployment.</p>
          <div className="hw-tags">
            <span className="hw-tag">IoT</span>
            <span className="hw-tag">Connectivity</span>
            <span className="hw-tag">PCB</span>
          </div>
          <button type="button" className="cta" onClick={(e) => handleSchematicClick(e, 'smartsoil', 'SmartSoil: Eggplant Monitoring System')}>View Diagrams</button>
        </Link>
      </main>

      <GalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={galleryImages}
        title={galleryTitle}
      />
    </div>
  );
};

export default Hardware;
