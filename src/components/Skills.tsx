import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 90, category: "Frontend", icon: "🌐" },
  { name: "CSS3", level: 85, category: "Frontend", icon: "🎨" },
  { name: "JavaScript", level: 85, category: "Frontend", icon: "⚡" },
  { name: "React.js", level: 80, category: "Frontend", icon: "⚛️" },
  { name: "Tailwind CSS", level: 75, category: "Frontend", icon: "💨" },
  { name: "Git", level: 75, category: "Tools", icon: "📦" },
  { name: "Node.js", level: 60, category: "Backend", icon: "🟢" },
  { name: "MongoDB", level: 55, category: "Backend", icon: "🍃" },
  { name: "Express.js", level: 55, category: "Backend", icon: "🚂" },
];

const SkillBar = ({ skill, index }: { skill: typeof skills[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div className="glass-hover p-4 rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <span className="text-xl">{skill.icon}</span>
          <span className="font-mono text-sm text-foreground font-medium">{skill.name}</span>
        </div>
        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-full">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
          className="h-full bg-gradient-primary rounded-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-gradient" />
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const frontend = skills.filter((s) => s.category === "Frontend");
  const backend = skills.filter((s) => s.category === "Backend");
  const tools = skills.filter((s) => s.category === "Tools");

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-4">
            <span className="font-mono text-primary text-xl">02.</span>
            <span className="text-gradient">Skills & Technologies</span>
            <span className="h-px bg-gradient-to-r from-border to-transparent flex-1 max-w-xs" />
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Technologies I've been working with recently to build modern web applications.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  F
                </div>
                <h3 className="text-lg font-semibold text-foreground">Frontend</h3>
              </div>
              <div className="space-y-3">
                {frontend.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  B
                </div>
                <h3 className="text-lg font-semibold text-foreground">Backend</h3>
              </div>
              <div className="space-y-3">
                {backend.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index + frontend.length} />
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  T
                </div>
                <h3 className="text-lg font-semibold text-foreground">Tools</h3>
              </div>
              <div className="space-y-3">
                {tools.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index + frontend.length + backend.length} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
