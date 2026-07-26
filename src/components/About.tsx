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
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 relative bg-[#0a0a0f]">
      {/* Background decoration - matching hero style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-white mb-4">
            {/* <span className="font-mono text-purple-400 text-xl">01.</span> */}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              About Me
            </span>
            <span className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <div className="md:col-span-2 space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-300 leading-relaxed text-lg"
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
                className="text-gray-300 leading-relaxed"
              >
                I specialize in <span className="text-purple-400 font-semibold">HTML5</span>, <span className="text-purple-400 font-semibold">CSS3</span>,{" "}
                <span className="text-purple-400 font-semibold">JavaScript</span>, and <span className="text-purple-400 font-semibold">React.js</span>.
                I also have experience with backend technologies including Node.js, MongoDB, and Express.js,
                allowing me to understand and contribute to full-stack development.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 leading-relaxed"
              >
                Currently, I'm working on the <span className="text-purple-400 font-semibold">Gayatri Parivar website</span>, where
                I'm handling everything from UI/UX improvements to making the site fully responsive. I've also
                integrated features like pathology services, Serve Now, and DMS backend systems.
              </motion.p>

              {/* Highlight cards - updated with dark theme */}
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
                    whileHover={{ scale: 1.02, borderColor: '#8b5cf6' }}
                    className="border border-purple-500/20 hover:border-purple-500/40 p-4 rounded-xl flex items-center gap-3 transition-all duration-300 bg-white/5 backdrop-blur-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-sm">{item.label}</p>
                      <p className="text-xs text-gray-400">{item.desc}</p>
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
                {/* <div className="w-full aspect-square rounded-2xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-900/30 via-indigo-900/30 to-purple-900/30 backdrop-blur-sm"> */}
                  {/* <div className="w-full h-full flex items-center justify-center relative"> */}
                    {/* <motion.span 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-7xl"
                    >
                      👨‍💻
                    </motion.span> */}
                    {/* Decorative elements with neon glow */}
                    {/* <div className="absolute top-4 right-4 text-2xl opacity-60 text-purple-400">⚛️</div>
                    <div className="absolute bottom-4 left-4 text-2xl opacity-60 text-indigo-400">🚀</div>
                    {/* Glow effect */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent" />  */}
                  {/* </div> */}
                {/* </div> */}
              </div>
              {/* Neon glow shadow */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-2xl translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform -z-10 blur-xl" /> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;