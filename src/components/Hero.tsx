import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
            <Terminal className="w-4 h-4" />
            <span>Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            AI Engineer & <br /> Data Analyst<span className="text-blue-500">.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-4">
            I build intelligent systems that transform data into actionable insights and scalable AI solutions.
          </p>
          
          <p className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed">
            From market intelligence to machine learning applications, I combine data, AI, and engineering to solve real-world problems.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg border border-white/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="aspect-square rounded-2xl bg-gradient-to-tr from-gray-900 to-gray-800 border border-white/10 flex items-center justify-center overflow-hidden">
             {/* Subdued code / data visualization aesthetic block */}
             <div className="relative w-full h-full p-8 flex flex-col gap-4 opacity-50">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                {[...Array(6)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.random() * 60 + 20}%` }}
                    transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                    className="h-4 bg-blue-500/20 rounded"
                  />
                ))}
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
