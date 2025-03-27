
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  "Mobile-First Responsive Design",
  "SEO Optimization for #1 Rankings",
  "Fast Loading Time (LCP < 2.5s)",
  "UI/UX Best Practices",
  "Clean & Semantic HTML",
  "Structured Schema Markup",
  "Cross-Browser Compatibility",
  "Accessibility Compliance"
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-0 w-96 h-96 bg-neon-blue opacity-5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video overflow-hidden rounded-lg glass"
          >
            <img 
              src="/lovable-uploads/1ad72a0b-eefd-42f3-8745-cc12899f84af.png" 
              alt="Web development process" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Our Websites <span className="text-gradient">Outperform</span> The Competition
            </h2>
            
            <p className="text-gray-300 mb-8">
              We build websites that not only look stunning but are engineered for performance, SEO, and conversion. Our development process ensures your site stands out in today's competitive digital landscape.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neon-blue/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-neon-blue" />
                  </div>
                  <span className="text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
