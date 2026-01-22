import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 90, category: "Frontend" },
  { name: "CSS3", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "React.js", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", level: 75, category: "Frontend" },
  { name: "Git", level: 75, category: "Tools" },
  { name: "Node.js", level: 60, category: "Backend" },
  { name: "MongoDB", level: 55, category: "Backend" },
  { name: "Express.js", level: 55, category: "Backend" },
];

const SkillBar = ({ skill, index }: { skill: typeof skills[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="space-y-2"
  >
    <div className="flex justify-between items-center">
      <span className="font-mono text-sm text-foreground">{skill.name}</span>
      <span className="text-xs text-muted-foreground">{skill.level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
        className="h-full bg-gradient-primary rounded-full"
      />
    </div>
  </motion.div>
);

const Skills = () => {
  const frontend = skills.filter((s) => s.category === "Frontend");
  const backend = skills.filter((s) => s.category === "Backend");
  const tools = skills.filter((s) => s.category === "Tools");

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
            <span className="font-mono text-primary text-xl">02.</span>
            Skills & Technologies
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-lg font-semibold text-primary font-mono">Frontend</h3>
              <div className="space-y-6">
                {frontend.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-primary font-mono mb-6">Backend</h3>
                <div className="space-y-6">
                  {backend.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index + frontend.length} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary font-mono mb-6">Tools</h3>
                <div className="space-y-6">
                  {tools.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index + frontend.length + backend.length} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
