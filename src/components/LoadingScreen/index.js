import { useState, useEffect } from 'react';
import './index.scss';
import logoSrc from '../../assets/images/logo.png';

const LoadingScreen = ({ onFinish }) => {
  const [exiting, setExiting] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const duration = 2500;
    const startTime = performance.now();
    let rafId;

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      setCount(Math.max(1, Math.floor(eased * 99) + 1));

      if (progress < 1) {
        rafId = requestAnimationFrame(update);
      } else {
        setExiting(true);
        setTimeout(() => onFinish?.(), 600);
      }
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [onFinish]);

  return (
    <div className={`loading-screen${exiting ? ' loading-screen--exiting' : ''}`}>
      <div className="loading-logo-wrap">
        <img src={logoSrc} alt="Logo" className="loading-logo" />
      </div>
      <div className="loading-counter">{count}%</div>
    </div>
  );
};

export default LoadingScreen;
