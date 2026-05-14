import React, { useEffect, useState, useRef } from 'react';
import { getProjects } from '../services/api';
import { gsap } from 'gsap';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      const ctx = gsap.context(() => {
        gsap.from('.project-card', {
          opacity: 0,
          y: 40,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        });
      }, sectionRef);
      return () => ctx.revert();
    }
  }, [projects]);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Selected Works</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass-card overflow-hidden group flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image_url} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary transition-colors">
                    <Code size={24} />
                  </a>
                  <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary transition-colors">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">{project.description}</p>
                <div className="mt-auto pt-4 flex gap-4">
                  <a href={project.live_url} className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    View Case Study <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
