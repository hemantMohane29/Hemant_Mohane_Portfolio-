import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import MernStack from './components/MernStack'
import Preloader from './components/Preloader'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const [loading, setLoading] = React.useState(true);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader key="preloader" onLoadingComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="min-h-screen font-sans selection:bg-brand-500/30 flex flex-col relative overflow-x-hidden"
      >
        {/* Global Background Glows */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px]"></div>
        </div>

        <Navbar />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<><Skills /><MernStack /></>} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </motion.div>
    </BrowserRouter>
  )
}

export default App

