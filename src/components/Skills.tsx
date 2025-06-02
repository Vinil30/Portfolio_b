import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn,
  SiKeras, SiOpencv, SiPandas, SiNumpy,
  SiAmazon, SiGit, SiDocker, SiLinux,
  SiJavascript, SiHtml5, SiJupyter
} from 'react-icons/si';
import { FaNetworkWired, FaBrain } from 'react-icons/fa';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <SiPython />, level: 95 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 80 },
        { name: 'C/C++', icon: null, level: 75 },
        { name: 'HTML/CSS', icon: <SiHtml5 />, level: 85 },
      ],
    },
    {
      name: 'Machine Learning & Deep Learning',
      skills: [
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 90 },
        { name: 'PyTorch', icon: <SiPytorch />, level: 85 },
        { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 95 },
        { name: 'Keras', icon: <SiKeras />, level: 90 },
      ],
    },
    {
      name: 'Data Science & Analysis',
      skills: [
        { name: 'Pandas', icon: <SiPandas />, level: 95 },
        { name: 'NumPy', icon: <SiNumpy />, level: 95 },
        { name: 'Jupyter', icon: <SiJupyter />, level: 90 },
        { name: 'Data Visualization', icon: null, level: 85 },
      ],
    },
    {
      name: 'NLP & LLM',
      skills: [
        { name: 'LangChain', icon: null, level: 90 },
        { name: 'Hugging Face', icon: null, level: 85 },
        { name: 'NLTK', icon: null, level: 90 },
        { name: 'spaCy', icon: null, level: 85 },
      ],
    },
    {
      name: 'Tools & DevOps',
      skills: [
        { name: 'Git/GitHub', icon: <SiGit />, level: 90 },
        { name: 'Docker', icon: <SiDocker />, level: 80 },
        { name: 'AWS', icon: <SiAmazon />, level: 75 },
        { name: 'Linux', icon: <SiLinux />, level: 85 },
      ],
    },
    {
      name: 'Specialized Skills',
      skills: [
        { name: 'Neural Networks', icon: <FaBrain />, level: 90 },
        { name: 'Computer Vision', icon: <SiOpencv />, level: 80 },
        { name: 'RAG Pipelines', icon: <FaNetworkWired />, level: 85 },
        { name: 'Prompt Engineering', icon: null, level: 90 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 relative bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-4xl font-bold text-white">Skills</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            My technical expertise spans various areas of machine learning, deep learning, and AI development,
            with a focus on building innovative and practical solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="p-6 neon-border bg-gray-800 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-white border-b border-gray-700 pb-3">
                {category.name}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {skill.icon && (
                          <span className="text-primary-400 mr-3 text-xl">
                            {skill.icon}
                          </span>
                        )}
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-xs text-primary-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <motion.div
                        className="h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-primary-700"
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 neon-border bg-gray-800 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 text-center neon-border bg-gray-700/50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-700/30 flex items-center justify-center text-primary-400 text-3xl">
                <FaBrain />
              </div>
              <h4 className="font-semibold text-white mb-2">Neural Networks</h4>
              <p className="text-gray-400 text-sm">Designing and implementing various neural network architectures</p>
            </div>

            <div className="p-5 text-center neon-border bg-gray-700/50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-700/30 flex items-center justify-center text-primary-400 text-3xl">
                <SiPytorch />
              </div>
              <h4 className="font-semibold text-white mb-2">Deep Learning</h4>
              <p className="text-gray-400 text-sm">PyTorch, TensorFlow, CNNs, RNNs, LSTM networks</p>
            </div>

            <div className="p-5 text-center neon-border bg-gray-700/50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-700/30 flex items-center justify-center text-primary-400 text-3xl">
                <FaNetworkWired />
              </div>
              <h4 className="font-semibold text-white mb-2">LLM & RAG</h4>
              <p className="text-gray-400 text-sm">Fine-tuning, RAG pipelines, prompt engineering, LLM agents</p>
            </div>

            <div className="p-5 text-center neon-border bg-gray-700/50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-700/30 flex items-center justify-center text-primary-400 text-3xl">
                <SiScikitlearn />
              </div>
              <h4 className="font-semibold text-white mb-2">ML Engineering</h4>
              <p className="text-gray-400 text-sm">End-to-end ML pipelines, model optimization, deployment</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary-700/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Skills;
