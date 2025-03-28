
import { motion } from 'framer-motion';
import { Check, Server, Shield, Zap, BarChart3, LineChart } from 'lucide-react';

const benefits = [
  {
    icon: <Server className="w-10 h-10 text-neon-blue" />,
    title: 'High-Performance Infrastructure',
    description: 'Our optimized server configurations ensure your website loads in under 2 seconds, improving user experience and SEO rankings.'
  },
  {
    icon: <Shield className="w-10 h-10 text-neon-green" />,
    title: 'Enhanced Security',
    description: 'Protect your business with enterprise-grade security protocols, regular updates, and 24/7 monitoring against threats.'
  },
  {
    icon: <Zap className="w-10 h-10 text-neon-yellow" />,
    title: 'Scalable Solutions',
    description: 'Our infrastructure grows with your business, effortlessly handling traffic spikes without performance degradation.'
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-neon-blue" />,
    title: 'Business Growth',
    description: 'Convert more visitors into customers with reliable, fast-loading websites that instill confidence in your brand.'
  },
  {
    icon: <LineChart className="w-10 h-10 text-neon-green" />,
    title: 'Improved Analytics',
    description: 'Gain actionable insights with comprehensive analytics, helping you make data-driven decisions for your business.'
  },
  {
    icon: <Check className="w-10 h-10 text-neon-yellow" />,
    title: 'Peace of Mind',
    description: 'Focus on running your business while we handle the technical aspects with proactive maintenance and expert support.'
  }
];

const Benefits = () => {
  return (
    <section className="py-24 relative" id="benefits">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-96 h-96 bg-neon-green opacity-5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-neon-blue opacity-5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why You Need Our <span className="text-gradient">Server Solutions</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our premium web infrastructure delivers tangible results that positively impact your business metrics and user experience.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass p-8 rounded-lg group hover:neon-border transition-all duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-neon-blue transition-colors">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 glass-dark p-8 rounded-lg max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-4">The <span className="text-gradient">Developito Difference</span></h3>
          <p className="text-gray-300 mb-6">
            Unlike generic hosting providers, we tailor our server solutions to your specific business needs, 
            optimizing for your industry, audience, and growth goals. Our clients typically see a 40% improvement 
            in page load times and a 25% increase in conversion rates after switching to our infrastructure.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 rounded-md bg-neon-blue hover:bg-opacity-80 transition-colors text-white font-medium"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
