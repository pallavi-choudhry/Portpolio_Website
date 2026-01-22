import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about", number: "01" },
  { name: "Skills", href: "#skills", number: "02" },
  { name: "Projects", href: "#projects", number: "03" },
  { name: "Contact", href: "#contact", number: "04" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-2xl font-bold text-primary">
          {"<Dev />"}
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a
                href={link.href}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary">{link.number}.</span> {link.name}
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              className="font-mono text-sm px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-colors"
            >
              Resume
            </a>
          </motion.li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-mono text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="text-primary">{link.number}.</span> {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="font-mono text-sm px-6 py-3 border border-primary text-primary rounded hover:bg-primary/10 transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
