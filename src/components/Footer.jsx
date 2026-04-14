import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 pt-16 pb-8 relative overflow-hidden transition-colors duration-500">
      {/* Decorative gradients */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

          {/* Brand & Bio */}
          <div className="md:col-span-2">
            <a href="#" className="text-3xl font-black bg-gradient-to-r from-brand-400 via-amber-400 to-yellow-600 dark:via-amber-200 dark:to-yellow-500 bg-clip-text text-transparent inline-block mb-6 tracking-tight">
              HM<span className="text-neutral-900 dark:text-white transition-colors">.</span>
            </a>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md leading-relaxed font-bold transition-colors">
              Crafting premium digital experiences through modern web technologies and artificial intelligence. Let's build the future together.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <Github size={20} strokeWidth={1.5} />, href: 'https://github.com/hemantMohane29', hover: 'hover:text-neutral-900 dark:hover:text-white' },
                { icon: <Linkedin size={20} strokeWidth={1.5} />, href: 'https://www.linkedin.com/in/hemant-mohane-35440a330/', hover: 'hover:text-blue-500' },
                { icon: <Youtube size={20} strokeWidth={1.5} />, href: 'https://www.youtube.com/@hemant.creates_29', hover: 'hover:text-red-500' },
                { icon: <Mail size={20} strokeWidth={1.5} />, href: 'mailto:hemantmohane29@gmail.com', hover: 'hover:text-brand-600 dark:hover:text-brand-400' },
              ].map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-500 dark:text-neutral-400 ${item.hover} hover:border-brand-500/30 hover:bg-brand-500/10 transition-all shadow-sm`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-neutral-900 dark:text-white font-black text-lg mb-6 transition-colors">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-neutral-500 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors font-bold uppercase tracking-widest text-xs">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-neutral-900 dark:text-white font-black text-lg mb-6 transition-colors">Services</h3>
            <ul className="space-y-4">
              {['Web Development', 'MERN Stack', 'Machine Learning', 'UI/UX Design'].map((service) => (
                <li key={service} className="text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-widest text-[10px] transition-colors hover:text-brand-600 dark:hover:text-brand-400 cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm font-bold transition-colors">
            © {currentYear} HM. All rights reserved.
          </p>
          <p className="text-neutral-500 text-sm flex items-center gap-1.5 font-bold transition-colors">
            Designed & Built with ❤️ by <span className="text-brand-600 dark:text-brand-400">HM</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
