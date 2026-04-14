import React from 'react';
import { motion } from 'framer-motion';

const MernStack = () => {
  const techStack = [
    {
      letter: 'F',
      title: 'Frontend',
      description: 'React.js, JavaScript, HTML5, CSS3',
      color: 'bg-blue-500/10 text-blue-600 dark:text-blue-500',
      borderColor: 'border-blue-500/20'
    },
    {
      letter: 'B',
      title: 'Backend',
      description: 'Django, Node.js, Express.js',
      color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-500',
      borderColor: 'border-emerald-500/20'
    },
    {
      letter: 'A',
      title: 'AI & ML',
      description: 'Deep Learning, Scikit-learn, Transformers',
      color: 'bg-purple-500/10 text-purple-600 dark:text-purple-500',
      borderColor: 'border-purple-500/20'
    },
    {
      letter: 'D',
      title: 'Data Science',
      description: 'Python, NumPy, Pandas, Seaborn',
      color: 'bg-amber-500/10 text-amber-600 dark:text-amber-500',
      borderColor: 'border-amber-500/20'
    },
    {
      letter: 'D',
      title: 'Databases',
      description: 'MongoDB, NoSQL',
      color: 'bg-green-500/10 text-green-600 dark:text-green-500',
      borderColor: 'border-green-500/20'
    },
    {
      letter: 'L',
      title: 'Languages',
      description: 'Python, C, C++',
      color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-500',
      borderColor: 'border-cyan-500/20'
    },
    {
      letter: 'D',
      title: 'Deployment',
      description: 'Vercel, Render, Git, GitHub',
      color: 'bg-orange-500/10 text-orange-600 dark:text-orange-500',
      borderColor: 'border-orange-500/20'
    },
    {
      letter: 'U',
      title: 'UI&UX Graphics',
      description: 'Adobe Illustrator, Adobe Photoshop, Figma, Canva',
      color: 'bg-pink-500/10 text-pink-600 dark:text-pink-500',
      borderColor: 'border-pink-500/20'
    },
    {
      letter: 'P',
      title: 'Photo & video',
      description: 'Adobe Premiere Pro, Wondershare Filmora, DaVinci Resolve, CapCut, Adobe Photoshop, Picsart, Hypic',
      color: 'bg-red-500/10 text-red-600 dark:text-red-500',
      borderColor: 'border-red-500/20'
    }
  ];

  return (
    <section className="py-24 border-t border-neutral-200 dark:border-neutral-900 relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto flex flex-col items-center text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-black text-neutral-950 dark:text-white mb-2 uppercase tracking-tight transition-colors">My <span className="text-brand-500">Tech Stack</span></h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-neutral-900/40 p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:border-brand-500/30 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden h-full shadow-lg dark:shadow-none"
            >
              {/* Card Decoration */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-500/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Circular Letter Icon */}
              <div className={`w-20 h-20 rounded-full ${tech.color} border ${tech.borderColor} flex items-center justify-center text-3xl font-black mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm dark:shadow-black/20`}>
                {tech.letter}
              </div>

              <h3 className="text-xl font-black text-neutral-950 dark:text-white mb-4 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors uppercase tracking-widest">{tech.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-500 text-sm leading-relaxed font-bold transition-colors">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MernStack;
