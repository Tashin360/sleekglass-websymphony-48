
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projects = [
  {
    id: 1,
    title: 'MechaVerse',
    type: 'E-commerce Platform',
    description: 'Premium products at reasonable prices. Built a responsive e-commerce platform with product filtering, user accounts, and secure checkout.',
    image: '/lovable-uploads/ab76f57d-4156-4074-b185-cdc3429b2268.png',
    url: 'https://mechaversebd.com',
    category: 'e-commerce'
  },
  {
    id: 2,
    title: 'The Grooveland',
    type: 'Music Industry Platform',
    description: 'Everything you need to start a music career. Developed a platform for musicians with course management, audio streaming, and membership features.',
    image: '/lovable-uploads/af33b139-b935-43f4-a0e3-ab3204c34650.png',
    url: 'https://thegrooveland.com',
    category: 'education'
  },
  {
    id: 3,
    title: 'MintHost',
    type: 'Web Hosting Solution',
    description: 'Fresh and reliable web hosting for businesses. Created a hosting platform with service comparison, account management, and automated setup.',
    image: '/lovable-uploads/cd13ff80-99bb-4d0b-b8d4-0c6d1891ddcf.png',
    url: 'https://minthost.com.bd',
    category: 'service'
  },
  {
    id: 4,
    title: 'Dezzify',
    type: 'Digital Design Studio',
    description: 'Creative digital solutions for modern brands. Built a portfolio site with project showcases and service information for a design agency.',
    image: '/lovable-uploads/cab8c3e4-f77c-4146-81f4-ad50239ab5d8.png',
    url: 'https://dezzify.com',
    category: 'portfolio'
  },
  {
    id: 5,
    title: 'ZyroNodes',
    type: 'Game Hosting Service',
    description: 'Reliable game hosting at affordable prices. Developed a platform for game server hosting with real-time status monitoring and instant setup.',
    image: '/lovable-uploads/79b13a6c-5109-46ac-b509-18b5e509e3f6.png',
    url: 'https://zyronodes.com',
    category: 'service'
  },
  {
    id: 6,
    title: 'TikKit',
    type: 'Fashion E-commerce',
    description: 'Photographer designed apparel and accessories. Built an e-commerce store with product customization and integrated payment processing.',
    image: '/lovable-uploads/8c4b5a9b-2a50-419b-a5d2-d9e88ff8be48.png',
    url: 'https://weartikkit.com',
    category: 'e-commerce'
  },
  {
    id: 7,
    title: 'BRHS',
    type: 'Educational Institution',
    description: 'Comprehensive school website with course information, student portal, and event management system for a residential high school.',
    image: '/lovable-uploads/f7ed0c06-7507-42b2-83bf-0dea5373b923.png',
    url: 'https://brhs.info',
    category: 'education'
  },
  {
    id: 8,
    title: 'SocialAppsHQ',
    type: 'Marketing Platform',
    description: 'All-in-one marketing platform with social media management, analytics, and campaign tracking for digital marketers.',
    image: '/lovable-uploads/9a3135c7-4d8b-4df4-a47a-62d8236be431.png',
    url: 'https://socialappshq.com',
    category: 'marketing'
  },
  {
    id: 9,
    title: 'Visual Marketing',
    type: 'Agency Website',
    description: 'Digital marketing agency website featuring service descriptions, case studies, and client testimonials with lead generation forms.',
    image: '/lovable-uploads/1ad72a0b-eefd-42f3-8745-cc12899f84af.png',
    url: 'https://visualmarketing.com.au',
    category: 'marketing'
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'e-commerce', label: 'E-commerce' },
    { value: 'service', label: 'Service' },
    { value: 'portfolio', label: 'Portfolio' },
    { value: 'education', label: 'Education' },
    { value: 'marketing', label: 'Marketing' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Web Development Projects | Developito</title>
        <meta name="description" content="Explore our past projects and case studies showcasing stunning, SEO-optimized, high-performing websites." />
        <meta name="keywords" content="web development projects, portfolio, case studies, website examples" />
        <link rel="canonical" href="https://developito.com/portfolio" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Our Web Development Projects | Developito" />
        <meta property="og:description" content="Explore our past projects and case studies showcasing stunning, SEO-optimized, high-performing websites." />
        <meta property="og:url" content="https://developito.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://developito.com/og-image-portfolio.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Web Development Projects | Developito" />
        <meta name="twitter:description" content="Explore our past projects and case studies showcasing stunning, SEO-optimized, high-performing websites." />
        <meta name="twitter:image" content="https://developito.com/twitter-image-portfolio.jpg" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20 relative">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-40 left-10 w-96 h-96 bg-neon-blue opacity-10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-40 right-10 w-96 h-96 bg-neon-green opacity-10 rounded-full filter blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Our <span className="text-gradient">Portfolio</span>
                </h1>
                <p className="text-xl text-gray-300">
                  Explore our showcase of successful projects that demonstrate our expertise in creating high-performing, beautiful websites.
                </p>
              </motion.div>
            </div>
          </section>
          
          {/* Portfolio Filters */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                {filters.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setFilter(item.value)}
                    className={`px-6 py-2 rounded-full transition-all ${
                      filter === item.value 
                        ? 'bg-neon-blue text-white' 
                        : 'glass hover:neon-border text-gray-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
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
            </div>
          </section>
          
          {/* Case Studies Section */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Featured <span className="text-gradient">Case Studies</span>
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Dive deeper into some of our most successful projects and learn about the strategies and technologies we used to achieve exceptional results.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass p-8 rounded-lg max-w-4xl mx-auto"
              >
                <div className="grid md:grid-cols-5 gap-8">
                  <div className="md:col-span-2">
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="/lovable-uploads/ab76f57d-4156-4074-b185-cdc3429b2268.png" 
                        alt="MechaVerse Case Study" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-bold mb-3">MechaVerse Conversion Rate Optimization</h3>
                    <p className="text-sm text-neon-blue mb-4">E-commerce Platform Redesign</p>
                    
                    <p className="text-gray-300 mb-4">
                      MechaVerse was struggling with a high cart abandonment rate and low mobile conversions. Our redesign focused on improving the user journey and optimizing the checkout process.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-400">Conversion Increase</p>
                        <p className="text-2xl font-bold text-neon-blue">64%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Mobile Revenue</p>
                        <p className="text-2xl font-bold text-neon-blue">+118%</p>
                      </div>
                    </div>
                    
                    <a 
                      href="#" 
                      className="text-sm text-neon-blue hover:underline"
                    >
                      Read Full Case Study →
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* Stats Section */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass p-8 rounded-lg text-center"
                >
                  <div className="text-4xl font-bold text-neon-blue mb-2">25+</div>
                  <p className="text-gray-300">Websites Ranking on First Page</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="glass p-8 rounded-lg text-center"
                >
                  <div className="text-4xl font-bold text-neon-green mb-2">87%</div>
                  <p className="text-gray-300">Average Conversion Rate Increase</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass p-8 rounded-lg text-center"
                >
                  <div className="text-4xl font-bold text-neon-blue mb-2">2.3s</div>
                  <p className="text-gray-300">Average Page Load Time</p>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
