import { motion } from 'motion/react';
import { Briefcase, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-4">Experience</h2>
          <h3 className="text-3xl font-bold text-white mb-12">Professional Journey</h3>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pb-8"
          >
            <div className="absolute -left-[41px] md:-left-[49px] top-1 p-2 bg-blue-600 rounded-full">
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            
            <div className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-2xl hover:bg-white/[0.04] transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-xl font-bold text-white">Senior Research Analyst</h4>
                  <p className="text-blue-400 font-medium mt-1">XDBS Worldwide</p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm w-fit">
                  <Award className="w-4 h-4 text-yellow-500" />
                  Star of the Quarter
                </div>
              </div>
              
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <p>Analyzed AI, Cloud, SaaS, and DevOps markets to derive actionable business strategies.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <p>Delivered data-driven insights that directly influenced high-level business strategy and market positioning.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <p>Identified and mapped key stakeholders utilizing advanced tools like LinkedIn Sales Navigator and ZoomInfo.</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
