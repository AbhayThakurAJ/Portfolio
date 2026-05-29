import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-sm font-bold">AS</div>
          Abhayjeet Singh
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 text-sm font-medium text-gray-400">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <a href="https://github.com/AbhayThakurAJ" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ai-engineer-abhayjeetsingh/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-[#0d0d0d] border-b border-white/5 p-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
            <a href="https://github.com/AbhayThakurAJ" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ai-engineer-abhayjeetsingh/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
