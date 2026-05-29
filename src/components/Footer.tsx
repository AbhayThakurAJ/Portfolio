import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-[10px] font-bold text-white">AS</div>
          <span className="text-gray-400 text-sm font-medium">© {new Date().getFullYear()} Abhayjeet Singh. All rights reserved.</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/AbhayThakurAJ" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/ai-engineer-abhayjeetsingh/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:itzabhaythakur@gmail.com" className="text-gray-500 hover:text-white transition-colors">
             <span className="sr-only">Email</span>
             <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
