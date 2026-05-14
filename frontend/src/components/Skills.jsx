import React, { useEffect, useState, useRef } from 'react';
import { getSkills } from '../services/api';
import { gsap } from 'gsap';
import { Code, Layers, Cpu, Atom, Server } from 'lucide-react';

const iconMap = {
  Code: Code,
  Layers: Layers,
  Cpu: Cpu,
  Atom: Atom,
  Server: Server
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data } = await getSkills();
        setSkills(data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };
    fetchSkills();
  }, []);

  useEffect(() => {
    if (skills.length > 0) {
      const ctx = gsap.context(() => {
        gsap.from('.skill-card', {
          opacity: 0,
          scale: 0.9,
          y: 20,
          stagger: 0.1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        });
      }, sectionRef);
      return () => ctx.revert();
    }
  }, [skills]);

  return (
    <section id="skills" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <div key={skill.id} className="skill-card glass-card p-8 flex flex-col items-center justify-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <IconComponent size={32} />
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
