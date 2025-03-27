
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const About = () => {
  const reasons = [
    "Expert team with 5+ years of industry experience",
    "SEO-first approach for maximum online visibility",
    "Custom-tailored solutions for your unique business needs",
    "Transparent communication throughout the project",
    "Ongoing support and maintenance after launch",
    "Technical expertise across multiple platforms",
    "Focus on conversion-optimized design",
    "Proven track record of delivering results"
  ];

  return (
    <>
      <Helmet>
        <title>About Developito | Leading Web Development Experts</title>
        <meta name="description" content="Learn about Developito, our mission, and how we craft stunning websites that rank high and convert customers." />
        <meta name="keywords" content="about Developito, web development experts, website design team, SEO specialists" />
        <link rel="canonical" href="https://developito.com/about" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="About Developito | Leading Web Development Experts" />
        <meta property="og:description" content="Learn about Developito, our mission, and how we craft stunning websites that rank high and convert customers." />
        <meta property="og:url" content="https://developito.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://developito.com/og-image-about.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Developito | Leading Web Development Experts" />
        <meta name="twitter:description" content="Learn about Developito, our mission, and how we craft stunning websites that rank high and convert customers." />
        <meta name="twitter:image" content="https://developito.com/twitter-image-about.jpg" />
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
                  About <span className="text-gradient">Developito</span>
                </h1>
                <p className="text-xl text-gray-300">
                  We're a team of passionate web developers, designers, and SEO experts dedicated to building websites that stand out and deliver results.
                </p>
              </motion.div>
            </div>
          </section>
          
          {/* Our Story Section */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Our <span className="text-gradient">Story</span>
                  </h2>
                  
                  <p className="text-gray-300 mb-4">
                    Founded in 2018, Developito was born out of a simple observation: most websites weren't built with performance and search visibility as core priorities.
                  </p>
                  
                  <p className="text-gray-300 mb-4">
                    Our founder, a seasoned web developer and SEO specialist, assembled a team of like-minded experts committed to changing the status quo. We set out to create a web development agency that would prioritize both aesthetic appeal and technical excellence.
                  </p>
                  
                  <p className="text-gray-300">
                    Today, Developito has helped over 80 businesses transform their online presence with websites that not only look stunning but also rank at the top of search results and convert visitors into customers.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-video overflow-hidden rounded-lg glass"
                >
                  <img 
                    src="/lovable-uploads/f7ed0c06-7507-42b2-83bf-0dea5373b923.png" 
                    alt="Developito team at work" 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Mission & Vision Section */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass p-8 rounded-lg"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-300">
                    To empower businesses with web solutions that combine cutting-edge technology, strategic design, and search optimization to maximize their online potential and drive measurable results.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass p-8 rounded-lg"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-300">
                    To become the leading web development agency known for creating websites that rank #1 in search results while providing exceptional user experiences and driving business growth.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Why Choose Us Section */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16 max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why <span className="text-gradient">Choose Us</span>
                </h2>
                <p className="text-gray-300">
                  At Developito, we stand out from other agencies with our unique approach to web development, combining technical expertise with strategic thinking.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:glass transition-all duration-300"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-neon-blue/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-neon-blue" />
                      </div>
                    </div>
                    <p className="text-gray-200 font-medium">{reason}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Team Section */}
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
                  Meet Our <span className="text-gradient">Team</span>
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  The talented individuals behind Developito's success, bringing together expertise in web development, design, and digital marketing.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((member) => (
                  <motion.div
                    key={member}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: member * 0.1, duration: 0.5 }}
                    className="glass rounded-lg overflow-hidden group"
                  >
                    <div className="aspect-square">
                      <img 
                        src={`https://randomuser.me/api/portraits/${member % 2 === 0 ? 'women' : 'men'}/${20 + member}.jpg`}
                        alt="Team member" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">
                        {member === 1 ? 'Alex Johnson' : 
                         member === 2 ? 'Sarah Miller' : 
                         member === 3 ? 'David Chen' : 'Emily Wilson'}
                      </h3>
                      <p className="text-neon-blue text-sm mb-3">
                        {member === 1 ? 'CEO & Founder' : 
                         member === 2 ? 'Lead Designer' : 
                         member === 3 ? 'Senior Developer' : 'SEO Specialist'}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {member === 1 ? '10+ years experience in web development and digital strategy.' : 
                         member === 2 ? 'Award-winning designer with expertise in UI/UX and brand identity.' : 
                         member === 3 ? 'Full-stack developer specializing in high-performance web applications.' : 
                        'Expert in search engine optimization and content strategy.'}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default About;
