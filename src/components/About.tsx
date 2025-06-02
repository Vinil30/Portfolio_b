import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  HiOutlineLightBulb,
  HiOutlineCode,
  HiOutlineChartBar,
  HiOutlineCube,
} from 'react-icons/hi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <HiOutlineLightBulb className="text-4xl text-purple-500" />,
      title: 'Problem Solver',
      description:
        'Tackling complex challenges through innovative AI solutions and critical thinking',
    },
    {
      icon: <HiOutlineCode className="text-4xl text-purple-500" />,
      title: 'AI Developer',
      description:
        'Building intelligent systems using ML, DL, and NLP technologies',
    },
    {
      icon: <HiOutlineChartBar className="text-4xl text-purple-500" />,
      title: 'Data Scientist',
      description:
        'Extracting valuable insights through advanced data analysis and visualization',
    },
    {
      icon: <HiOutlineCube className="text-4xl text-purple-500" />,
      title: 'ML Architect',
      description:
        'Designing and implementing end-to-end machine learning pipelines',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 relative bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          ref={ref}
        >
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            Dedicated and innovative Computer Science Engineer with a strong
            foundation in automation engineering, artificial intelligence, and
            machine learning. Passionate about developing cutting-edge solutions
            that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Left column - Who I Am */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="border border-gray-700 rounded-2xl shadow-lg p-8 bg-gray-800 h-full neon-border">
              <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
              <p className="text-gray-400 mb-4">
                I'm a Computer Science Engineer specialized in AI and Machine
                Learning. With expertise in developing advanced AI-driven tools
                and enhancing user experiences through optimized workflows, I've
                contributed to various cutting-edge projects.
              </p>
              <p className="text-gray-400 mb-4">
                As a winner of multiple hackathons, I'm adept at leveraging
                technologies like GPT, LangChain, TensorFlow, and PyTorch to
                drive impactful solutions. My approach combines technical
                excellence with a deep understanding of how AI can solve
                real-world challenges.
              </p>
              <p className="text-gray-400">
                I'm always looking to collaborate with forward-thinking teams on
                projects that push the boundaries of what's possible with
                artificial intelligence.
              </p>
            </div>
          </motion.div>

          {/* Right column - Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 border border-gray-700 rounded-xl bg-gray-800 shadow-md flex flex-col items-center sm:items-start text-center sm:text-left transition-transform hover:scale-[1.02] neon-border"
              >
                <div className="mb-4 p-3 rounded-full bg-purple-800/20 inline-flex symbol">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default About;
