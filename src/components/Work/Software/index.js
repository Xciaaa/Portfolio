import './index.scss';
import { Link } from 'react-router-dom';

const Software = () => {
  return (
    <div className="sw-page">
      <header className="sw-hero">
        <div className="sw-hero-content">
          <div className="sw-text">
            <h1>
              Software
              <br />
              <span className="sw-accent">Projects</span>
            </h1>
            <p>Full-stack applications, data platforms, and tooling designed for real-world impact.</p>
            <Link to="/Work" className="back-link">← Back to Projects</Link>
          </div>
          <div className="sw-character">
            <img src={process.env.PUBLIC_URL + '/char-sw.png'} alt="Software character" className="sw-character-img" />
          </div>
        </div>
      </header>

      <main className="sw-grid">
        <Link to="/Work/project/us-app" className="sw-card">
          <div className="sw-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <h3>Us: Couple App</h3>
          <p>A dedicated interactive web application designed for couples to share memories, plans, and milestones.</p>
          <div className="sw-tags">
            <span className="sw-tag">Flutter</span>
            <span className="sw-tag">API</span>
            <span className="sw-tag">Mobile</span>
          </div>
          <span className="cta">View Project</span>
        </Link>

        <Link to="/Work/project/quiz-app" className="sw-card">
          <div className="sw-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3>QuizIT: Quiz Maker App</h3>
          <p>A dynamic, multi-topic quiz platform built with state management and live scoring metrics.</p>
          <div className="sw-tags">
            <span className="sw-tag">Android Studio</span>
            <span className="sw-tag">API</span>
            <span className="sw-tag">Firebase</span>
            <span className="sw-tag">Mobile</span>
          </div>
          <span className="cta">View Demo</span>
        </Link>

        <Link to="/Work/project/netbeans" className="sw-card">
          <div className="sw-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <h3>Food Chain E-commerce site</h3>
          <p>Data pipelines, APIs and visualizations for operational insights.</p>
          <div className="sw-tags">
            <span className="sw-tag">Netbeans</span>
            <span className="sw-tag">Java</span>
            <span className="sw-tag">Textfiles Database</span>
          </div>
          <span className="cta">View Project</span>
        </Link>

        

      </main>
    </div>
  );
};

export default Software;
