import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-8">
            <span className="font-mono text-primary text-xl">01.</span>
            About Me
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm a frontend developer with practical experience in building modern web applications.
                My journey in web development started with curiosity about how websites work, and it has
                evolved into a passion for creating beautiful, functional user interfaces.
              </p>
              <p>
                I specialize in <span className="text-primary">HTML5</span>, <span className="text-primary">CSS3</span>,{" "}
                <span className="text-primary">JavaScript</span>, and <span className="text-primary">React.js</span>.
                I also have experience with backend technologies including Node.js, MongoDB, and Express.js,
                allowing me to understand and contribute to full-stack development.
              </p>
              <p>
                Currently, I'm working on the <span className="text-primary">Gayatri Parivar website</span>, where
                I'm handling everything from UI/UX improvements to making the site fully responsive. I've also
                integrated features like pathology services, Serve Now, and DMS backend systems.
              </p>
            </div>

            <div className="relative group">
              <div className="relative z-10">
                <div className="w-full aspect-square rounded-lg bg-secondary overflow-hidden border-2 border-primary/50">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform -z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
