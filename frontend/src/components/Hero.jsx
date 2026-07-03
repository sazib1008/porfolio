import React, { useState, useEffect } from 'react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';

export default function Hero() {
  const headings = ["Full-Stack Engineer", "Solution Architect", "DevOps Practitioner"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Typing effect
  useEffect(() => {
    if (subIndex === headings[index].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000); // Wait before delete
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % headings.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText(headings[index].substring(0, subIndex + (isDeleting ? -1 : 1)));
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <section id="hero" className="section hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="hero-welcome">WELCOME TO MY PORTFOLIO</p>
          <h1 className="hero-title">
            Hi, I'm Sazib<br />
            <span>I build robust systems as a </span><br />
            <span className="hero-typing" style={{ borderRightColor: blink ? 'var(--accent-gold)' : 'transparent' }}>
              {currentText}
            </span>
          </h1>
          <p className="hero-tagline">
            Crafting elegant, high-performance web applications with a focus on scalable architecture, clean code, and intuitive user experiences.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Contact Me <MessageSquare size={18} />
            </a>
            <a href="#about" className="btn btn-secondary">
              View Journey <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-glowing-backdrop"></div>
          <div className="hero-avatar-frame">
            <svg className="hero-svg-logo" viewBox="0 0 100 100">
              <path d="M50 15 L80 35 L80 65 L50 85 L20 65 L20 35 Z" />
              <path d="M50 25 L70 40 L70 60 L50 75 L30 60 L30 40 Z" />
              <text x="50" y="55" dominantBaseline="middle" textAnchor="middle" fill="var(--accent-gold)" fontSize="18" fontWeight="bold">SH</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
