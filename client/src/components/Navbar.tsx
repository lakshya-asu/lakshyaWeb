import { useState, useEffect } from "react";
import { Link } from "wouter";

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
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 ${isScrolled ? 'bg-dark/80 backdrop-blur-md border-b border-primary/10' : ''} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-display font-bold text-xl text-primary">
            <a href="#hero">Lakshya Jain</a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                >
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
              className="inline-flex items-center justify-center p-2 rounded-md text-light hover:text-primary focus:outline-none"
            >
              <i className="bx bx-menu text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden bg-dark/90 backdrop-blur-md px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-primary/10`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={closeMobileMenu}
            className="block px-3 py-2 text-base font-medium hover:text-primary"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
