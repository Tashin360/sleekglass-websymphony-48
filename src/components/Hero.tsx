
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-neon-green opacity-10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-block">
              <motion.span
                className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Award-Winning Web Development Agency
              </motion.span>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              We Build <span className="text-gradient">Future-Ready</span> Websites That <span className="text-gradient">Deliver Results</span>.
            </motion.h1>
            
            <motion.p
              className="text-lg text-gray-300 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Developito builds modern, high-converting websites with expert strategy, UI/UX, SEO, and seamless development. Get a top-ranked site today!
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link 
                to="/contact"
                className="px-8 py-3 rounded-md bg-neon-blue hover:bg-opacity-80 transition-colors text-white font-medium flex items-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/portfolio"
                className="px-8 py-3 rounded-md border border-white/20 hover:border-neon-blue/50 transition-colors text-white font-medium"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg glass p-2">
              <img 
                src="/lovable-uploads/335266f6-9322-4f1b-96e4-fb1e76361808.png" 
                alt="Developito website project showcase" 
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>

            {/* Floating badges */}
            <motion.div 
              className="absolute -top-5 -right-5 glass px-4 py-2 rounded-lg text-white"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-green"></span>
                SEO Optimized
              </span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-5 -left-5 glass px-4 py-2 rounded-lg text-white"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-blue"></span>
                High Performance
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
