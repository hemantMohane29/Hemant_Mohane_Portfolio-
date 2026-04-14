import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, Github, Youtube, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setResult("Sending....");

    const formData = new FormData(event.target);

    // User's private access key for Web3Forms
    formData.append("access_key", "e4b804df-79c0-4e0e-91a1-b2047a76bc02");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setStatus("error");
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-neutral-200 dark:border-neutral-900 relative overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto backdrop-blur-xl bg-neutral-50/90 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 p-6 md:p-10 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-8 relative overflow-hidden"
        >

          <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/20 dark:from-neutral-800/10 to-transparent pointer-events-none"></div>

          <div className="flex-1 relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 dark:text-white mb-6">
              Let's build something <span className="bg-gradient-to-r from-teal-500 via-emerald-400 to-green-600 dark:from-teal-400 dark:via-emerald-300 dark:to-green-500 bg-clip-text text-transparent">Great Together</span>
            </h2>
            <p className="text-neutral-700 dark:text-neutral-400 mb-10 text-sm md:text-base leading-relaxed">
              I'm looking for new opportunities and engaging projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail size={20} strokeWidth={1.5} />, label: 'Email', value: 'hemantmohane29@gmail.com', href: 'mailto:hemantmohane29@gmail.com' },
                { icon: <Linkedin size={20} strokeWidth={1.5} />, label: 'LinkedIn', value: 'Hemant Mohane', href: 'https://www.linkedin.com/in/hemant-mohane-35440a330/' },
                { icon: <Github size={20} strokeWidth={1.5} />, label: 'GitHub', value: 'hemantMohane29', href: 'https://github.com/hemantMohane29' },
                { icon: <Youtube size={20} strokeWidth={1.5} />, label: 'YouTube', value: 'hemant.creates_29', href: 'https://www.youtube.com/@hemant.creates_29' },
                { icon: <MapPin size={20} strokeWidth={1.5} />, label: 'Location', value: 'India', href: null },
              ].map((item, idx) => {
                const Wrapper = item.href ? 'a' : 'div';
                return (
                  <Wrapper
                    key={idx}
                    href={item.href}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-4 transition-colors group ${item.href ? 'cursor-pointer' : ''}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-neutral-950 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest group-hover:dark:text-neutral-400 transition-colors">{item.label}</p>
                      <p className="font-bold text-base text-neutral-900 dark:text-neutral-200">{item.value}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          <div className="flex-1 relative z-10 lg:pl-8">
            <form onSubmit={onSubmit} className="flex flex-col gap-6 h-full justify-between">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest pl-1">Name</label>
                <input type="text" id="name" name="name" required placeholder="Hemant Mohane" className="bg-white dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 text-neutral-950 dark:text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-700" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest pl-1">Email</label>
                <input type="email" id="email" name="email" required placeholder="hemantmohane29@gmail.com" className="bg-white dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 text-neutral-950 dark:text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-700" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest pl-1">Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="What is this regarding?" className="bg-white dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 text-neutral-950 dark:text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-700" />
              </div>
              <div className="flex flex-col gap-1.5 flex-grow">
                <label htmlFor="message" className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest pl-1">Message</label>
                <textarea id="message" name="message" required rows="5" placeholder="Hello, I'd like to talk about..." className="bg-white dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 text-neutral-950 dark:text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all resize-none placeholder:text-neutral-400 dark:placeholder:text-neutral-700 h-full min-h-[150px]"></textarea>
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className={`mt-4 w-full px-7 py-4 rounded-full font-black flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 uppercase tracking-widest text-xs
                  ${status === "success"
                    ? "bg-emerald-500 text-white shadow-emerald-500/20"
                    : "bg-brand-500 hover:bg-brand-400 text-neutral-950 hover:shadow-brand-500/20"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {status === "idle" && <><Send size={18} strokeWidth={2.5} /> Send Message</>}
                {status === "sending" && <>Sending...</>}
                {status === "success" && <><CheckCircle2 size={18} strokeWidth={2.5} /> Message Sent!</>}
                {status === "error" && <>Error! Try Again</>}
              </button>
            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
