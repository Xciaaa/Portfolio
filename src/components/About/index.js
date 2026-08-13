import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import CharacterAnimation from '../CharacterAnimation';
import './index.scss';

import CharacterBase from '../../assets/images/noBall.png';
import BallIcon from '../../assets/images/logo.png';
import AboutMeImage from '../../assets/images/aboutme.png';
import Photo from '../../assets/images/Picture.png';
import digiArt from '../../assets/images/digitalArt.png';
import OnlineGames from '../../assets/images/VALORANT.webp';
import sport from '../../assets/images/badminton.png';
import reading from '../../assets/images/reading.png';

import c1 from '../../assets/characterImages/1.png';
import c2 from '../../assets/characterImages/2.png';
import c3 from '../../assets/characterImages/3.png';
import c4 from '../../assets/characterImages/4.png';
import c5 from '../../assets/characterImages/5.png';
import c6 from '../../assets/characterImages/6.png';
import c7 from '../../assets/characterImages/7.png';
import c8 from '../../assets/characterImages/8.png';
import c9 from '../../assets/characterImages/9.png';
import c10 from '../../assets/characterImages/10.png';
import c11 from '../../assets/characterImages/11.png';
import c12 from '../../assets/characterImages/12.png';
import c13 from '../../assets/characterImages/13.png';
import c14 from '../../assets/characterImages/14.png';

const characterFrames = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14];

const items = [
  { id: 1, color: '#b4b4b4', label: 'Drawing', image: digiArt },
  { id: 2, color: 'rgba(255, 255, 255, 0.15)', label: 'Taking Photos', image: Photo },
  { id: 3, color: 'rgba(255, 255, 255, 0.15)', label: 'Online Games', image: OnlineGames },
  { id: 4, color: 'rgba(255, 255, 255, 0.15)', label: 'Sports', image: sport },
  { id: 5, color: 'rgba(255, 255, 255, 0.15)', label: 'Reading', image: reading },
];

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [flipped, setFlipped] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleFlip = () => setFlipped((prev) => !prev);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleFlip();
    }
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-container">
        <div className="about-content">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm Jerricson Garcia, a computer engineer who loves bringing digital code into the physical world. I operate right at the intersection of hardware and software, whether that means wiring up microcontrollers, writing backend logic, or building clean web interfaces to control it all. 
          </p>
          <br />
          <p>
            I take a hands-on, end-to-end approach to engineering: taking an idea from raw schematics and low-level code to a smooth, fully functional system that just works. I’m always eager to solve complex problems and build tech that makes a tangible impact.
          </p>
        </div>

        <div
          className="about-animation"
          onClick={handleFlip}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-pressed={flipped}
        >
          <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
            <div className="flip-card__face flip-card__front">
              <div className="character-wrapper">
                <img className="about-character" src={CharacterBase} alt="Character base" />
                <img className="about-ball" src={BallIcon} alt="Floating ball" />
              </div>
            </div>
            <div className="flip-card__face flip-card__back">
              <img className="about-back" src={AboutMeImage} alt="About me illustration" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Section Title placed OUTSIDE containerRef for perfect sticky timing */}
      <hr className="divider" />
      <h2 className="impact">Hobbies</h2>

      {/* Gallery Section */}
      <div ref={containerRef} className="about-scroll-container">
        <div className="about-scroll-sticky">
          <div className="about-gallery">
            {[...items, ...items].map((item, index) => (
              <div
                key={item.id + '-' + index}
                className="about-gallery-item"
                style={{
                  backgroundImage: `url(${item.image})`,
                  borderColor: item.color,
                }}
              >
                <div className="about-item-content">
                  <span className="about-item-number">0{item.id}</span>
                  <h2>{item.label}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Outro / Resume Section */}
      <section className="about-scroll-outro">
        <div className="about-scroll-finish">
          <CharacterAnimation
            frames={characterFrames}
            fps={4}
            transitionMs={420}
            scale={0.95}
            className="about-resume-sprite"
          />
          <p>Want the full story? My resume has the complete breakdown of skills, projects, and experience.</p>
          <a
            href="https://docs.google.com/document/d/1a54S1aY29NDwJHQm7V9xfxS94UsM6I2XaMNnYTzlNhI/export?format=pdf"
            className="about-resume-button"
            download
          >
            Download my resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;