
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 80, label: 'Projects Completed', symbol: '+' },
  { value: 35, label: 'Happy Clients', symbol: '+' },
  { value: 12, label: 'Team Members', symbol: '+' },
  { value: 5, label: 'Years Experience', symbol: '+' }
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
    <section className="py-20 relative bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-2">
                <Counter value={stat.value} duration={2} symbol={stat.symbol} />
              </div>
              <p className="text-gray-300 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCounter;
