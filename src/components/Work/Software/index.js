import './index.scss';
import { Link } from 'react-router-dom';

const Software = () => {
  return (
    <div className="sw-page">
      <header className="sw-hero">
        <h1>Software Projects</h1>
        <p>Web apps, data platforms, tooling and services.</p>
        <Link to="/Work" className="back-link">← Back to Projects</Link>
      </header>

      <main className="sw-grid">
        <article className="sw-card">
          <h3>ZENITH: Data Platform</h3>
          <p>Data pipelines, APIs and visualizations for operational insights.</p>
          <button className="cta">View Project</button>
        </article>

        <article className="sw-card">
          <h3>Dashboard UI</h3>
          <p>React-based dashboards and UX systems.</p>
          <button className="cta">View Demo</button>
        </article>
      </main>
    </div>
  );
};

export default Software;
