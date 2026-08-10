import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import CharacterBase from '../../assets/images/noBall.png';
import BallIcon from '../../assets/images/logo.png';
import AboutMeImage from '../../assets/images/aboutme.png';

const About = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped((prev) => !prev);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleFlip();
    }
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h1>
          <AnimatedLetters
            strArray={['A','b','o','u','t',' ','m','e']}
            idx={15}
          />
        </h1>
        <p>I'm Jerricson Garcia a computer engineer who loves bringing digital code into the physical world. I operate right at the intersection of hardware and software, whether that means wiring up microcontrollers, writing backend logic, or building clean web interfaces to control it all. I take a hands-on, end-to-end approach to engineering: taking an idea from raw schematics and low-level code to a smooth, fully functional system that just works. I’m always eager to solve complex problems and build tech that makes a tangible impact.</p>
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
            <img className="about-character" src={CharacterBase} alt="Character base" />
            <img className="about-ball" src={BallIcon} alt="Floating ball" />
          </div>
          <div className="flip-card__face flip-card__back">
            <img className="about-back" src={AboutMeImage} alt="About page image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

