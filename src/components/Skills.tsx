import { motion } from 'motion/react';
import { Database, Binary, Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: "AI & Data",
    icon: <Binary className="w-6 h-6 text-blue-400" />,
    skills: ["Python", "NumPy", "PyTorch", "Machine Learning", "Data Modeling"]
  },
  {
    title: "Analytics & Tools",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    skills: ["Power BI", "SQL (MySQL)", "Excel", "Data Visualization", "Market Intelligence"]
  },
  {
    title: "Development",
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    skills: ["TypeScript", "JavaScript", "HTML/CSS", "React", "Next.js"]
  }
];

export default function Skills() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-4">Core Competencies</h2>
          <h3 className="text-3xl font-bold text-white">Technical Arsenal</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/5 rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-6">{category.title}</h4>
              <ul className="space-y-4">
                {category.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
