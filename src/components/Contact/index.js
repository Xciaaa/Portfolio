import { useState } from 'react';
import CharacterAnimation from '../CharacterAnimation';
import './index.scss';

import c1 from '../../assets/characterImages/1.png';
import c2 from '../../assets/characterImages/2.png';
import c3 from '../../assets/characterImages/3.png';

const characterFrames = [c1, c2, c3];

const Contact = () => {
  const [letterClass] = useState('text-animate');

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-content">
          <h1>
            Contact
            <br />
            <span className={letterClass}>M</span>
            <span className={`${letterClass} _12`}>e</span>
          </h1>
          <p className="contact-intro">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href="mailto:jerricsonsg@gmail.com" className="contact-link">
                jerricsonsg@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location</span>
              <span className="contact-value">Philippines</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Availability</span>
              <span className="contact-value">Open to freelance & full-time</span>
            </div>
          </div>
        </div>

        <div className="contact-character">
          <CharacterAnimation
            frames={characterFrames}
            fps={3}
            transitionMs={500}
            scale={1.1}
            className="contact-sprite"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

