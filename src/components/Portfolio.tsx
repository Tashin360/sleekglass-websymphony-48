
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'MechaVerse',
    type: 'E-commerce Platform',
    description: 'Premium products at reasonable prices',
    image: '/lovable-uploads/ab76f57d-4156-4074-b185-cdc3429b2268.png',
    url: 'https://mechaversebd.com'
  },
  {
    id: 2,
    title: 'The Grooveland',
    type: 'Music Industry Platform',
    description: 'Everything you need to start a music career',
    image: '/lovable-uploads/af33b139-b935-43f4-a0e3-ab3204c34650.png',
    url: 'https://thegrooveland.com'
  },
  {
    id: 3,
    title: 'MintHost',
    type: 'Web Hosting Solution',
    description: 'Fresh and reliable web hosting for businesses',
    image: '/lovable-uploads/cd13ff80-99bb-4d0b-b8d4-0c6d1891ddcf.png',
    url: 'https://minthost.com.bd'
  },
  {
    id: 4,
    title: 'Dezzify',
    type: 'Digital Design Studio',
    description: 'Creative digital solutions for modern brands',
    image: '/lovable-uploads/cab8c3e4-f77c-4146-81f4-ad50239ab5d8.png',
    url: 'https://dezzify.com'
  },
  {
    id: 5,
    title: 'ZyroNodes',
    type: 'Game Hosting Service',
    description: 'Reliable game hosting at affordable prices',
    image: '/lovable-uploads/79b13a6c-5109-46ac-b509-18b5e509e3f6.png',
    url: 'https://zyronodes.com'
  },
  {
    id: 6,
    title: 'TikKit',
    type: 'Fashion E-commerce',
    description: 'Photographer designed apparel and accessories',
    image: '/lovable-uploads/8c4b5a9b-2a50-419b-a5d2-d9e88ff8be48.png',
    url: 'https://weartikkit.com'
  }
];

const Portfolio = () => {
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
    <section className="py-24 relative" id="portfolio">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Featured</span> Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of successful websites that drive results. From e-commerce to corporate platforms, we build sites that convert.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="overflow-hidden rounded-lg glass">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <span className="text-xs font-medium text-neon-blue uppercase tracking-wider">{project.type}</span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-neon-blue transition-colors">{project.title}</h3>
                  <p className="mt-2 text-gray-300">{project.description}</p>
                  
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm text-neon-blue hover:underline"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link 
            to="/portfolio" 
            className="px-8 py-3 rounded-md glass hover:neon-border transition-all duration-300 text-white font-medium inline-block"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
