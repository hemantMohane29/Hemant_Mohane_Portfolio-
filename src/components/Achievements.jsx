import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Code2, Rocket, Laptop } from 'lucide-react';

const achievements = [
  {
    title: 'Adhaar 2.0 Winner',
    issuer: 'SISTec Gandhi Nagar',
    year: '2024',
    description: 'Won 2nd prize in Advance AI Chatbot development for building a highly efficient and visually appealing website format.',
    icon: <Trophy className="w-8 h-8 text-amber-500 dark:text-amber-400" />,
    color: 'from-amber-500/10 to-yellow-500/5',
    image: '/adhar-award.jpg'
  },
  {
    title: 'Winner at Samadhan 1.0',
    issuer: 'AI Chatbot Hackathon',
    year: '2024',
    description: 'Developed a web app featuring AI-powered biodiversity identification and heritage site exploration.',
    icon: <Medal className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    color: 'from-blue-500/10 to-indigo-500/5',
    image: '/samadhan-award.jpg'
  },
  {
    title: 'PPL Runner Up',
    issuer: 'Python Premier League',
    year: '2024',
    description: 'Achieved Runner Up position in a competitive Python-based programming contest, showcasing advanced problem-solving skills.',
    icon: <Code2 className="w-8 h-8 text-purple-500 dark:text-purple-400" />,
    color: 'from-purple-500/10 to-blue-500/5',
    image: '/ppl-award.jpg'
  },
  {
    title: 'Sagar Events Recognition',
    issuer: 'SISTec Gandhi Nagar',
    year: '2025',
    description: 'Appreciation for successfully managing and developing the Sagar Events platform, enhancing event coordination.',
    icon: <Award className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />,
    color: 'from-emerald-500/10 to-teal-500/5',
    image: '/sagar-award.jpg'
  },
  {
    title: 'SAC Digital & IT Lead',
    issuer: 'Student Activity Council',
    year: '2024 - 2026',
    description: 'Serving as the Digital & IT Lead for SAC, managing all digital infrastructure and technology initiatives for campus activities.',
    icon: <Laptop className="w-8 h-8 text-cyan-500 dark:text-cyan-400" />,
    color: 'from-cyan-500/10 to-blue-500/5',
    image: '/sac-lead.jpg'
  },
  {
    title: 'TEDx SISTec Bhopal 2025',
    issuer: 'Idea to Impact',
    year: '2025',
    description: 'An inspiring experience learning from incredible speakers like Dr. Varun Kapoor Sir and Ishan Haydn Sir. Grateful for the exposure and motivation!',
    icon: <Rocket className="w-8 h-8 text-red-500" />,
    color: 'from-red-500/10 to-orange-500/5',
    image: '/tedx-event.jpg'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 border-t border-neutral-200 dark:border-neutral-900 relative overflow-hidden bg-transparent transition-colors duration-500">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white mb-4 tracking-tight uppercase transition-colors">
            Major <span className="text-brand-500">Achievements</span>
          </h2>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg transition-colors">
            A showcase of my recent wins, leadership roles, and major event participation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group p-8 rounded-3xl bg-white/40 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm shadow-lg dark:shadow-2xl overflow-hidden h-full flex flex-col transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10 flex flex-col h-full">
                {achievement.image && (
                  <div className="mb-6 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 aspect-video relative group/img shadow-md group-hover:shadow-xl transition-all duration-500">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 dark:from-neutral-950/80 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Campus Moment</span>
                    </div>
                  </div>
                )}

                <div className="mb-6 p-4 w-fit rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {achievement.icon}
                </div>

                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-yellow-500 transition-colors">
                    {achievement.title}
                  </h3>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded bg-yellow-500 text-black">
                    {achievement.year}
                  </span>
                </div>

                <p className="text-brand-600 dark:text-yellow-500/80 text-xs font-black uppercase tracking-widest mb-4 transition-colors">
                  {achievement.issuer}
                </p>

                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed transition-colors group-hover:text-neutral-900 dark:group-hover:text-neutral-300">
                  {achievement.description}
                </p>
              </div>

              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 blur-2xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
