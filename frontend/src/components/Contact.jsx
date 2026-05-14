import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import * as Icons from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="reveal-up">
            <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass-card flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-white/40 uppercase tracking-wider font-semibold">Email</h4>
                  <p className="text-lg">{contact.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass-card flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-white/40 uppercase tracking-wider font-semibold">Phone</h4>
                  <p className="text-lg">{contact.phone}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              {contact.socials.map((social, index) => {
                const Icon = Icons[social.icon] || Icons.Link;
                return (
                  <a 
                    key={index} 
                    href={social.link} 
                    className="w-10 h-10 glass-card flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <form className="glass-card p-8 space-y-6 reveal-up">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/40 mb-2">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/40 mb-2">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/40 mb-2">Message</label>
              <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white resize-none" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="w-full btn-primary flex items-center justify-center space-x-2">
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
