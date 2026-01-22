import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

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
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
            <span className="font-mono text-primary text-xl">03.</span>
            Some Things I've Built
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-24"
          >
            <div className="grid md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-7 relative">
                <div className="relative rounded-lg overflow-hidden bg-secondary aspect-video group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 group-hover:opacity-0 transition-opacity z-10" />
                  <div className="w-full h-full bg-card flex items-center justify-center">
                    <span className="text-6xl">🏛️</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 md:text-right md:-ml-16 relative z-10">
                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">{featuredProject.title}</h3>
                <div className="bg-card p-6 rounded-lg shadow-card mb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>
                <div className="flex flex-wrap justify-end gap-3 mb-4">
                  {featuredProject.features.map((feature) => (
                    <span key={feature} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-end gap-3 text-xs font-mono text-muted-foreground">
                  {featuredProject.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Projects */}
          <h3 className="text-center text-xl font-semibold text-foreground mb-8">Other Noteworthy Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-card hover:-translate-y-2 transition-transform group"
              >
                <div className="flex justify-between items-start mb-6">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3 text-xs font-mono text-muted-foreground">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
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
