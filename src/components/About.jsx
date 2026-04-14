import React, { useState } from 'react';
import { User, Mail, MapPin, Calendar, Briefcase, GraduationCap, Award, Rocket, Sprout, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('work');

  const infoItems = [
    { label: 'Name', value: 'Hemant Mohane', icon: <User size={16} /> },
    { label: 'Email', value: 'hemantmohane29@gmail.com', icon: <Mail size={16} /> },
    { label: 'Location', value: 'Bhopal M.P.', icon: <MapPin size={16} /> },
    { label: 'Availability', value: 'Freelance / Internships', icon: <Calendar size={16} /> },
  ];

  const features = [
    {
      title: "Education",
      desc: "B.Tech CS (2023-2027) at Sagar Institute of Science and Technology.",
      icon: <GraduationCap size={24} />,
      color: "border-brand-500/20 bg-brand-500/5 text-brand-600 dark:text-brand-400"
    },
    {
      title: "Experience",
      desc: "MERN Stack & ML. Worked on multiple live projects.",
      icon: <Briefcase size={24} />,
      color: "border-brand-500/20 bg-brand-500/5 text-brand-600 dark:text-brand-400"
    },
    {
      title: "Expertise",
      desc: "Building scalable applications with MongoDB, Express, React, Node.js.",
      icon: <Rocket size={24} />,
      color: "border-brand-500/20 bg-brand-500/5 text-brand-600 dark:text-brand-400"
    },
    {
      title: "Learning",
      desc: "Continuously exploring JavaScript & Machine Learning possibilities.",
      icon: <Sprout size={24} />,
      color: "border-brand-500/20 bg-brand-500/5 text-brand-600 dark:text-brand-400"
    }
  ];

  const workExperience = [
    {
      role: 'Backend Developer Intern',
      company: 'Teachnook.ai',
      duration: 'March 2025 - Present',
      points: [
        'Developed and maintained RESTful APIs using Laravel and PHP for various application features.',
        'Integrated third-party services and APIs to enhance application functionality.',
        'Collaborated with frontend developers to integrate APIs seamlessly into the application.',
      ],
    },
    {
      role: 'Frontend Intern',
      company: 'Infosys (Team Virtual Labs, IIT Roorkee)',
      duration: 'April 2025 - June 2025',
      points: [
        'Developed a website for the Refrigeration and Air Conditioning Virtual Lab.',
        'Implemented a responsive design to ensure accessibility and optimal viewing on all devices.',
        'Focused on creating an interactive user interface to enhance the overall experience.',
      ],
    },
  ];

  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence & Data Science',
      institution: 'SISTEC College',
      duration: '2023 - 2027',
      description: 'Focused on full-stack development, software engineering, and cloud technologies. Worked on multiple real-world projects, including event management and AI-driven applications.',
    },
  ];

  const awards = [
    {
      title: 'Adhaar 2.0',
      issuer: 'SISTec Gandhi Nagar',
      year: '2024',
      description: 'Won 2nd prize in Advance AI Chatbot development for building a highly efficient and visually appealing website format.',
    },
    {
      title: 'Winner at Samadhan 1.0',
      issuer: 'AI Chatbot Hackathon',
      year: '2024',
      description: 'Developed a web app featuring AI-powered biodiversity identification and heritage site exploration, enhancing awareness and accessibility.',
    },
    {
      title: 'Appreciation Certificate for Sagar Events',
      issuer: 'SISTec Gandhi Nagar',
      year: '2025',
      description: 'Recognized for successfully managing and developing the Sagar Events platform, enhancing event coordination and user experience.',
    },
  ];

  return (
    <section id="about" className="pt-20 md:pt-24 pb-24 container mx-auto px-6 md:px-12 relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white mb-2 uppercase tracking-tight transition-colors">About <span className="text-brand-500">Me</span></h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-semibold transition-colors">
            Get to know more about me, my background, and what drives my passion for web development & ML.
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start"
        >
          {/* Left: Image */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl transition-colors">
              <img
                src="/profile-new.jpg"
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right: Bio & Info */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 transition-colors">Hello! I'm <span className="text-brand-600 dark:text-brand-400">Hemant Mohane</span></h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base transition-colors">
                I'm a passionate MERN Stack Developer & ML learner currently pursuing B.Tech CSE - AI&DS at SISTEC College. My journey in web development started with exploring JavaScript and its endless possibilities. I specialize in building scalable applications with a focus on performance and user experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {infoItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800/50 shadow-sm transition-all hover:border-brand-500/30">
                  <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-600 dark:text-brand-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold">{item.label}</p>
                    <p className="text-sm text-neutral-800 dark:text-neutral-200 font-medium transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/Hemant%20Mohane%20resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-brand-500 hover:bg-brand-400 text-neutral-950 font-bold rounded-full transition-all flex items-center gap-2 shadow-lg hover:shadow-brand-500/20 active:scale-95"
              >
                <Download size={18} /> View Resume
              </a>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats/Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[2rem] bg-neutral-50/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-4 shadow-sm dark:shadow-2xl"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center border shadow-sm transition-transform duration-500 group-hover:scale-110 ${feature.color}`}>
                {feature.icon}
              </div>
              <div>
                <h4 className="text-neutral-900 dark:text-white font-extrabold mb-2 text-lg tracking-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors uppercase tracking-widest text-xs">{feature.title}</h4>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed transition-colors">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabbed Detailed Section */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-brand-500/5 blur-[100px] pointer-events-none -z-10"></div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: 'work', label: 'Work', icon: <Briefcase size={14} /> },
              { id: 'education', label: 'Education', icon: <GraduationCap size={14} /> },
              { id: 'awards', label: 'Awards', icon: <Award size={14} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-6 py-2.5 rounded-xl font-bold text-xs transition-all uppercase tracking-widest ${activeTab === tab.id
                  ? 'bg-brand-500 text-neutral-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                  : 'bg-neutral-100 dark:bg-neutral-900/50 text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {activeTab === 'work' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                {workExperience.map((job, index) => (
                  <div key={index} className="group relative p-6 mb-4 rounded-2xl bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 hover:border-brand-500/30 transition-all shadow-sm dark:shadow-none">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors uppercase tracking-tight">{job.role}</h3>
                        <p className="text-brand-600 dark:text-brand-500 font-bold tracking-widest text-[10px] uppercase transition-colors">{job.company}</p>
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 text-[10px] font-bold border border-neutral-200 dark:border-neutral-800 uppercase tracking-widest transition-colors">
                        {job.duration}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {job.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-400 text-sm md:text-base leading-relaxed transition-colors">
                          <div className="mt-2 w-1 h-1 rounded-full bg-brand-500 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                {education.map((edu, index) => (
                  <div key={index} className="group relative p-6 rounded-2xl bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 hover:border-brand-500/30 transition-all shadow-sm dark:shadow-none">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors uppercase tracking-tight">{edu.degree}</h3>
                        <p className="text-brand-600 dark:text-brand-500 font-bold tracking-widest text-[10px] uppercase transition-colors">{edu.institution}</p>
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 text-[10px] font-bold border border-neutral-200 dark:border-neutral-800 uppercase tracking-widest transition-colors">
                        {edu.duration}
                      </div>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-400 leading-relaxed text-sm md:text-base transition-colors">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'awards' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 grid grid-cols-1 md:grid-cols-2 gap-4">
                {awards.map((award, index) => (
                  <div key={index} className="group p-6 rounded-2xl bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 hover:border-brand-500/30 transition-all shadow-sm dark:shadow-none">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-950 text-brand-600 dark:text-brand-400 border border-neutral-200 dark:border-neutral-800 group-hover:bg-brand-500 group-hover:text-neutral-950 transition-all duration-300 shadow-sm">
                        <Award size={20} />
                      </div>
                      <span className="text-neutral-500 text-[10px] font-bold tracking-widest uppercase py-1 px-2 bg-neutral-100 dark:bg-neutral-950 rounded border border-neutral-200 dark:border-neutral-800 transition-colors">{award.year}</span>
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{award.title}</h3>
                    <p className="text-neutral-500 text-[11px] font-bold uppercase mb-3 tracking-wider transition-colors">{award.issuer}</p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-xs leading-relaxed line-clamp-3 transition-colors">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
