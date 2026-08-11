import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import CharacterBase from '../../assets/images/noBall.png';
import BallIcon from '../../assets/images/logo.png';
import AboutMeImage from '../../assets/images/aboutme.png';

const items = [
  { id: 1,  label: 'Hobby 1', image: '/photos/tokyo-shinjuku-2/image-1.jpg' },
  { id: 2,  label: 'Night Two', image: '/photos/tokyo-shinjuku-2/image-2.jpg' },
  { id: 3,  label: 'Night Three', image: '/photos/tokyo-shinjuku-2/image-3.jpg' },
  { id: 4,  label: 'Night Four', image: '/photos/tokyo-shinjuku-2/image-4.jpg' },
  { id: 5,  label: 'Night Five', image: '/photos/tokyo-shinjuku-2/image-8.jpg' },
];

const ITEM_WIDTH = 400;
const GAP = 30;


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
  const timer = setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 4000);

  // Return an actual cleanup function
  return () => clearTimeout(timer);
}, []);

  const [flipped, setFlipped] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  const handleFlip = () => setFlipped((prev) => !prev);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleFlip();
    }
  };

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-content">
          <h1>
            <AnimatedLetters letterClass = {letterClass}
              strArray={['A','b','o','u','t',' ','m','e']}
              idx={10}
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
              <img className="about-back" src={AboutMeImage} alt="About me illustration" />
            </div>
          </div>
        </div>
      </div>

      


      <div ref={containerRef} className="about-scroll-container">
        <h1 className='divider'> ___________________________________________________________________________________________________</h1>
        <div className="about-scroll-sticky">
          <h2 className='impact'> Hobbies </h2>
          <motion.div className="about-gallery" style={{ x }}>
            {items.map((item) => (
              <div
                key={item.id}
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
          </motion.div>
        </div>
      </div>

      <section className="about-scroll-outro">
        <p className="about-scroll-finish">Fin</p>
      </section>
    </div>
  );
};

export default About;

