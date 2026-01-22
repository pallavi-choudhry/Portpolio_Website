import { motion } from "framer-motion";
import { Code2, Palette, Server, Sparkles } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frontend Dev", desc: "React & JavaScript" },
  { icon: Palette, label: "UI/UX", desc: "Modern Designs" },
  { icon: Server, label: "Backend", desc: "Node.js & MongoDB" },
  { icon: Sparkles, label: "Responsive", desc: "All Devices" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-4">
            <span className="font-mono text-primary text-xl">01.</span>
            <span className="text-gradient">About Me</span>
            <span className="h-px bg-gradient-to-r from-border to-transparent flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <div className="md:col-span-2 space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground leading-relaxed text-lg"
              >
                Hello! I'm a frontend developer with practical experience in building modern web applications.
                My journey in web development started with curiosity about how websites work, and it has
                evolved into a passion for creating beautiful, functional user interfaces.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground leading-relaxed"
              >
                I specialize in <span className="text-primary font-semibold">HTML5</span>, <span className="text-primary font-semibold">CSS3</span>,{" "}
                <span className="text-primary font-semibold">JavaScript</span>, and <span className="text-primary font-semibold">React.js</span>.
                I also have experience with backend technologies including Node.js, MongoDB, and Express.js,
                allowing me to understand and contribute to full-stack development.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground leading-relaxed"
              >
                Currently, I'm working on the <span className="text-primary font-semibold">Gayatri Parivar website</span>, where
                I'm handling everything from UI/UX improvements to making the site fully responsive. I've also
                integrated features like pathology services, Serve Now, and DMS backend systems.
              </motion.p>

              {/* Highlight cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-4 pt-6"
              >
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.02 }}
                    className="glass-hover p-4 rounded-xl flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative group"
            >
              <div className="relative z-10">
                <div className="w-full aspect-square rounded-2xl glass overflow-hidden border-glow">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                    <motion.span 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-7xl"
                    >
                      👨‍💻
                    </motion.span>
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 text-2xl opacity-50">⚛️</div>
                    <div className="absolute bottom-4 left-4 text-2xl opacity-50">🚀</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform -z-10 opacity-50" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
