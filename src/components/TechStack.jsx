import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layout, Server, Brain, Database, Code,
  Palette, Video, BarChart, Rocket
} from 'lucide-react';

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  const stackData = {
    Frontend: {
      icon: <Layout className="w-5 h-5" />,
      skills: ["React.js", "JavaScript", "HTML5", "CSS3"]
    },
    Backend: {
      icon: <Server className="w-5 h-5" />,
      skills: ["Django", "Node.js", "Express.js"]
    },
    "AI & ML": {
      icon: <Brain className="w-5 h-5" />,
      skills: ["Deep Learning", "Scikit-learn", "Transformers"]
    },
    "Data Science": {
      icon: <BarChart className="w-5 h-5" />,
      skills: ["Python", "NumPy", "Pandas", "Seaborn"]
    },
    Databases: {
      icon: <Database className="w-5 h-5" />,
      skills: ["MongoDB", "NoSQL"]
    },
    Languages: {
      icon: <Code className="w-5 h-5" />,
      skills: ["Python", "C", "C++"]
    },
    Deployment: {
      icon: <Rocket className="w-5 h-5" />,
      skills: ["Vercel", "Render", "Git", "GitHub"]
    },
    "UI&UX Graphics": {
      icon: <Palette className="w-5 h-5" />,
      skills: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Canva"]
    },
    "Photo & Video": {
      icon: <Video className="w-5 h-5" />,
      skills: ["Adobe Premiere Pro", "Wondershare Filmora", "DaVinci Resolve", "CapCut", "Adobe Photoshop", "Picsart", "Hypic"]
    }
  };

  const tabs = Object.keys(stackData);

  return (
    <section id="tech-stack" className="py-24 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200 dark:border-neutral-900 relative overflow-hidden transition-colors duration-500">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-neutral-950 dark:text-white mb-4 tracking-tight transition-colors"
          >
            My Tech <span className="text-brand-500">Stack</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            className="h-1.5 bg-brand-500 rounded-full mb-8"
          ></motion.div>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-base md:text-lg font-bold leading-relaxed transition-colors">
            A comprehensive list of technologies and tools I've mastered across various domains of development and design.
          </p>
        </div>

        {/* Tab Selection Buttons */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-[2rem] backdrop-blur-md max-w-7xl mx-auto transition-colors">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-3 px-6 py-3 rounded-[1.5rem] text-xs font-black transition-all duration-300 relative group overflow-hidden uppercase tracking-wider ${activeTab === tab
                    ? "text-neutral-950 shadow-md"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                  }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="techActiveTab"
                    className="absolute inset-0 bg-brand-500 rounded-[1.5rem]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {stackData[tab].icon}
                  {tab}
                </span>

                {/* Hover effect for non-active tabs */}
                {activeTab !== tab && (
                  <div className="absolute inset-0 bg-brand-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[1.5rem]"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display Area */}
        <div className="max-w-6xl mx-auto min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {stackData[activeTab].skills.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group bg-white dark:bg-neutral-900/40 p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:border-brand-500/40 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden h-full aspect-video justify-center shadow-sm dark:shadow-none transition-colors"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-brand-600 dark:text-brand-500 font-black text-xl mb-4 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-neutral-950 transition-all duration-500 shadow-sm dark:shadow-lg transition-colors">
                    {skill.charAt(0)}
                  </div>

                  <h3 className="text-neutral-900 dark:text-white font-black group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300 text-sm md:text-base uppercase tracking-tight">
                    {skill}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
