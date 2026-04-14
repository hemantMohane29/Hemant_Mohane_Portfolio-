import { User, Mail, MapPin, Calendar, Briefcase, GraduationCap, Rocket, Sprout, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutHome = () => {
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

  return (
    <section id="about-home" className="py-24 border-t border-neutral-200 dark:border-neutral-900 relative transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 dark:text-white mb-2 transition-colors uppercase tracking-tight">About <span className="text-brand-500">Me</span></h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-semibold transition-colors">
            Get to know more about me, my background, and what drives my passion for web development & ML.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start"
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
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 transition-colors">Hello! I'm <span className="text-brand-600 dark:text-brand-400 transition-colors">Hemant Mohane</span></h3>
                <p className="text-neutral-700 dark:text-neutral-400 leading-relaxed text-sm md:text-base transition-colors">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[2rem] bg-neutral-50/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-4 shadow-sm dark:shadow-2xl transition-colors"
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
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
