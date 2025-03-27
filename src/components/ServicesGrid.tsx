
import { motion } from 'framer-motion';
import { 
  PenTool, Search, BarChart3, Layers, 
  Code, Settings, FileText, Database, Shield 
} from 'lucide-react';

const services = [
  {
    icon: <BarChart3 className="w-10 h-10 text-neon-blue" />,
    title: 'Website Strategy',
    description: 'Connecting with audiences & maximizing engagement through targeted strategy and user research.'
  },
  {
    icon: <PenTool className="w-10 h-10 text-neon-green" />,
    title: 'Website Design & Re-design',
    description: 'Enhancing aesthetics & conversions with modern, user-centric design principles.'
  },
  {
    icon: <Layers className="w-10 h-10 text-neon-yellow" />,
    title: 'Website Information Architecture',
    description: 'Organizing content intuitively for seamless user journeys and improved conversions.'
  },
  {
    icon: <Code className="w-10 h-10 text-neon-blue" />,
    title: 'Webflow Development',
    description: 'Dynamic, responsive sites with animations that elevate your brand experience.'
  },
  {
    icon: <FileText className="w-10 h-10 text-neon-green" />,
    title: 'WordPress Development',
    description: 'UX-focused WordPress solutions that balance performance and flexibility.'
  },
  {
    icon: <Settings className="w-10 h-10 text-neon-yellow" />,
    title: 'Framer Development',
    description: 'Interactive prototypes & websites with advanced animation capabilities.'
  },
  {
    icon: <Search className="w-10 h-10 text-neon-blue" />,
    title: 'Website SEO Optimization',
    description: 'Boosting visibility & organic traffic with data-driven SEO strategies.'
  },
  {
    icon: <Database className="w-10 h-10 text-neon-green" />,
    title: 'CMS Development',
    description: 'Custom CMS for easy content management that empowers your team.'
  },
  {
    icon: <Shield className="w-10 h-10 text-neon-yellow" />,
    title: 'Website Maintenance & Support',
    description: 'Ensuring security & smooth performance with ongoing expert support.'
  }
];

const ServicesGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Expert</span> Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We deliver comprehensive web solutions tailored to your business needs, combining technical expertise with creative innovation.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass p-8 rounded-lg group hover:neon-border transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-neon-blue transition-colors">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
