import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "AI Career Navigator",
    description: "An AI-based system designed to provide personalized career recommendations and insights based on user skills, goals, and market trends.",
    tech: ["TypeScript", "AI Inference", "Next.js"],
    github: "https://github.com/AbhayThakurAJ",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Drought Pattern Analysis",
    description: "End-to-end data analysis identifying environmental patterns in India. Utilized historical climate datasets to draw actionable insights.",
    tech: ["Python", "Jupyter", "Pandas", "Matplotlib"],
    github: "https://github.com/AbhayThakurAJ",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Valley of Gods Platform",
    description: "Responsive travel platform focused on modern UI/UX principles, featuring dynamic pricing toggles for INR and USD markets.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/AbhayThakurAJ",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Blackbox Breaker",
    description: "A robust Python-based logic system focused on complex problem-solving and systematic debugging workflows.",
    tech: ["Python", "Algorithms", "System Logic"],
    github: "https://github.com/AbhayThakurAJ",
    color: "from-gray-500/20 to-slate-500/20"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0d0d0d] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-4">Featured Work</h2>
          <h3 className="text-3xl font-bold text-white">Meaningful Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center p-8`}>
                <div className="w-full h-full bg-[#0a0a0a]/50 rounded-lg shadow-2xl border border-white/5 backdrop-blur-sm" />
              </div>
              
              <div className="p-8 relative">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs font-medium text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
