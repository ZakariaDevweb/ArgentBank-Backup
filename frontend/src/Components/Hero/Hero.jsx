import React from 'react';
import './Hero.css';

export default function Hero() {
  const subtitles = [
    "No fees.",
    "No minimum deposit.",
    "High interest rates."
  ];

  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        {subtitles.map((text, index) => (
          <p key={index} className="subtitle">{text}</p>
        ))}
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}
