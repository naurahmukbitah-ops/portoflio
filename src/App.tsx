import React from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { 
  Github, 
  Instagram, 
  Mail, 
  MessageCircle, 
  ExternalLink, 
  Code2, 
  Layout, 
  Sparkles, 
  MousePointer2,
  ChevronDown,
  ArrowRight
} from "lucide-react";

const Section = ({ children, id, className = "" }: { children: React.ReactNode, id?: string, className?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

const ProjectCard = ({ title, description, link, icon: Icon }: { title: string, description: string, link: string, icon: any }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    className="glass-card p-8 rounded-3xl flex flex-col h-full group"
  >
    <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-slate-800">{title}</h3>
    <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
    >
      View Project <ExternalLink size={18} />
    </a>
  </motion.div>
);

const SkillIcon = ({ icon: Icon, label }: { icon: any, label: string }) => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    className="flex flex-col items-center gap-4 p-6 glass-card rounded-2xl w-full"
  >
    <div className="text-emerald-500">
      <Icon size={40} strokeWidth={1.5} />
    </div>
    <span className="text-sm font-medium text-slate-700 text-center">{label}</span>
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen gradient-bg selection:bg-emerald-200 selection:text-emerald-900">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-wider uppercase mb-6 inline-block"
          >
            Welcome to my space
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-6 tracking-tight">
            Hello, I'm <span className="text-emerald-600 italic">Naurah</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium">
            Student | Creative Developer | Digital Project Builder
          </p>
          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed">
            I am a student who enjoys building digital projects, interactive websites, and creative technology solutions.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all flex items-center gap-3 mx-auto group"
          >
            View My Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Decorative elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-mint/40 rounded-full blur-3xl"
        />

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 text-slate-400"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <Section id="about" className="flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">About Me</h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              I am a passionate student with a deep interest in the intersection of technology and creativity. 
              My journey in web development started with a curiosity about how digital experiences are crafted, 
              and it has evolved into a love for building functional and beautiful digital solutions.
            </p>
            <p>
              I specialize in creating interactive web applications that solve real-world problems. 
              Whether it's a management tool for schools or a modern landing page, I focus on clean code, 
              user-centric design, and smooth interactions.
            </p>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="w-full aspect-square bg-emerald-100 rounded-[3rem] rotate-3 absolute inset-0 -z-10" />
          <div className="w-full aspect-square glass-card rounded-[3rem] flex items-center justify-center p-12">
            <div className="text-center">
              <Sparkles size={80} className="text-emerald-500 mx-auto mb-6" />
              <p className="text-emerald-800 font-bold text-xl italic">"Creating with purpose, designing with heart."</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">My Projects</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">A selection of my recent work and digital experiments.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Tahfidz Management Application"
            description="A web application that helps Islamic schools manage Quran memorization using the Sabaq, Sabqi, and Manzil method. Built with a focus on efficiency and ease of use for teachers and students."
            link="https://httpsdarulallm-tahfidz.my.id"
            icon={Layout}
          />
          <ProjectCard
            title="Tahfidz Landing Page"
            description="A landing page created to promote the Tahfidz application and provide a simple and modern interface for users. Designed with a clean aesthetic to highlight key features."
            link="https://tahfidz.httpsdarulallm-tahfidz.my.id/"
            icon={Sparkles}
          />
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Skills & Expertise</h2>
          <p className="text-slate-500">The tools and technologies I use to bring ideas to life.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SkillIcon icon={Code2} label="Web Development" />
          <SkillIcon icon={MousePointer2} label="UI/UX Design" />
          <SkillIcon icon={Sparkles} label="Creative Digital Projects" />
          <SkillIcon icon={Layout} label="Interactive Web Design" />
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="text-center">
        <div className="glass-card p-12 md:p-20 rounded-[4rem] max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">Let's Connect</h2>
          <p className="text-xl text-slate-600 mb-12">
            Have a project in mind or just want to say hi? I'd love to hear from you!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              whileHover={{ y: -5 }}
              href="mailto:naurahmukbitah@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-slate-700 font-semibold border border-emerald-100"
            >
              <Mail className="text-emerald-500" /> Email
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-slate-700 font-semibold border border-emerald-100"
            >
              <Instagram className="text-emerald-500" /> Instagram
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-slate-700 font-semibold border border-emerald-100"
            >
              <MessageCircle className="text-emerald-500" /> WhatsApp
            </motion.a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-emerald-100">
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors"><Github size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors"><Mail size={20} /></a>
        </div>
        <p className="text-slate-500 font-medium">
          © 2026 Naurah Portfolio • Built with Love & Emerald
        </p>
      </footer>
    </div>
  );
}
