
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimationControls } from 'framer-motion';
import { Award, Users, Briefcase, Clock } from 'lucide-react';

const stats = [
  { 
    value: 80, 
    label: 'Projects Completed', 
    symbol: '+',
    icon: <Briefcase className="w-10 h-10" />,
    color: 'from-neon-blue to-blue-500'
  },
  { 
    value: 35, 
    label: 'Happy Clients', 
    symbol: '+',
    icon: <Users className="w-10 h-10" />,
    color: 'from-neon-green to-green-500'
  },
  { 
    value: 12, 
    label: 'Team Members', 
    symbol: '+',
    icon: <Award className="w-10 h-10" />,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    value: 5, 
    label: 'Years Experience', 
    symbol: '+',
    icon: <Clock className="w-10 h-10" />,
    color: 'from-amber-500 to-orange-500'
  }
];

const Counter = ({ value, duration, symbol }: { value: number, duration: number, symbol: string }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = value / (duration * 60);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16.67); // ~60fps
      
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={nodeRef} className="font-mono text-5xl md:text-6xl font-bold tabular-nums">
      {count}{symbol}
    </span>
  );
};

const ProjectsCounter = () => {
  return (
    <section className="py-20 relative">
      {/* Blurred background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-green opacity-10 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Our <span className="text-gradient">Journey</span> in Numbers
        </motion.h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Hexagon background */}
              <div className="absolute inset-0 -z-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" className={`stop-${stat.color.split(' ')[0]}`} />
                      <stop offset="100%" className={`stop-${stat.color.split(' ')[1]}`} />
                    </linearGradient>
                  </defs>
                  <polygon 
                    points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25" 
                    fill="rgba(255,255,255,0.03)"
                    stroke={`url(#gradient-${index})`}
                    strokeWidth="1"
                    className="filter drop-shadow-lg"
                  />
                </svg>
              </div>
              
              {/* Card content */}
              <div className="glass h-full p-8 rounded-xl flex flex-col items-center justify-center text-center relative z-10 overflow-hidden hover:border-opacity-50 transition-all duration-300">
                {/* Animated gradient border effect */}
                <motion.div 
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${stat.color} opacity-20`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                />
                
                {/* Icon with gradient */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5, type: "spring" }}
                  className={`mb-4 p-3 rounded-full bg-gradient-to-br ${stat.color} text-white`}
                >
                  {stat.icon}
                </motion.div>
                
                {/* Counter */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="mb-2"
                >
                  <Counter value={stat.value} duration={2} symbol={stat.symbol} />
                </motion.div>
                
                {/* Label */}
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="text-gray-300 text-lg"
                >
                  {stat.label}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCounter;
