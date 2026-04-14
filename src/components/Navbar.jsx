import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b 
        ${isScrolled
          ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-neutral-200 dark:border-neutral-900 py-2 shadow-lg'
          : 'bg-transparent border-transparent py-3'}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="text-2xl font-black bg-gradient-to-r from-brand-400 via-amber-200 to-yellow-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity tracking-tight"
        >
          HM<span className="dark:text-white text-neutral-950 transition-colors">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => {
                  if (location.pathname === link.href) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`text-sm font-semibold transition-colors relative group tracking-wide 
                  ${isActive
                    ? 'text-neutral-950 dark:text-white'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-brand-500 transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            );
          })}


        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-3">

          <button
            className="text-neutral-600 dark:text-neutral-300 hover:text-brand-400 p-2 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-900 p-6 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (location.pathname === link.href) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`font-semibold text-lg py-2 transition-colors 
                  ${isActive
                    ? 'text-brand-500'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-brand-500'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
