import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const proofPoints = [
  "4+ real-world implementations delivered",
  "Extensive background in B2B market intelligence",
  "Hands-on experience processing real operational datasets",
  "Proven track record bridging AI concepts to scalable engineering"
];

export default function Proof() {
  return (
    <section className="py-16 bg-blue-600/5 border-y border-blue-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Why Work With Me</h3>
            <p className="text-gray-400">Deep domain expertise combining raw technical skill with strategic business acumen.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 grid sm:grid-cols-2 gap-6"
          >
            {proofPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                <p className="text-gray-300 text-sm font-medium">{point}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
