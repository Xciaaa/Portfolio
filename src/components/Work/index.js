import './index.scss';
import { Link } from 'react-router-dom';
import digiArt from '../../assets/images/digitalArt.png';
import Photo from '../../assets/images/Picture.png';
import OnlineGames from '../../assets/images/VALORANT.webp';

const Work = () => {
  return (
    <div className="work-page">
      <header className="work-hero">
        <h1 className="work-title">WORK <span className="sep">{'//'}</span> PROJECTS</h1>
        <p className="work-sub">A curated collection — choose a view to explore hardware or software outputs.</p>
      </header>

      <main className="work-main">
        <section className="work-choices">
          <Link to="/Work/hardware" className="work-tile hardware">
            <div className="tile-inner">
              <h3>Hardware Outputs</h3>
              <p>Embedded systems, sensors, PCBs and product engineering.</p>
              <button className="tile-cta">View Hardware</button>
            </div>
          </Link>

          <Link to="/Work/software" className="work-tile software">
            <div className="tile-inner">
              <h3>Software Outputs</h3>
              <p>Web apps, data platforms, firmware tooling and services.</p>
              <button className="tile-cta">View Software</button>
            </div>
          </Link>
        </section>

        <section id="hardware" className="work-grid">
          <h2 className="grid-heading">Featured Hardware</h2>
          <div className="grid">
            <Link to="/Work/project/pill-dispenser" className="card">
              <img src={digiArt} alt="Smart Medical Pill Dispenser" />
              <div className="card-body">
                <h4>Smart Medical Pill Dispenser</h4>
                <small>IoT / Embedded Systems</small>
              </div>
            </Link>
            <Link to="/Work/project/ims-l" className="card">
              <img src={Photo} alt="IMS-L Smart Cabinet" />
              <div className="card-body">
                <h4>IMS-L: Laboratory Management System</h4>
                <small>Hardware / Database</small>
              </div>
            </Link>
          </div>
        </section>

        <section id="software" className="work-grid">
          <h2 className="grid-heading">Featured Software</h2>
          <div className="grid">
            <Link to="/Work/project/us-app" className="card">
              <img src={OnlineGames} alt="Us-APP" />
              <div className="card-body">
                <h4>Us-APP</h4>
                <small>Flutter / Dart / Application</small>
              </div>
            </Link>
            <Link to="/Work/project/quiz-app" className="card">
              <img src={digiArt} alt="Quiz Maker App" />
              <div className="card-body">
                <h4>Quiz Maker App</h4>
                <small>Java / Android Studio </small>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Work;