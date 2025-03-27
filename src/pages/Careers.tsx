
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const jobListings = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    type: 'Full-time',
    location: 'Remote (US/Europe)',
    department: 'Engineering',
    description: 'We are looking for a Senior Frontend Developer to join our team. You will be responsible for building high-performing, beautiful web applications using React and other modern frontend technologies.',
    requirements: [
      'At least 5 years of experience in frontend development',
      'Strong proficiency in JavaScript, TypeScript, and React',
      'Experience with CSS preprocessors and modern CSS approaches',
      'Knowledge of responsive design and cross-browser compatibility',
      'Experience with performance optimization techniques',
      'Strong problem-solving skills and attention to detail',
    ],
    responsibilities: [
      'Develop and maintain high-quality frontend code',
      'Collaborate with designers to implement UI/UX designs',
      'Optimize applications for maximum speed and scalability',
      'Ensure the technical feasibility of UI/UX designs',
      'Write clean, maintainable, and well-documented code',
      'Stay up-to-date with emerging trends and technologies',
    ]
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    type: 'Full-time',
    location: 'Remote (Worldwide)',
    department: 'Design',
    description: 'We are seeking a talented UX/UI Designer to create amazing user experiences. You will be responsible for delivering attractive, user-friendly interfaces that help our clients achieve their business goals.',
    requirements: [
      'At least 3 years of experience in UX/UI design',
      'Strong portfolio showcasing your design skills',
      'Proficiency in design tools such as Figma, Adobe XD, or similar',
      'Understanding of user-centered design principles',
      'Knowledge of web and mobile design patterns and best practices',
      'Ability to work collaboratively in a fast-paced environment',
    ],
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity mockups',
      'Conduct user research and usability testing',
      'Design responsive interfaces for web and mobile applications',
      'Collaborate with developers to ensure proper implementation',
      'Stay up-to-date with design trends and technology developments',
      'Contribute to the company's design system and guidelines',
    ]
  },
  {
    id: 3,
    title: 'SEO Specialist',
    type: 'Full-time',
    location: 'Remote (Worldwide)',
    department: 'Marketing',
    description: 'We\'re looking for an SEO Specialist to improve our clients\' online visibility. You will develop and implement strategies to increase website traffic and rankings.',
    requirements: [
      'At least 3 years of experience in SEO',
      'In-depth knowledge of search engine algorithms and ranking factors',
      'Experience with SEO tools like Ahrefs, SEMrush, or similar',
      'Understanding of technical SEO, on-page SEO, and off-page SEO',
      'Strong analytical skills and attention to detail',
      'Ability to interpret data and provide actionable insights',
    ],
    responsibilities: [
      'Perform keyword research and competitive analysis',
      'Optimize website content for search engines',
      'Analyze website performance and recommend improvements',
      'Create and implement link-building strategies',
      'Monitor and report on SEO performance metrics',
      'Stay up-to-date with industry trends and algorithm updates',
    ]
  }
];

const Careers = () => {
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);
  
  const toggleJob = (id: number) => {
    if (expandedJobId === id) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(id);
    }
  };

  return (
    <>
      <Helmet>
        <title>Join Our Team | Careers at Developito</title>
        <meta name="description" content="Join Developito's team of web development experts, designers, and digital marketers. Explore our current job openings." />
        <meta name="keywords" content="web development jobs, SEO careers, UX/UI design positions, remote tech jobs" />
        <link rel="canonical" href="https://developito.com/careers" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Join Our Team | Careers at Developito" />
        <meta property="og:description" content="Join Developito's team of web development experts, designers, and digital marketers. Explore our current job openings." />
        <meta property="og:url" content="https://developito.com/careers" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://developito.com/og-image-careers.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join Our Team | Careers at Developito" />
        <meta name="twitter:description" content="Join Developito's team of web development experts, designers, and digital marketers. Explore our current job openings." />
        <meta name="twitter:image" content="https://developito.com/twitter-image-careers.jpg" />
        
        {/* Schema.org structured data for job listings */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": "Senior Frontend Developer",
              "description": "We are looking for a Senior Frontend Developer to join our team. You will be responsible for building high-performing, beautiful web applications using React and other modern frontend technologies.",
              "identifier": {
                "@type": "PropertyValue",
                "name": "Developito",
                "value": "FED-2023"
              },
              "datePosted": "2023-09-15",
              "validThrough": "2023-12-31",
              "employmentType": "FULL_TIME",
              "hiringOrganization": {
                "@type": "Organization",
                "name": "Developito",
                "sameAs": "https://developito.com",
                "logo": "https://developito.com/logo.png"
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "US",
                  "addressLocality": "Remote"
                }
              },
              "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": {
                  "@type": "QuantitativeValue",
                  "minValue": 85000,
                  "maxValue": 120000,
                  "unitText": "YEAR"
                }
              },
              "skills": "JavaScript, TypeScript, React, CSS, Web Performance",
              "qualifications": "At least 5 years of experience in frontend development",
              "experienceRequirements": "5+ years of professional software development experience",
              "educationRequirements": "Bachelor's degree in Computer Science or equivalent practical experience"
            }
          `}
        </script>
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
                  Build your career with us and work on exciting projects that make a difference. We're always looking for talented individuals to join our team.
                </p>
              </motion.div>
            </div>
          </section>
          
          {/* Why Work With Us Section */}
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
                    Why Work With <span className="text-gradient">Developito</span>
                  </h2>
                  
                  <p className="text-gray-300 mb-8">
                    At Developito, we believe in creating an environment where talented individuals can thrive, grow, and make a meaningful impact. Here's why you should consider joining our team:
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      'Remote-first culture with flexible working hours',
                      'Competitive compensation and benefits package',
                      'Continuous learning and professional development',
                      'Work with cutting-edge technologies and tools',
                      'Collaborative and supportive team environment',
                      'Opportunity to work on diverse and challenging projects'
                    ].map((benefit, index) => (
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
                        <span className="text-gray-200">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-video overflow-hidden rounded-lg glass"
                >
                  <img 
                    src="/lovable-uploads/9a3135c7-4d8b-4df4-a47a-62d8236be431.png" 
                    alt="Developito team at work" 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Current Openings Section */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Current <span className="text-gradient">Openings</span>
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Explore our current job opportunities and find the role that matches your skills and career aspirations.
                </p>
              </motion.div>
              
              <div className="space-y-6 max-w-4xl mx-auto">
                {jobListings.map((job) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass rounded-lg overflow-hidden"
                  >
                    <div 
                      className="p-6 cursor-pointer flex justify-between items-center"
                      onClick={() => toggleJob(job.id)}
                    >
                      <div>
                        <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 text-sm">
                          <span className="text-neon-blue">{job.department}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-300">{job.type}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-300">{job.location}</span>
                        </div>
                      </div>
                      <div>
                        {expandedJobId === job.id ? (
                          <ChevronUp className="w-6 h-6 text-neon-blue" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-300" />
                        )}
                      </div>
                    </div>
                    
                    {expandedJobId === job.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 border-t border-white/10 pt-6"
                      >
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3">Description</h4>
                          <p className="text-gray-300">{job.description}</p>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3">Requirements</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-300">
                            {job.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3">Responsibilities</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-300">
                            {job.responsibilities.map((resp, index) => (
                              <li key={index}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex justify-center mt-8">
                          <a 
                            href={`/careers/apply/${job.id}`} 
                            className="px-8 py-3 rounded-md bg-neon-blue hover:bg-opacity-80 transition-colors text-white font-medium"
                          >
                            Apply Now
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Application Process Section */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Application <span className="text-gradient">Process</span>
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  We've designed a straightforward application process to help us find the right candidates while providing a positive experience for all applicants.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    step: 1,
                    title: 'Apply Online',
                    description: 'Submit your application through our careers page, including your resume and cover letter.'
                  },
                  {
                    step: 2,
                    title: 'Initial Screening',
                    description: 'Our hiring team will review your application and reach out to potential matches.'
                  },
                  {
                    step: 3,
                    title: 'Interviews',
                    description: 'Participate in a series of interviews to assess skills, experience, and cultural fit.'
                  },
                  {
                    step: 4,
                    title: 'Offer & Onboarding',
                    description: 'Successful candidates receive an offer and begin our comprehensive onboarding process.'
                  }
                ].map((step) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (step.step - 1) * 0.1, duration: 0.5 }}
                    className="glass p-6 rounded-lg text-center relative"
                  >
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-neon-blue flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold mt-4 mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-dark p-8 md:p-12 rounded-lg max-w-4xl mx-auto text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Don't See a <span className="text-gradient">Perfect Match?</span>
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  We're always interested in connecting with talented individuals, even if we don't have a current opening that matches your skills. Send us your resume and let us know how you can contribute to our team.
                </p>
                <a 
                  href="/contact" 
                  className="px-8 py-3 rounded-md bg-neon-blue hover:bg-opacity-80 transition-colors text-white font-medium inline-block"
                >
                  Get In Touch
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
