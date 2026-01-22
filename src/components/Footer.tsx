import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-8 px-6 text-center"
    >
      <p className="font-mono text-sm text-muted-foreground">
        Designed & Built with{" "}
        <span className="text-primary">❤</span>
      </p>
      <p className="font-mono text-xs text-muted-foreground mt-2">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
