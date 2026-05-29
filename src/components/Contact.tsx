import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-4">Get in touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's build intelligent systems together.</h3>
          <p className="text-gray-400 text-lg mb-12">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:itzabhaythakur@gmail.com"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium flex items-center justify-center gap-3 transition-colors"
            >
              <Mail className="w-5 h-5" />
              itzabhaythakur@gmail.com
            </a>
            
            <a 
              href="https://www.linkedin.com/in/ai-engineer-abhayjeetsingh/"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium flex items-center justify-center gap-3 transition-colors group"
            >
              Connect on LinkedIn
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
