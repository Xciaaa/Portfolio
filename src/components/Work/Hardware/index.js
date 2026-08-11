import './index.scss';
import { Link } from 'react-router-dom';

const Hardware = () => {
  return (
    <div className="hw-page">
      <header className="hw-hero">
        <h1>Hardware Projects</h1>
        <p>Embedded systems, PCBs, firmware and product engineering work.</p>
        <Link to="/Work" className="back-link">← Back to Projects</Link>
      </header>

      <main className="hw-grid">
        <article className="hw-card">
          <h3>MIRA: Rugged Sensors</h3>
          <p>Custom sensor modules, enclosure design, and production-ready firmware.</p>
          <button className="cta">View Schematics</button>
        </article>

        <article className="hw-card">
          <h3>TITAN: Gateway</h3>
          <p>Rugged gateway engineering and connectivity stacks.</p>
          <button className="cta">View Details</button>
        </article>
      </main>
    </div>
  );
};

export default Hardware;
