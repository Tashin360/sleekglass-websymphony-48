
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, Clock, MapPin, Banknote, BookOpen } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Web Developer',
    location: 'Remote / Tech City',
    type: 'Full-time',
    salary: '$80K - $120K',
    description: 'We're looking for an experienced web developer with 5+ years of experience in React, Node.js, and modern web technologies.',
    responsibilities: [
      'Develop responsive, high-performance websites and web applications',
      'Write clean, maintainable code following best practices',
      'Collaborate with designers, product managers, and other developers',
      'Mentor junior developers and participate in code reviews',
      'Stay up-to-date with industry trends and technologies'
    ],
    requirements: [
      '5+ years of professional experience in web development',
      'Expert knowledge of React, TypeScript, and modern JavaScript',
      'Experience with Node.js, Express, and RESTful APIs',
      'Familiarity with CSS preprocessors and component-based styling',
      'Understanding of web performance optimization techniques',
      'Strong problem-solving skills and attention to detail',
      'Excellent communication and teamwork skills'
    ]
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    location: 'Tech City (Hybrid)',
    type: 'Full-time',
    salary: '$70K - $100K',
    description: 'We're seeking a creative UI/UX Designer who can transform complex problems into intuitive, accessible, and easy-to-use designs.',
    responsibilities: [
      'Create user-centered designs by understanding business requirements and user feedback',
      'Design UI elements and components that are reusable and help maintain design consistency',
      'Create wireframes, prototypes, and mockups optimized for a wide range of devices',
      'Collaborate with product managers and developers to implement designs',
      'Conduct usability testing and gather user feedback'
    ],
    requirements: [
      '3+ years of experience in UI/UX design for web applications',
      'Strong portfolio showcasing your design process and solutions',
      'Proficiency in design tools like Figma, Adobe XD, or Sketch',
      'Knowledge of HTML/CSS and design implementation',
      'Understanding of interaction design and information architecture',
      'Experience with user research and usability testing',
      'Excellent visual design skills with attention to brand integrity'
    ]
  },
  {
    id: 3,
    title: 'Digital Marketing Specialist',
    location: 'Remote / Tech City',
    type: 'Full-time',
    salary: '$60K - $90K',
    description: 'Join our marketing team to help drive growth through innovative digital marketing strategies.',
    responsibilities: [
      'Develop and implement comprehensive digital marketing strategies',
      'Manage SEO/SEM, social media, email, and content marketing campaigns',
      'Analyze campaign performance and optimize for improved results',
      'Create compelling content for various digital channels',
      'Stay up-to-date with the latest digital marketing trends'
    ],
    requirements: [
      '3+ years of experience in digital marketing',
      'Proven track record of successful marketing campaigns',
      'Experience with SEO, PPC, social media, and email marketing',
      'Proficiency with marketing analytics tools and CRM software',
      'Strong analytical skills and data-driven thinking',
      'Excellent communication and writing skills',
      'Marketing-related certification is a plus'
    ]
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(jobOpenings[0]);

  return (
    <>
      <Helmet>
        <title>Careers at Developito | Join Our Team of Digital Experts</title>
        <meta name="description" content="Join the Developito team! Explore career opportunities in web development, design, marketing, and more. We're looking for passionate people to help build the web of tomorrow." />
        <meta name="keywords" content="web development jobs, UX designer careers, tech careers, digital marketing jobs, Developito careers" />
        <link rel="canonical" href="https://developito.com/careers" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Careers at Developito | Join Our Team of Digital Experts" />
        <meta property="og:description" content="Join the Developito team! Explore career opportunities in web development, design, marketing, and more." />
        <meta property="og:url" content="https://developito.com/careers" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://developito.com/og-image-careers.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at Developito | Join Our Team of Digital Experts" />
        <meta name="twitter:description" content="Join the Developito team! Explore career opportunities in web development, design, marketing, and more." />
        <meta name="twitter:image" content="https://developito.com/twitter-image-careers.jpg" />
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
                  Join Our <span className="text-gradient">Team</span>
                </h1>
                <p className="text-xl text-gray-300">
                  We're looking for exceptional talent to help us build the web of tomorrow. Browse our open positions and find your next big opportunity.
                </p>
              </motion.div>
            </div>
          </section>
          
          {/* Company Culture Section */}
          <section className="py-16 bg-secondary/50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Our <span className="text-gradient">Culture</span>
                  </h2>
                  <p className="text-xl text-gray-300">
                    At Developito, we believe in fostering a collaborative, innovative, and inclusive work environment where everyone can thrive.
                  </p>
                </motion.div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="glass p-6 rounded-lg text-center"
                  >
                    <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-neon-blue" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                    <p className="text-gray-300">
                      We invest in our team's growth through ongoing education, conferences, and skill development.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="glass p-6 rounded-lg text-center"
                  >
                    <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Collaborative Spirit</h3>
                    <p className="text-gray-300">
                      We value teamwork and believe that the best results come from diverse perspectives and collaborative effort.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="glass p-6 rounded-lg text-center"
                  >
                    <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Innovation Focus</h3>
                    <p className="text-gray-300">
                      We encourage creative thinking and embrace new ideas and technologies to stay at the forefront of our industry.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Open Positions Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Open <span className="text-gradient">Positions</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore our current job openings and find a role that matches your skills and passion.
                </p>
              </motion.div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="lg:col-span-1"
                >
                  <div className="space-y-4">
                    {jobOpenings.map((job) => (
                      <div
                        key={job.id}
                        className={`glass p-6 rounded-lg cursor-pointer transition-all ${
                          selectedJob.id === job.id ? 'border-2 border-neon-blue' : 'hover:border-neon-blue/50 border-2 border-transparent'
                        }`}
                        onClick={() => setSelectedJob(job)}
                      >
                        <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                        <div className="flex items-center text-gray-300 mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neon-blue/20 text-neon-blue">
                            <Clock className="w-3 h-3 mr-1" />
                            {job.type}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neon-green/20 text-neon-green">
                            <Banknote className="w-3 h-3 mr-1" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="lg:col-span-2"
                >
                  <div className="glass p-8 rounded-lg h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{selectedJob.title}</h3>
                        <div className="flex flex-wrap items-center gap-4">
                          <div className="flex items-center text-gray-300">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{selectedJob.location}</span>
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{selectedJob.type}</span>
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Banknote className="w-4 h-4 mr-1" />
                            <span>{selectedJob.salary}</span>
                          </div>
                        </div>
                      </div>
                      <a
                        href={`mailto:careers@developito.com?subject=Application for ${selectedJob.title} Position`}
                        className="px-4 py-2 bg-neon-blue text-white rounded-md hover:bg-opacity-80 transition-colors"
                      >
                        Apply Now
                      </a>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-gray-300">{selectedJob.description}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-xl font-bold mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {selectedJob.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-neon-blue mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {selectedJob.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-neon-blue mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <p className="text-gray-300">
                        Interested in this position? Send your resume and cover letter to{' '}
                        <a
                          href="mailto:careers@developito.com"
                          className="text-neon-blue hover:underline"
                        >
                          careers@developito.com
                        </a>
                        {' '}or click the Apply Now button above.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Benefits Section */}
          <section className="py-16 bg-secondary/50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Work <span className="text-gradient">With Us</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We offer a range of benefits to help our team members thrive both professionally and personally.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="glass p-6 rounded-lg"
                >
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Health Benefits</h3>
                  <p className="text-gray-300">
                    Comprehensive health, dental, and vision insurance for you and your family.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass p-6 rounded-lg"
                >
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Flexible Schedule</h3>
                  <p className="text-gray-300">
                    We value work-life balance with flexible hours and remote work options.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="glass p-6 rounded-lg"
                >
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Modern Office</h3>
                  <p className="text-gray-300">
                    State-of-the-art office space with ergonomic workstations and relaxation areas.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="glass p-6 rounded-lg"
                >
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Competitive Pay</h3>
                  <p className="text-gray-300">
                    Above-market compensation with performance bonuses and equity options.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-dark p-10 md:p-16 rounded-lg text-center max-w-4xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Don't See the <span className="text-gradient">Perfect Fit?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  We're always looking for talented individuals to join our team. Send your resume to us, and we'll reach out when a suitable position opens up.
                </p>
                <a
                  href="mailto:careers@developito.com"
                  className="px-8 py-3 bg-neon-blue text-white rounded-md inline-block hover:bg-opacity-80 transition-colors"
                >
                  Submit Your Resume
                </a>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Careers;
