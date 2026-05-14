import React from 'react';
import { Code, Send, Briefcase, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold font-outfit mb-2 tracking-tighter">
              PORT<span className="text-primary">FOLIO</span>
            </h2>
            <p className="text-muted-foreground text-sm">Building the future of the web, one pixel at a time.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="p-2 hover:text-primary transition-colors"><Code size={20} /></a>
            <a href="#" className="p-2 hover:text-primary transition-colors"><Send size={20} /></a>
            <a href="#" className="p-2 hover:text-primary transition-colors"><Briefcase size={20} /></a>
            <a href="#" className="p-2 hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>
        </div>
        
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
