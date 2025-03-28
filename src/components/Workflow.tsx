
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {workflowSteps.slice(0, 3).map((step, index) => (
            <WorkflowCard key={step.id} step={step} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center my-4"
        >
          <div className="hidden lg:flex">
            <ArrowRight className="w-12 h-12 text-neon-blue animate-pulse" />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {workflowSteps.slice(3).map((step, index) => (
            <WorkflowCard key={step.id} step={step} index={index + 3} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our iterative approach ensures we remain agile, adaptable, and focused on your goals throughout the entire project lifecycle, delivering results that drive your business forward.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const WorkflowCard = ({ step, index }: { step: typeof workflowSteps[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="glass hover:shadow-lg transition-all duration-300 group relative"
    >
      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${step.color}`}></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl bg-gradient-to-br ${step.color} mr-4`}>
            {step.icon}
          </div>
          <div className="flex items-baseline">
            <span className="text-white/50 font-mono text-sm mr-2">0{step.id}</span>
            <h3 className="text-xl font-bold">{step.title}</h3>
          </div>
        </div>
        
        <p className="text-gray-300 pl-16">{step.description}</p>
        
        <div className="w-full h-1 bg-white/5 mt-6 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 * index }}
            className={`h-full bg-gradient-to-r ${step.color}`}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Workflow;
