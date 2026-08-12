import './index.scss';
import { Link } from 'react-router-dom';
import digiArt from '../../assets/images/spd.png';
import Photo from '../../assets/images/imsl.png';
import OnlineGames from '../../assets/images/VALORANT.webp';
import Quiz from '../../assets/images/quizz.png';

const Work = () => {
  return (
    <div className="work-page">
      <header className="work-hero">
        <h1 className="work-title">
          <span className="work-title-main">WORK</span>
          <span className="sep">{'//'}</span>
          <span className='work-title-accent'>PROJECTS</span>
        </h1>
        <p className="work-sub">
          A curated selection of hardware and software projects — explore systems that bridge embedded engineering with modern applications.
        </p>
      </header>

      <main className="work-main">
        <section className="work-choices">
          <Link to="/Work/hardware" className="work-tile hardware">
            <div className="tile-inner">
              <div className="tile-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="tile-svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Hardware Outputs</h3>
              <p>Embedded systems, sensors, PCBs, IoT architectures, and product engineering from schematic to production.</p>
              <button className="tile-cta">View Hardware</button>
            </div>
          </Link>

          <Link to="/Work/software" className="work-tile software">
            <div className="tile-inner">
              <div className="tile-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="tile-svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Software Outputs</h3>
              <p>Web apps, data platforms, firmware tooling, and full-stack services built for real-world use.</p>
              <button className="tile-cta">View Software</button>
            </div>
          </Link>
        </section>

        <div className="work-divider">
          <span className="work-divider-label">Featured</span>
        </div>

        <section id="hardware" className="work-grid">
          <h2 className="grid-heading">
            <span className="heading-line"></span>
            Hardware
            <span className="heading-line"></span>
          </h2>
          <div className="grid">
            <Link to="/Work/project/pill-dispenser" className="card">
              <div className="card-image-wrap">
                <img src={digiArt} alt="Smart Medical Pill Dispenser" loading="lazy" />
                <span className="card-badge">IoT</span>
              </div>
              <div className="card-body">
                <h4>Smart Medical Pill Dispenser</h4>
                <small>Embedded Systems / IoT</small>
              </div>
            </Link>
            <Link to="/Work/project/ims-l" className="card">
              <div className="card-image-wrap">
                <img src={Photo} alt="IMS-L Smart Cabinet" loading="lazy" />
                <span className="card-badge">Hardware</span>
              </div>
              <div className="card-body">
                <h4>IMS-L: Laboratory Management System</h4>
                <small>Hardware / Database</small>
              </div>
            </Link>
          </div>
        </section>

        <section id="software" className="work-grid">
          <h2 className="grid-heading">
            <span className="heading-line"></span>
            Software
            <span className="heading-line"></span>
          </h2>
          <div className="grid">
            <Link to="/Work/project/us-app" className="card">
              <div className="card-image-wrap">
                <img src={OnlineGames} alt="Us-APP" loading="lazy" />
                <span className="card-badge">Mobile</span>
              </div>
              <div className="card-body">
                <h4>Us App</h4>
                <small>Flutter / Dart / Application</small>
              </div>
            </Link>
            <Link to="/Work/project/quiz-app" className="card">
              <div className="card-image-wrap">
                <img src={Quiz} alt="Quiz Maker App" loading="lazy" />
                <span className="card-badge">MOBILE</span>
              </div>
              <div className="card-body">
                <h4>QuizIT: Quiz Maker App</h4>
                <small>Java / Android Studio</small>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <div className="work-character" aria-hidden="true">
        <img src={process.env.PUBLIC_URL + '/char-work.png'} alt="Character" className="work-character-img" />
      </div>
    </div>
  );
};

export default Work;