import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-dark/80 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">© {currentYear} Lakshya Jain. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#hero" className="text-sm text-gray-400 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-sm text-gray-400 hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-sm text-gray-400 hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
