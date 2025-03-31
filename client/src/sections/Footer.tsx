import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-black border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-base text-white/60">© {currentYear} Lakshya Jain. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#hero" className="text-base text-white/60 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-base text-white/60 hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-base text-white/60 hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-base text-white/60 hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
