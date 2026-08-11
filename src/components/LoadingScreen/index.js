import { useState, useEffect } from 'react';
import './index.scss';
import logoSrc from '../../assets/images/logo.png';

const LoadingScreen = ({ onFinish }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => onFinish?.(), 600);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`loading-screen${exiting ? ' loading-screen--exiting' : ''}`}>
      <img src={logoSrc} alt="Logo" className="loading-logo" />
    </div>
  );
};

export default LoadingScreen;
