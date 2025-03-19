import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Brain, Code, FolderKanban, GraduationCap, FileText, Mail } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll position to add background to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "About", href: "#about", icon: <Brain size={16} /> },
    { name: "Skills", href: "#skills", icon: <Code size={16} /> },
    { name: "Projects", href: "#projects", icon: <FolderKanban size={16} /> },
    { name: "Experience", href: "#experience", icon: <GraduationCap size={16} /> },
    { name: "Publications", href: "#publications", icon: <FileText size={16} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={16} /> },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a1421]/85 backdrop-blur-md shadow-md' : ''}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#hero" className="flex items-center">
              <div className="w-8 h-8 rounded-md bg-primary/20 flex items-center justify-center mr-2">
                <span className="text-primary font-bold">LJ</span>
              </div>
              <span className="font-bold text-xl text-white hover:text-primary transition-colors">
                Lakshya Jain
              </span>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1.5"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden bg-[#0a1421]/95 backdrop-blur-md shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={closeMobileMenu}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
