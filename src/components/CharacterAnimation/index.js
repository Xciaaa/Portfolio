import React, { useEffect, useRef, useState } from 'react';
import './index.scss';

/**
 * CharacterAnimation
 * Props:
 * - src: image sprite sheet path
 * - cols: number of columns in the sheet
 * - rows: number of rows in the sheet
 * - fps: frames per second
 * - scale: scale multiplier for rendered frame size
 */
const CharacterAnimation = ({
  src,
  cols = 5,
  rows = 5,
  fps = 8,
  scale = 1,
  frames = null,
  transitionMs = 300,
  className = '',
}) => {
  const [loaded, setLoaded] = useState(false);
  const frameRef = useRef(0);
  const rafRef = useRef(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isFading, setIsFading] = useState(false);
  const transitionTimer = useRef(null);
  const [frameSize, setFrameSize] = useState({ w: 0, h: 0 });
  const imagesRef = useRef([]);

  // If `frames` prop is provided, use individual images animation
  useEffect(() => {
    if (!frames || !frames.length) return;
    const imgs = frames.map((f) => {
      const img = new Image();
      img.src = f;
      return img;
    });
    imagesRef.current = imgs;
    // wait for first image to load to establish size
    imgs[0].onload = () => {
      setFrameSize({ w: imgs[0].width, h: imgs[0].height });
      setLoaded(true);
    };
    return () => {
      imagesRef.current = [];
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, [frames]);

  // Sprite-sheet fallback
  useEffect(() => {
    if (frames && frames.length) return;
    if (!src) return;
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const w = Math.floor(img.width / cols);
      const h = Math.floor(img.height / rows);
      setFrameSize({ w, h });
      setLoaded(true);
    };
    return () => {};
  }, [src, cols, rows, frames]);

  useEffect(() => {
    if (!loaded) return;
    const frameCount = frames && frames.length ? frames.length : cols * rows;
    let last = performance.now();
    const interval = 1000 / Math.max(1, fps);

    const loop = (now) => {
      if (now - last >= interval) {
        const next = (frameRef.current + 1) % frameCount;
        // set prev to current so we can crossfade
        setPrevIndex(frameRef.current);
        frameRef.current = next;
        setFrameIndex(frameRef.current);
        // begin fade
        setIsFading(true);
        // clear prev after transition
        if (transitionTimer.current) clearTimeout(transitionTimer.current);
        transitionTimer.current = setTimeout(() => {
          setPrevIndex(null);
          setIsFading(false);
        }, transitionMs);
        last = now;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafRef.current);
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, [loaded, cols, rows, fps, frames, transitionMs]);

  // Render individual frames (img) when frames array given using fade-in animation
  if (frames && frames.length) {
    const img = imagesRef.current[frameIndex] || {};
    const w = frameSize.w || img.width || 160;
    const h = frameSize.h || img.height || 160;
    const style = {
      width: `${Math.round(w * scale)}px`,
      height: `${Math.round(h * scale)}px`,
      position: 'relative',
      overflow: 'hidden',
    };
    const curr = frames[frameIndex];
    const imgStyle = {
      width: '100%',
      height: '100%',
      display: 'block',
      objectFit: 'contain',
      animation: `charFadeIn ${transitionMs}ms ease both`,
    };
    return (
      <div className={`character-animation ${className}`} style={style} aria-hidden="true">
        <img src={curr} alt="" style={imgStyle} />
      </div>
    );
  }

  // Sprite-sheet rendering as before
  const { w, h } = frameSize;
  const col = frameIndex % cols;
  const row = Math.floor(frameIndex / cols);

  const style = loaded
    ? {
        width: `${Math.round(w * scale)}px`,
        height: `${Math.round(h * scale)}px`,
        backgroundImage: `url(${src})`,
        backgroundPosition: `-${col * w}px -${row * h}px`,
        backgroundSize: `${cols * w}px ${rows * h}px`,
      }
    : { width: `${160 * scale}px`, height: `${160 * scale}px`, backgroundColor: 'transparent' };

  return <div className={`character-animation ${className}`} style={style} aria-hidden="true" />;
};

export default CharacterAnimation;
