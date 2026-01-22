import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, ArrowUpRight } from "lucide-react";

const featuredProject = {
  title: "Gayatri Parivar Website",
  description:
    "A comprehensive organizational website featuring pathology services integration, Serve Now platform, and DMS backend system. Implemented complete UI redesign with responsive layouts, ensuring optimal user experience across all devices.",
  tech: ["React.js", "Node.js", "MongoDB", "Express.js", "CSS3"],
  features: ["Responsive Design", "Backend Integration", "DMS System", "Pathology Portal"],
};

const otherProjects = [
  {
    title: "Portfolio Website",
    description: "Personal developer portfolio showcasing skills and projects with modern animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "E-commerce Dashboard",
    description: "Admin dashboard for managing products, orders, and customer data with real-time updates.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    description: "Full-stack task management application with user authentication and team collaboration.",
    tech: ["React", "Express.js", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-4">
            <span className="font-mono text-primary text-xl">03.</span>
            <span className="text-gradient">Some Things I've Built</span>
            <span className="h-px bg-gradient-to-r from-border to-transparent flex-1 max-w-xs" />
          </h2>
          <p className="text-muted-foreground mb-16 max-w-2xl">
            Here are some of my recent projects that showcase my skills and experience.
          </p>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-24"
          >
            <div className="grid md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-7 relative group">
                <div className="relative rounded-2xl overflow-hidden glass border-glow aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 group-hover:opacity-0 transition-opacity duration-500 z-10" />
                  <div className="w-full h-full bg-card flex items-center justify-center">
                    <motion.span 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-7xl"
                    >
                      🏛️
                    </motion.span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="flex gap-4">
                      <a href="#" className="p-3 bg-background/20 rounded-full hover:bg-background/40 transition-colors">
                        <Github className="w-6 h-6 text-primary-foreground" />
                      </a>
                      <a href="#" className="p-3 bg-background/20 rounded-full hover:bg-background/40 transition-colors">
                        <ExternalLink className="w-6 h-6 text-primary-foreground" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 md:text-right md:-ml-16 relative z-10">
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block font-mono text-primary text-sm mb-2 px-3 py-1 glass rounded-full"
                >
                  ⭐ Featured Project
                </motion.span>
                <h3 className="text-2xl font-bold text-foreground mb-4">{featuredProject.title}</h3>
                <div className="glass p-6 rounded-2xl shadow-card mb-4 border-glow">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>
                <div className="flex flex-wrap justify-end gap-2 mb-4">
                  {featuredProject.features.map((feature) => (
                    <span key={feature} className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-end gap-3 text-xs font-mono text-muted-foreground">
                  {featuredProject.tech.map((t) => (
                    <span key={t} className="hover:text-primary transition-colors">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Projects */}
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-2">Other Noteworthy Projects</h3>
            <p className="text-muted-foreground text-sm">A collection of projects I've worked on</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group glass p-6 rounded-2xl border-glow hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Folder className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {project.tech.map((t) => (
                    <span key={t} className="text-primary/80 bg-primary/5 px-2 py-1 rounded-md">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
