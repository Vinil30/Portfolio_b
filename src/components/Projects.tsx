import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiArrowRight } from 'react-icons/fi';

type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  category: string[];
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState('all');

  const projects: ProjectType[] = [
    {
      id: 1,
      title: 'Smart Farming ML Suite',
      description: 'End-to-end machine learning system with 5 prediction models (Soil, Crop, Fertilizer, Irrigation, Price). Features automated model selection and an integrated e-commerce UI.',
      image: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg',
      technologies: ['Python', 'Flask', 'XGBoost', 'Random Forest', 'CNN', 'LSTM'],
      githubLink: 'https://github.com/Vinil30?tab=repositories',
      demoLink: 'https://e2e-combine.onrender.com/',
      category: ['machine-learning', 'full-stack'],
    },
    {
      id: 2,
      title: 'Bank Fraud Detection via SOM',
      description: 'Unsupervised anomaly detection system using Self-Organizing Maps to identify fraudulent banking behavior from high-dimensional transaction data.',
      image: 'https://images.pexels.com/photos/210742/pexels-photo-210742.jpeg',
      technologies: ['Python', 'TensorFlow', 'SOM', 'Unsupervised Learning'],
      githubLink: 'https://github.com/Vinil30/Bank_CreditCard_Fraud_DetectionSOM',
      category: ['machine-learning', 'data-science'],
    },
    {
      id: 3,
      title: 'NLPulse: Sentiment Detection',
      description: 'NLP-based sentiment analysis tool that processes text data through tokenization and Bag-of-Words techniques to predict sentiment with 89% accuracy.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      technologies: ['Python', 'NLP', 'BoW', 'Logistic Regression'],
      githubLink: 'https://github.com/Vinil30?tab=repositories',
      category: ['nlp', 'machine-learning'],
    },
    {
      id: 4,
      title: 'LLM Knowledge Graph Integration',
      description: 'Research project focused on enhancing LLMs with external knowledge graphs to improve contextual understanding and factual accuracy.',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      technologies: ['LangChain', 'Neo4j', 'PyTorch', 'Hugging Face'],
      githubLink: 'https://github.com/Vinil30/Bank_CreditCard_Fraud_DetectionSOM',
      category: ['llm', 'research'],
    },
    {
      id: 5,
      title: 'AI Resume Builder',
      description: 'GPT-powered resume creation tool that generates personalized, professional resumes with dynamic content adaptation based on job descriptions.',
      image: 'https://images.pexels.com/photos/3759059/pexels-photo-3759059.jpeg',
      technologies: ['React', 'Node.js', 'GPT API', 'NLP'],
      githubLink: 'https://github.com/Vinil30?tab=repositories',
      category: ['nlp', 'full-stack', 'llm'],
    },
    {
      id: 6,
      title: 'Banking Customer Churn Prediction',
      description: 'Deep learning solution using Artificial Neural Networks to predict customer churn for banking services, enhancing retention strategies.',
      image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg',
      technologies: ['TensorFlow', 'Keras', 'Pandas', 'Scikit-learn'],
      githubLink: 'https://github.com/Vinil30/Customer_Churn_Analysis',
      category: ['machine-learning', 'data-science'],
    },
  ];

  const filterCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'machine-learning', name: 'Machine Learning' },
    { id: 'nlp', name: 'NLP' },
    { id: 'llm', name: 'LLM' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'full-stack', name: 'Full Stack' },
    { id: 'research', name: 'Research' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-4xl font-bold text-white">Projects</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            Explore my portfolio of AI, ML, and data science projects that demonstrate my skills
            in developing innovative solutions for complex problems.
          </p>

          <div className="flex flex-wrap justify-center mt-8 gap-2">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${filter === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="card h-full flex flex-col group"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="relative overflow-hidden h-48 rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

                <div className="absolute top-3 right-3 flex space-x-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/80 rounded-full text-white hover:bg-primary-600 transition-colors duration-300"
                    >
                      <FiGithub size={16} />
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/80 rounded-full text-white hover:bg-primary-600 transition-colors duration-300"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow bg-gray-800 rounded-b-lg">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700 rounded-md text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-gray-700">
                    <a
                      href={project.githubLink || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-400 text-sm group-hover:text-primary-300 transition-colors"
                    >
                      <FiCode className="mr-2" />
                      View Code
                      <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-primary-700/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary-600/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Projects;
