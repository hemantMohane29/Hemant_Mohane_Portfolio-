import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-24 container mx-auto px-6 md:px-12 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center max-w-7xl mx-auto">

        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-brand-600 dark:text-brand-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            MERN Stack Developer & ML Enthusiast
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-neutral-950 dark:text-white transition-colors">
            Hi, I'm <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-brand-400 via-amber-400 to-yellow-600 dark:via-amber-200 dark:to-yellow-500 bg-clip-text text-transparent">
              Hemant Mohane.
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl   font-bold bg-gradient-to-r from-teal-600 to-pink-600 dark:from-teal-400 dark:to-pink-500 bg-clip-text text-transparent mb-5 transition-colors">
            Turning ideas into digital realities.
          </h2>

          <p className="text-base text-neutral-700 dark:text-neutral-400 mb-8 leading-relaxed max-w-xl transition-colors">
            I build modern, scalable web applications and explore the fascinating world of AI. Specialized in creating premium digital experiences that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#projects" className="w-full sm:w-auto px-7 py-3 bg-brand-500 hover:bg-brand-400 text-neutral-950 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-brand-500/20 active:scale-95">
              View My Work <ArrowRight size={18} strokeWidth={2.5} />
            </a>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
              {[
                { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/hemant-mohane-35440a330/', color: 'hover:text-blue-500' },
                { icon: <Github size={18} />, href: 'https://github.com/hemantMohane29', color: 'hover:text-neutral-950 dark:hover:text-white' },
                { icon: <Mail size={18} />, href: 'mailto:hemantmohane29@gmail.com', color: 'hover:text-brand-600 dark:hover:text-brand-400' },
                { icon: <Youtube size={18} />, href: 'https://www.youtube.com/@hemant.creates_29', color: 'hover:text-red-500' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 ${social.color} transition-all shadow-sm hover:shadow-md active:scale-90`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Tech Stack Mini Footer */}
          <div className="mt-12 flex flex-col items-center lg:items-start gap-3">
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest transition-colors">Current Stack</span>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 w-full max-w-md">
              {['MERN Stack', 'AI & ML', 'Designer', 'Editor'].map((tech) => (
                <div key={tech} className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-400 text-[10px] font-bold backdrop-blur-sm transition-colors">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Image/Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-[360px] bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 shadow-xl dark:shadow-2xl flex flex-col items-center transform hover:-translate-y-1 transition-all duration-500 group">

            {/* Image Container */}
            <div className="w-full h-[260px] md:h-[300px] rounded-xl overflow-hidden mb-5 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800/50">
              <img src="/profile.jpg" alt="Hemant Mohane" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Text Content */}
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-0.5 transition-colors">Hemant Mohane</h3>
            <p className="text-xs text-brand-600 dark:text-brand-500 font-bold mb-6 transition-colors">MERN Stack Developer & ML Enthusiast</p>

            {/* Stats */}
            <div className="grid grid-cols-2 w-full px-8 pb-2 border-t border-neutral-100 dark:border-neutral-800 pt-4">
              <div className="text-center border-r border-neutral-100 dark:border-neutral-800">
                <div className="text-xl font-bold text-neutral-900 dark:text-white mb-0.5 transition-colors">3+</div>
                <div className="text-[10px] text-neutral-500 tracking-wider font-bold uppercase">Exp. Years</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-neutral-900 dark:text-white mb-0.5 transition-colors">10+</div>
                <div className="text-[10px] text-neutral-500 tracking-wider font-bold uppercase">Projects</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
