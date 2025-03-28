
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const workflowSteps = [
  {
    id: 1,
    title: 'Discovery',
    icon: '🔍',
    description: 'We start by understanding your business goals, target audience, and project requirements through in-depth consultation.',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 2,
    title: 'Strategy',
    icon: '🧠',
    description: 'Our team develops a comprehensive plan covering design, technology stack, timeline, and key performance indicators.',
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 3,
    title: 'Design',
    icon: '🎨',
    description: 'We create user-centric designs that are both visually appealing and optimized for conversion and engagement.',
    color: 'from-green-400 to-green-600'
  },
  {
    id: 4,
    title: 'Development',
    icon: '💻',
    description: 'Our engineers build your solution using modern technologies and best practices for performance and scalability.',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    id: 5,
    title: 'Testing',
    icon: '🧪',
    description: 'Rigorous quality assurance ensures your product works flawlessly across all devices and browsers.',
    color: 'from-red-400 to-red-600'
  },
  {
    id: 6,
    title: 'Launch',
    icon: '🚀',
    description: 'We handle the deployment and provide training to ensure a smooth transition into using your new digital solution.',
    color: 'from-neon-blue to-blue-700'
  }
];

const Workflow = () => {
  return (
    <section className="py-24 relative" id="workflow">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-neon-blue opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-neon-green opacity-10 rounded-full filter blur-3xl"></div>
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
            Our Development <span className="text-gradient">Process</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A transparent and proven approach to delivering exceptional digital products that exceed expectations and drive results.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-green to-neon-blue transform -translate-x-1/2"></div>
          
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Step number with icon */}
              <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl bg-gradient-to-br ${step.color} relative z-10`}
                  >
                    {step.icon}
                    <div className="absolute -bottom-1 -right-1 bg-background rounded-full px-2 py-1 text-xs font-mono border border-white/10">
                      {step.id.toString().padStart(2, '0')}
                    </div>
                  </motion.div>
                  
                  {/* Connector to timeline (visible only on desktop) */}
                  <div className="hidden md:block absolute top-1/2 w-12 h-1 bg-gradient-to-r from-transparent to-neon-blue transform -translate-y-1/2 right-auto left-full"></div>
                </div>
              </div>
              
              {/* Step content */}
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl hover:border-neon-blue/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <span className={`bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>{step.title}</span>
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`h-1 bg-gradient-to-r ${step.color} mt-4 rounded-full`}
                  ></motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our iterative approach ensures we remain agile, adaptable, and focused on your goals throughout the entire project lifecycle, delivering results that drive your business forward.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;
