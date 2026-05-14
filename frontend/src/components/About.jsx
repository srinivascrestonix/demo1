import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 about-content">
            <h2 className="text-4xl font-bold font-outfit mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              With a strong foundation in both frontend and backend technologies, 
              I bridge the gap between design and functionality. I specialize in 
              creating seamless user experiences that are as fast as they are beautiful.
            </p>
            <p className="text-lg text-muted-foreground">
              My approach combines clean code practices with modern design trends, 
              ensuring that every project I touch is built to scale and delight users.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 glass rounded-3xl overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-primary/20">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
