import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Code, Palette, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const PROJECTS = [
  {
    title: "EcoSphere",
    category: "Web Application",
    description: "A sustainable living platform built with React and Node.js.",
    image: "https://images.unsplash.com/photo-1542601906-973be1f9a211?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Tailwind", "Firebase"],
    link: "#"
  },
  {
    title: "Lumina UI",
    category: "Design System",
    description: "A comprehensive component library for modern web interfaces.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "Storybook", "Framer"],
    link: "#"
  },
  {
    title: "Nova Analytics",
    category: "Data Visualization",
    description: "Real-time dashboard for complex data streams.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&w=800&q=80",
    tags: ["D3.js", "Next.js", "PostgreSQL"],
    link: "#"
  }
];

const SKILLS = [
  { 
    name: "Frontend", 
    icon: <Code className="w-5 h-5" />, 
    items: ["React", "TypeScript", "Tailwind", "Next.js"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Design", 
    icon: <Palette className="w-5 h-5" />, 
    items: ["Figma", "UI/UX", "Motion", "Typography"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Performance", 
    icon: <Zap className="w-5 h-5" />, 
    items: ["Vite", "Web Vitals", "Optimization", "SEO"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-zinc-950 overflow-x-hidden"
    >
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass border-b' : 'py-8 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            variants={itemVariants}
            className="text-xl font-display font-bold tracking-tighter"
          >
            PORTFOLIO<span className="text-emerald-500">.</span>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="hidden md:flex gap-8 text-sm font-medium text-zinc-400"
          >
            {['Work', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="flex gap-4"
          >
            <Github className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants}>
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6"
            >
              Available for work
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight leading-[0.9] mb-8 text-gradient">
              Crafting digital <br />
              <span className="text-zinc-500 italic">experiences</span> that <br />
              matter.
            </h1>
            <p className="max-w-xl text-lg text-zinc-400 leading-relaxed mb-10">
              I'm a designer and developer focused on building high-performance, 
              beautifully crafted web applications with a focus on user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2 group"
              >
                View Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                About Me
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.05, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full" 
        />
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-500 mb-4">Selected Work</h2>
              <h3 className="text-4xl font-display font-bold">Featured Projects</h3>
            </motion.div>
            <motion.p variants={itemVariants} className="text-zinc-500 max-w-xs md:text-right">
              A collection of digital products I've built from the ground up.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PROJECTS.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group cursor-pointer glass p-8 rounded-2xl hover:border-emerald-500/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-6">
                  <p className="text-xs font-bold text-emerald-500 uppercase tracking-wider">{project.category}</p>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                <p className="text-zinc-400 mb-8 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills/About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-500 mb-6">Expertise</motion.h2>
              <motion.h3 variants={itemVariants} className="text-5xl font-display font-bold mb-8 leading-tight">
                Solving problems through <br />
                <span className="text-zinc-500">design & code.</span>
              </motion.h3>
              <motion.p variants={itemVariants} className="text-zinc-400 text-lg leading-relaxed mb-12">
                With over 5 years of experience in the digital space, I've worked with startups 
                and established brands to create products that are not only visually stunning 
                but also highly functional and accessible.
              </motion.p>
              
              <motion.div variants={containerVariants} className="grid sm:grid-cols-3 gap-8 text-left">
                {SKILLS.map((skill) => (
                  <motion.div variants={itemVariants} key={skill.name} className="group">
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-zinc-800">
                      <img 
                        src={skill.image} 
                        alt={skill.name}
                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="flex items-center gap-2 text-white font-bold mb-4">
                      {skill.icon}
                      {skill.name}
                    </div>
                    <ul className="space-y-2">
                      {skill.items.map(item => (
                        <li key={item} className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-emerald-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-black text-sm font-bold tracking-[0.2em] uppercase mb-8">Get in touch</motion.h2>
            <motion.h3 variants={itemVariants} className="text-5xl md:text-7xl font-display font-bold text-black mb-12 tracking-tighter">
              Let's build something <br /> amazing together.
            </motion.h3>
            <motion.a 
              variants={itemVariants}
              whileHover={{ x: 20 }}
              href="mailto:hello@example.com" 
              className="inline-flex items-center gap-4 text-2xl md:text-4xl font-display font-bold text-black group"
            >
              hello@example.com
              <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
            </motion.a>
          </motion.div>
        </div>
        {/* Animated background shape */}
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/5 rounded-full blur-3xl"
        />
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div variants={itemVariants} className="text-zinc-500 text-sm">
            © 2026 Personal Portfolio. All rights reserved.
          </motion.div>
          <motion.div variants={itemVariants} className="flex gap-8 text-sm font-medium text-zinc-500">
            {['Twitter', 'Instagram', 'Dribbble'].map(social => (
              <a key={social} href="#" className="hover:text-white transition-colors">{social}</a>
            ))}
          </motion.div>
        </div>
      </footer>
    </motion.div>
  );
}
