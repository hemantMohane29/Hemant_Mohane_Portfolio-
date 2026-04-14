import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layout, Server, Database, Wrench, ShieldCheck, Users,
  Palette, Video, Play, Monitor
} from 'lucide-react';

const skillData = {
  Frontend: [
    { name: "React.js", level: 95 },
    { name: "JavaScript", level: 95 },
    { name: "HTML5/CSS3", level: 90 },
    { name: "Redux", level: 65 },
    { name: "Next.js", level: 70 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Framer Motion", level: 70 },
  ],
  Backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 90 },
    { name: "REST API", level: 80 },
    { name: "JWT", level: 90 },
    { name: "OAuth", level: 80 },
    { name: "Websockets", level: 85 },
    // { name: "Laravel", level: 80 }
  ],
  Database: [
    { name: "MongoDB/atlas", level: 95 },
    { name: "Mongoose", level: 90 }
  ],
  "UI&UX Graphics": [
    { name: "Adobe Illustrator", level: 85 },
    { name: "Adobe Photoshop", level: 80 },
    { name: "Figma", level: 75 },
    { name: "Canva", level: 90 }
  ],
  "Photo & Video Editor": [
    { name: "Adobe Premiere Pro", level: 75 },
    { name: "Wondershare Filmora", level: 90 },
    { name: "DaVinci Resolve", level: 20 },
    { name: "CapCut", level: 95 },
    { name: "Adobe Photoshop", level: 80 },
    { name: "Picsart", level: 70 },
    { name: "Hypic", level: 80 }
  ],
  "Animation": [
    { name: "Adobe After Effect", level: 70 },
    { name: " Blender", level: 30 }
  ],
  Tools: [
    { name: "VS Code", level: 95 },
    { name: "Vite", level: 90 },
    { name: "Testing Library", level: 85 },
    { name: "npm", level: 95 },
    { name: "Postman", level: 90 },
    { name: "GitHub", level: 80 },
    { name: "SubLime merge", level: 50 }
  ],
  Testing: [
    { name: "jest", level: 30 }
  ],
  "Soft Skills": [
    { name: "Problem Solving", level: 65 },
    { name: "Communication", level: 90 },
    { name: "Team Collaboration", level: 95 },
    { name: "Agile Methodology", level: 90 },
    { name: "Project Management", level: 85 },
    { name: "Time Management", level: 90 },
    { name: "Leadership", level: 85 }
  ]
};

const SkillBar = ({ name, level }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-neutral-900 dark:text-white font-bold text-sm md:text-base">{name}</span>
      <span className="text-neutral-500 text-xs md:text-sm font-medium">{level}%</span>
    </div>
    <div className="h-1.5 md:h-2 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-brand-500 via-amber-400 to-yellow-500 rounded-full"
      />
    </div>
  </div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  const tabs = [
    { id: 'Frontend', icon: <Layout size={16} /> },
    { id: 'Backend', icon: <Server size={16} /> },
    { id: 'Database', icon: <Database size={16} /> },
    { id: 'Tools', icon: <Wrench size={16} /> },
    { id: 'Testing', icon: <ShieldCheck size={16} /> },
    { id: 'UI&UX Graphics', icon: <Palette size={16} /> },
    { id: 'Photo & Video Editor', icon: <Video size={16} /> },
    { id: 'Animation', icon: <Play size={16} /> },
    { id: 'Soft Skills', icon: <Users size={16} /> }
  ];

  return (
    <section id="skill" className="py-24 border-t border-neutral-200 dark:border-neutral-900 relative transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-neutral-950 dark:text-white mb-4 tracking-tight transition-colors">
            Skills & <span className="text-brand-500">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mb-6"></div>
          <p className="text-neutral-700 dark:text-neutral-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-semibold transition-colors">
            My technical skills and professional tools that I use to build modern web applications.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-x-auto max-w-full no-scrollbar transition-colors">
            <div className="flex gap-1 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 md:px-7 py-2 md:py-2.5 rounded-full text-xs font-bold transition-all duration-300 relative ${activeTab === tab.id
                    ? "text-neutral-950"
                    : "text-neutral-700 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                    }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="skillActiveTab"
                      className="absolute inset-0 bg-brand-500 rounded-full -z-1"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab.icon}
                    {tab.id}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-6xl mx-auto p-8 md:p-12 rounded-[2.5rem] bg-neutral-50/90 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm shadow-xl dark:shadow-2xl relative overflow-hidden group transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2 relative z-10"
            >
              {skillData[activeTab].map((skill, idx) => (
                <SkillBar key={idx} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
