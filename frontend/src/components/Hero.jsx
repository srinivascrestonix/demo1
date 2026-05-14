import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.hero-title', { opacity: 0, y: 50, duration: 1, ease: 'power4.out' })
        .from('.hero-subtitle', { opacity: 0, y: 30, duration: 1, ease: 'power4.out' }, '-=0.6')
        .from('.hero-btn', { opacity: 0, scale: 0.8, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="hero-title text-6xl md:text-8xl font-bold font-outfit mb-6 tracking-tight">
          Modern Web <br /> 
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Experiences</span>
        </h1>
        <p className="hero-subtitle text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          I'm a Full Stack Developer dedicated to building high-performance, 
          visually stunning web applications with precision and passion.
        </p>
        <div className="hero-btn">
          <a href="#contact" className="btn-primary text-lg px-10">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
