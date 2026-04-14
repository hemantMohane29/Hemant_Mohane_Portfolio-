import React from 'react';
import { Briefcase, Calendar, BookOpen, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const workExperience = [
    {
      title: "Social Media & IT Lead",
      company: "Kaggle Koders",
      location: "Bhopal, Madhya Pradesh, India",
      period: "Oct 2025 - Present",
      mode: "Hybrid",
      description: "Leading IT initiatives and managing social media strategy to enhance digital presence and technical community engagement.",
      skills: ["IT Leadership", "Social Media Strategy", "Community Management"]
    },
    {
      title: "Marketing (SEO & Graphic Design) Intern",
      company: "Zarthi",
      location: "Bengaluru, Karnataka, India",
      period: "Aug 2025 - Present",
      mode: "Remote",
      description: "Focused on SEO optimization and creative graphic design to drive organic growth and brand visibility.",
      skills: ["SEO", "Graphic Design", "Digital Marketing"]
    },
    {
      title: "Web Developer Internship",
      company: "TEACHNOOK",
      location: "Bengaluru, Karnataka, India",
      period: "Mar 2024 - Jan 2025",
      mode: "Remote",
      description: "Developed and maintained web applications, collaborating on front-end and back-end solutions.",
      skills: ["Web Development", "React.js", "Full-Stack"]
    },
    {
      title: "Digital Marketing Intern",
      company: "Sunrise Digital Tech.",
      location: "Burhanpur, Madhya Pradesh, India",
      period: "Feb 2023 - Feb 2024",
      mode: "On-site",
      description: "Executed digital marketing campaigns and managed online advertising to improve brand reach.",
      skills: ["Digital Marketing", "Campaign Management", "Online Advertising"]
    }
  ];

  const educationExperience = [
    {
      title: "Bachelor of Technology - BTech, CSE (AI & DS)",
      company: "Sagar Group of Institutions - SISTec",
      period: "Aug 2023 – Aug 2027",
      grade: "Grade: A",
      description: "Specializing in Artificial Intelligence and Data Science.",
      skills: ["AI", "Data Science", "Computer Science"]
    },
    {
      title: "12th, High School",
      company: "Shubhash Excellent High Secondary School, Burhanpur",
      period: "Jun 2022 – Apr 2023",
      grade: "Grade: 91.2%",
      description: "Completed secondary education with high academic standing."
    },
    {
      title: "10th, Education Administration",
      company: "Sarsawati Shishu Mandir, Lalbag, Burhanpur",
      period: "Jun 2020 – Apr 2021",
      grade: "Grade: 92%",
      description: "Foundation schooling with excellent academic performance."
    }
  ];

  const TimelineItem = ({ item, isWork, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-row gap-6 items-start group"
    >
      <div className="flex relative z-10 w-12 h-12 rounded-full bg-white dark:bg-neutral-950 border-2 border-brand-500/20 shadow-md dark:shadow-[0_0_15px_rgba(245,158,11,0.1)] items-center justify-center text-brand-600 dark:text-brand-500 shrink-0 group-hover:scale-110 group-hover:bg-brand-500/10 transition-all duration-300">
        {isWork ? <Briefcase size={20} /> : <GraduationCap size={20} />}
      </div>

      <div className="bg-neutral-50/90 dark:bg-neutral-900/40 p-6 md:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 w-full hover:border-brand-500/30 transition-all duration-300 shadow-xl dark:shadow-none relative overflow-hidden backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors uppercase tracking-tight">{item.title}</h3>
              <h4 className="text-sm text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest transition-colors">{item.company}</h4>
              {item.location && <p className="text-neutral-500 text-xs mt-1 transition-colors">{item.location} • {item.mode}</p>}
            </div>
            <div className="flex flex-col items-end gap-2 mt-3 md:mt-0">
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-xs font-bold uppercase py-1.5 px-3 rounded-lg bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 transition-colors">
                <Calendar size={14} className="text-brand-600 dark:text-brand-500" />
                <span>{item.period}</span>
              </div>
              {item.grade && (
                <span className="text-[10px] font-bold text-brand-600 dark:text-brand-500 uppercase tracking-tighter bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/10 transition-colors">
                  {item.grade}
                </span>
              )}
            </div>
          </div>

          <p className="text-neutral-700 dark:text-neutral-400 leading-relaxed text-sm md:text-base mb-6 transition-colors">
            {item.description}
          </p>

          {item.skills && (
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, sIdx) => (
                <span key={sIdx} className="text-[10px] font-bold uppercase px-3 py-1 bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 rounded-lg transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-24 border-t border-neutral-200 dark:border-neutral-900 relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Professional Experience Section */}
        <div className="mb-24 relative">
          <div className="absolute -top-16 left-0 text-[8rem] md:text-[12rem] font-black text-neutral-950/[0.03] dark:text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter transition-colors">
            Experience
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto flex flex-col items-center text-center mb-14 relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white mb-2 uppercase tracking-tight transition-colors">Professional <span className="text-brand-500">Experience</span></h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-neutral-700 dark:text-neutral-400 max-w-xl text-sm md:text-base leading-relaxed font-semibold transition-colors">
              My career timeline and technical contributions in the industry.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative px-2">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-neutral-300 dark:via-neutral-800 to-transparent transition-colors"></div>
            <div className="space-y-12">
              {workExperience.map((item, idx) => (
                <TimelineItem key={idx} item={item} isWork={true} index={idx} />
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="relative">
          <div className="absolute -top-16 left-0 text-[8rem] md:text-[12rem] font-black text-neutral-950/[0.03] dark:text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter transition-colors">
            Education
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto flex flex-col items-center text-center mb-14 relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white mb-2 uppercase tracking-tight transition-colors">My <span className="text-brand-500">Journey</span></h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-neutral-700 dark:text-neutral-400 max-w-xl text-sm md:text-base leading-relaxed font-semibold transition-colors">
              My academic foundations and educational milestones.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative px-2">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-neutral-300 dark:via-neutral-800 to-transparent transition-colors"></div>
            <div className="space-y-12">
              {educationExperience.map((item, idx) => (
                <TimelineItem key={idx} item={item} isWork={false} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
