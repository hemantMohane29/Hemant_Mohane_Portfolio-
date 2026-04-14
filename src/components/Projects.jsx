import React from 'react';
import { ExternalLink, Github, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "AI chatbot (Radha 1.0) 🚀",
    description: "Radha 1.0 is a user-friendly chatbot capable of performing question-and-answer interactions. The goal of this project was to explore the basics of chatbot design and development while delivering a smooth and intuitive user experience.",
    icon: <MessageSquare size={26} strokeWidth={1.5} />,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "https://hemantmohane29.github.io/AI-Base-CHATBOT-Radha-1.0-/",
    image: "/chatbot.png"
  },
  {
    title: "Advance AI Chatbot (radha 2.0 )  🚀",
    description: "secured 🥈 2nd position in Adhar 2.0, a prestigious event organized by SISTec GN. It was an incredible experience showcasing my project, Advanced AI Chatbot, which aims to push the boundaries of conversational AI and create meaningful, intelligent interactions.",
    icon: <MessageSquare size={26} strokeWidth={1.5} />,
    tech: ["HTML", "CSS", "JavaScript", "Gemini API"],
    github: "#",
    live: "https://hemantmohane29.github.io/Advanced-AI-Base-CHATBOT-Radha-2.0-/",
    image: "/chatbot2.png"
  },
  {
    title: "WEBSITE BUILDER APPLICATION (RADHA 3.0) 🚀",
    description: "RADHA 3.0 is an AI-powered website builder application. The fastest way to go from idea to deployed app. Use the powerful IDE or simply describe your vision, and it will generate the initial code for you.",
    icon: <MessageSquare size={26} strokeWidth={1.5} />,
    tech: ["HTML5", "CSS3", "JavaScript", "Gemini API"],
    github: "#",
    live: "https://hemantmohane29.github.io/SAMADHAN-2.0-WEBSITE-BUILDER-APPLICATION-/",
    image: "/radha3.png"
  },
  {
    title: "“HealthGPT” – AI-Powered Healthcare Assistant  🚀",
    description: "I recently developed HealthGPT, an intelligent healthcare assistant designed to provide personalized health insights using AI",
    icon: <MessageSquare size={26} strokeWidth={1.5} />,
    tech: ["Python", "Streamlit", "LangChain", "Ollama", "HTML", "CSS"],
    github: "#",
    live: "https://samadhan10-healthcare-chatbot.streamlit.app/",
    image: "/healthgpt.png"
  },
  {
    title: "QR Studio – Custom QR Code Generator Web App 🚀",
    description: "I developed QR Studio, a modern and fully customizable QR Code Generator web application that allows users to generate, preview, and download QR codes with real-time styling options.",
    icon: <MessageSquare size={26} strokeWidth={1.5} />,
    tech: ["Python", "Flask", "HTML", "CSS", "REST API"],
    github: "#",
    live: "https://web-production-5453d.up.railway.app/",
    image: "/qrstudio.png"
  },
  {
    title: "🚀 Medical Expense(Insurance) Predictor – ML Powered Insurance Cost Estimation",
    description: "I developed a Machine Learning-based Insurance Cost Prediction Web Application that estimates annual medical expenses based on demographic and health-related inputs. The application leverages a trained regression model to provide accurate cost predictions in Indian Rupees (₹).",
    icon: <MessageSquare size={26} strokeWidth={1.5} />,
    tech: ["Linear Regression", "Django", "Joblib", "Pandas", "HTML", "CSS"],
    github: "#",
    live: "https://web-production-00dd.up.railway.app/",
    image: "/medical_predictor.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 border-t border-neutral-200 dark:border-neutral-900 relative transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto flex flex-col items-center text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-black text-neutral-950 dark:text-white mb-2 uppercase tracking-tight transition-colors">Featured <span className="text-brand-500">Projects</span></h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400 max-w-xl text-sm md:text-base leading-relaxed font-semibold transition-colors">
            A selection of my recent work focusing on scalable web development and intelligent artificial intelligence solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-neutral-50/90 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden hover:border-brand-500/30 transition-all duration-300 flex flex-col relative shadow-lg hover:shadow-2xl dark:shadow-none"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Project Image */}
              {project.image && (
                <div className="relative h-48 overflow-hidden border-b border-neutral-200 dark:border-neutral-800 transition-colors">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
              )}

              <div className="p-8 flex-grow relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-brand-600 dark:text-brand-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-500/10 transition-all duration-300 shadow-sm transition-colors">
                    {React.cloneElement(project.icon, { size: 22 })}
                  </div>
                  <h3 className="text-lg font-black text-neutral-950 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors tracking-tight line-clamp-1">{project.title}</h3>
                </div>

                <p className="text-neutral-700 dark:text-neutral-400 text-sm mb-6 leading-relaxed line-clamp-3 transition-colors">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-[10px] font-bold uppercase px-3 py-1 bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-500 border border-neutral-200 dark:border-neutral-800 rounded-lg transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-8 py-5 bg-neutral-50 dark:bg-neutral-950/50 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center text-[10px] font-black uppercase tracking-widest relative z-10 backdrop-blur-sm transition-colors">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-all">
                  <Github size={14} /> Source
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-600 dark:text-brand-500 hover:text-brand-500 dark:hover:text-brand-400 transition-all group/link font-black">
                  Demo <ExternalLink size={14} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
