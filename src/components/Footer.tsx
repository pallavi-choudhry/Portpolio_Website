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
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-hover rounded-lg text-muted-foreground hover:text-primary"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-hover rounded-lg text-muted-foreground hover:text-primary"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="mailto:your.email@example.com"
              className="p-2 glass-hover rounded-lg text-muted-foreground hover:text-primary"
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
