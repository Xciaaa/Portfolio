import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo.png';
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {

  const [letterClass] = useState('text-animate')
  const nameArray = [' ', 'X', 'i', 'a']
  const jobArray = ['C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i!</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
         <AnimatedLetters letterClass={letterClass} 
         strArray={nameArray} 
         idx={15} />
         <img src={LogoTitle} alt="Developer" className="logo-title" />
        <br />
        <AnimatedLetters letterClass={letterClass} 
         strArray={jobArray} 
         idx={22} />
        </h1>
        <h2>Hardware IoT Developer</h2>
        <Link to="/contact" className="flat-button">Contact Me</Link>
      </div>
      <Logo />
    </div>
  );
};

export default Home;

