import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaMedal, FaAward } from 'react-icons/fa';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const educationData = [
    {
      institution: 'IIIT Kota',
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      date: '2023 - 2027',
      location: 'Kota, Rajasthan',
      details: [
        'Focusing on advanced computer science fundamentals and specialized AI/ML coursework',
        'Engaged in research projects related to LLMs and knowledge graphs',
        'Active participant in technical clubs and hackathons'
      ]
    },
    {
      institution: 'Narayana Junior College',
      degree: 'TSBIE',
      field: 'Mathematics, Physics, and Chemistry',
      date: '2020 - 2022',
      location: 'Hyderabad, Telangana',
      details: [
        'Completed intermediate education with strong foundation in mathematics and sciences',
        'Participated in regional science competitions'
      ]
    },
    {
      institution: 'Vasavi High School',
      degree: 'SSC',
      field: 'General Education',
      date: '2010 - 2020',
      location: 'Hyderabad, Telangana',
      details: [
        'Achieved strong academic performance and built a solid foundation in science and math',
        'Engaged in school-level competitions and extracurriculars'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Machine Learning',
      issuer: 'SuperDataScience Team, Udemy',
      date: 'February 2025'
    },
    {
      name: 'Deep Learning',
      issuer: 'SuperDataScience Team, Udemy',
      date: 'March 2025'
    },
    {
      name: 'LLM and Generative AI',
      issuer: 'Ligiency Team, Udemy',
      date: 'April 2025'
    },
    {
      name: 'Dynamic Programming',
      issuer: 'Algo University',
      date: 'May 2025'
    }
  ];

  const achievements = [
    {
      title: 'Winner - Dynamic Programming & Backtracking Competition',
      organization: 'AlgoUniversity',
      date: 'May 2025',
      description:
        'Secured top position by successfully completing all 7 days of the DP & Backtracking Challenge'
    },
    {
      title: 'Project Lead - Smart Farming Research',
      date: 'January 2025',
      description:
        'Led a smart farming research project, integrating 5 ML models into a full-stack solution with real-world applicability'
    },
    {
      title: 'Hackathon Team Lead',
      date: 'Multiple Events',
      description:
        'Led teams in multiple hackathons, managing collaboration and technical development across ML and web domains'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="education" className="py-20 relative bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Education & Achievements</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 max-w-3xl mx-auto mt-4">
            My academic background, professional certifications, and key achievements in the field of AI and computer science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col space-y-8"
          >
            <div className="flex items-center mb-2">
              <FaGraduationCap className="text-primary-500 mr-3" size={20} />
              <h3 className="text-2xl font-semibold text-white ">Education</h3>

            </div>
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark-700 border border-dark-600 rounded-xl p-6 shadow-md hover:shadow-lg hover:bg-dark-600 transition-all jborder"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-white font-semibold text-lg">{edu.institution}</h4>
                    <p className="text-primary-400">{edu.degree} - {edu.field}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-300">{edu.date}</p>
                    <p className="text-sm text-gray-500">{edu.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1 text-sm ">
                  {edu.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications and Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col space-y-12 "
          >
            {/* Certifications */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <FaMedal className="text-primary-500 mr-3" size={20} />
                <h3 className="text-2xl font-semibold text-white">Certifications</h3>
              </div>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-dark-700 border border-dark-600 rounded-xl p-4 shadow-md hover:shadow-lg hover:bg-dark-600 transition-all jborder"
                >
                  <h4 className="text-white font-semibold">{cert.name}</h4>
                  <p className="text-primary-400 text-sm">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs">{cert.date}</p>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <FaAward className="text-primary-500 mr-3" size={20} />
                <h3 className="text-2xl font-semibold text-white">Achievements</h3>
              </div>
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-dark-700 border border-dark-600 rounded-xl p-6 shadow-md hover:shadow-lg hover:bg-dark-600 transition-all jborder"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-white font-semibold">{a.title}</h4>
                    <p className="text-sm text-primary-400 whitespace-nowrap">{a.date}</p>
                  </div>
                  {a.organization && (
                    <p className="text-gray-300 text-sm mb-1">{a.organization}</p>
                  )}
                  <p className="text-gray-400 text-sm">{a.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Education;
