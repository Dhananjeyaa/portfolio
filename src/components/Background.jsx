import React from 'react';
import '../styles/background.css';

export default function Background() {
  // Generate random stars
  const stars = Array.from({ length: 150 }).map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 1, // 1px to 3px
    left: `${Math.random() * 100}vw`,
    top: `${Math.random() * 100}vh`,
    animationDuration: `${Math.random() * 3 + 2}s`, // 2s to 5s
    animationDelay: `${Math.random() * 5}s`
  }));

  return (
    <div className="background-container">
      {/* Background gradients */}
      <div className="gradient-blob gradient-blob-1"></div>
      <div className="gradient-blob gradient-blob-2"></div>
      <div className="gradient-blob gradient-blob-3"></div>

      {/* Stars layer */}
      <div className="stars-layer">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: star.left,
              top: star.top,
              animationDuration: star.animationDuration,
              animationDelay: star.animationDelay
            }}
          />
        ))}
      </div>
    </div>
  );
}
