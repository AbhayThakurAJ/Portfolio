import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0d0d0d] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-4">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Driving decisions through data and intelligent systems.
            </h3>
            
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                Currently pursuing MCA, Abhayjeet Singh is building a strong foundation in artificial intelligence and data analytics. His technical skills in Python, SQL, and Power BI enable him to extract insights from complex datasets and prepare for a career in AI engineering.
              </p>
              <p>
                He combines data analysis with AI technologies to build scalable, intelligent systems that support better decision-making. His focus is on real-world impact — not just models, but working solutions that address actual business and environmental challenges.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-4xl font-bold text-white mb-2">4+</div>
              <div className="text-sm text-gray-400 font-medium">Real-world AI & Data Projects</div>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-4xl font-bold text-white mb-2">Sr.</div>
              <div className="text-sm text-gray-400 font-medium">Research Analyst Experience</div>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 md:col-span-2">
               <h4 className="text-white font-medium mb-2">Focus Areas</h4>
               <ul className="text-gray-400 text-sm space-y-2">
                 <li>• Market Intelligence & Strategy</li>
                 <li>• Machine Learning Applications</li>
                 <li>• Data Pipeline Architecture</li>
               </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
