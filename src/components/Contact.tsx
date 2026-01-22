import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question, want to collaborate,
            or just want to say hi, I'll try my best to get back to you!
          </p>

          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-mono rounded-lg hover:bg-primary/10 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>

          <div className="flex justify-center gap-8 mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="tel:+1234567890"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
