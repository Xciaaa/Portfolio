import './index.scss';
import { Link } from 'react-router-dom';

const Hardware = () => {
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
        <article className="hw-card">
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
          <button className="cta">View Schematics</button>
        </article>

        <article className="hw-card">
          <div className="hw-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="6" width="20" height="12" rx="2" />
              <path d="M6 10h.01M6 14h.01" />
            </svg>
          </div>
          <h3>IMS-L: Inventory Management System for Laptops</h3>
          <p>A smart physical laboratory cabinet integrated with hardware security and local tracking for campus equipment.</p>
          <div className="hw-tags">
            <span className="hw-tag">Kiosk</span>
            <span className="hw-tag">Inventory</span>
          </div>
          <button className="cta">View Details</button>
        </article>
      </main>
    </div>
  );
};

export default Hardware;
