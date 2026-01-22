import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 glass rounded-full font-mono text-primary text-sm border-glow">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-primary mb-4 text-sm md:text-base"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="text-gradient text-glow">Frontend Developer.</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
        >
          I'm a passionate frontend developer specializing in building exceptional digital experiences with{" "}
          <span className="text-primary font-semibold">React</span>, modern CSS, and JavaScript. Currently focused on building 
          accessible, responsive web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all glow-primary hover:scale-105"
          >
            View My Work
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          
          <a
            href="/resume.pdf"
            target="_blank"
            className="group inline-flex items-center gap-2 px-8 py-4 glass-hover rounded-xl font-semibold text-foreground"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
          
          <div className="flex items-center gap-3 ml-2">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-hover rounded-xl text-muted-foreground hover:text-primary"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-hover rounded-xl text-muted-foreground hover:text-primary"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:your.email@example.com"
              className="p-3 glass-hover rounded-xl text-muted-foreground hover:text-primary"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-mono">Scroll Down</span>
          <ChevronDown className="w-6 h-6 animate-float" />
        </a>
      </motion.div>

      {/* Floating tech icons */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-4xl opacity-20"
        >
          ⚛️
        </motion.div>
      </div>
      <div className="absolute bottom-40 right-40 hidden lg:block">
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="text-3xl opacity-20"
        >
          🚀
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
