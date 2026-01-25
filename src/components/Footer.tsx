import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 px-6 border-t border-border/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-mono text-xl font-bold text-primary">
            {"<Dev />"}
          </a>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:your.email@example.com"
              className="p-3 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
          <p className="font-mono text-sm text-muted-foreground flex items-center gap-2">
              Designed & Built with{" "}
              <Heart className="w-4 h-4 text-destructive fill-destructive animate-pulse" />
            </p>
            <p className="font-mono text-xs text-muted-foreground/60 mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
