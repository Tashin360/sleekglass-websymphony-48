
import { motion } from 'framer-motion';
import { Code, Search, Link, Image, Settings } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-10 h-10 text-neon-blue" />,
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies for optimal performance and scalability.'
  },
  {
    icon: <Search className="w-10 h-10 text-neon-green" />,
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies to rank your website at the top of search engine results.'
  },
  {
    icon: <Image className="w-10 h-10 text-neon-yellow" />,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed to maximize user engagement and conversions.'
  },
  {
    icon: <Link className="w-10 h-10 text-neon-blue" />,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing solutions to boost your online presence and ROI.'
  },
  {
    icon: <Settings className="w-10 h-10 text-neon-green" />,
    title: 'Web Maintenance',
    description: 'Ongoing support and maintenance to keep your website running smoothly and securely.'
  },
  {
    icon: <Code className="w-10 h-10 text-neon-yellow" />,
    title: 'E-commerce Solutions',
    description: 'Custom e-commerce platforms with seamless checkout processes and robust security.'
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
