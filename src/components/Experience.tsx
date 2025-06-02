import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: 'AI/ML Engineer',
    company: 'WebMobi360',
    period: 'May 2025 – Present',
    location: 'Remote',
    description: [
      'Designed and implemented automation solutions for an Angular-based web application, optimizing user workflows.',
      'Built a Guided Tour feature to enhance onboarding and user navigation.',
      'Created robust test scripts to validate critical application functions.'
    ],
    skills: ['LLMs', 'LangChain', 'Prompt Engineering', 'Automation Tools', 'Chrome Extensions']
  },
  {
    title: 'ML Engineer',
    company: 'SwiftSafe',
    period: 'March 2025 – May 2025',
    location: 'Remote',
    description: [
      'Led development of an AI-powered anomaly detection system using SOM and LLMs.',
      'Integrated contextual log analysis with GPT for threat intelligence and real-time monitoring.',
      'Worked closely with cybersecurity to validate policy compliance using LLM pipelines.'
    ],
    skills: ['SOM', 'GPT', 'Cybersecurity', 'Anomaly Detection', 'LLMs']
  },
  {
    title: 'Research Intern – Knowledge Graphs & LLMs',
    company: 'Independent Research',
    period: 'January 2025',
    location: 'Remote',
    description: [
      'Integrated external knowledge graphs with LLMs to enhance reasoning and factual accuracy.',
      'Built Neo4j-based ingestion pipelines and fine-tuned transformer models.',
      'Enabled LLM application in complex domains like healthcare.'
    ],
    skills: ['Neo4j', 'Knowledge Graphs', 'Fine-tuning', 'Transformer Models', 'LLMs']
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Work Experience</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

          {experienceData.map((experience, index) => {
            const { ref, inView } = useInView({
              threshold: 0.1,
              triggerOnce: true,
              delay: 100,
            });

            return (
              <div
                key={index}
                ref={ref}
                className={`relative mb-16 transition-all duration-1000 ease-out ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block w-5 h-5 absolute left-1/2 transform -translate-x-1/2 rounded-full bg-purple-500 z-10"></div>

                  <div className={`md:w-1/2 mb-8 md:mb-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-purple-500/10 transition-shadow duration-300">
                      <div className="flex items-center mb-4 justify-between">
                        <h3 className="text-xl font-bold text-purple-400">{experience.title}</h3>
                        <div className="hidden md:block">
                          <span className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full">
                            {experience.company}
                          </span>
                        </div>
                      </div>

                      <div className="md:hidden mb-4">
                        <span className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full">
                          {experience.company}
                        </span>
                      </div>

                      <div className="flex items-center mb-4 text-gray-400 text-sm">
                        <Calendar size={16} className="mr-2" />
                        <span>{experience.period}</span>
                        <span className="mx-2">•</span>
                        <Briefcase size={16} className="mr-2" />
                        <span>{experience.location}</span>
                      </div>

                      <div className="space-y-2">
                        {experience.description.map((desc, i) => (
                          <p key={i} className="text-gray-300 text-sm">{desc}</p>
                        ))}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {experience.skills.map((skill, i) => (
                          <span key={i} className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
