import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Mobile Application Developer',
      company: 'Novaday',
      location: 'Tehran, Iran',
      period: 'Jul 2020 - Mar 2022',
      description: [
        'Developed IoT Flutter application for remotely controlling company products, escalating revenue up to 34%',
        'Engineered fingerprint device on Linux/Raspberry Pi using Flutter, reducing data entry errors by 18%',
        'Optimized Android app performance by resolving memory leaks, improving load times by 40%',
        'Applied MVVM pattern to ensure high code quality, enhancing maintainability and scalability',
        'Collaborated in Agile teams with 2-week sprints and JIRA project management'
      ],
      technologies: ['Flutter', 'Dart', 'Android', 'Kotlin', 'WebRTC', 'MVVM', 'Linux/Raspberry Pi', 'Agile', 'JIRA']
    },
    {
      title: 'Junior Android Developer',
      company: 'Superz',
      location: 'Tehran, Iran',
      period: 'Oct 2019 - Jul 2020',
      description: [
        'Developed social media Android application from scratch using Clean Architecture',
        'Implemented comprehensive testing with Unit and Espresso tests for high code quality',
        'Collaborated in Agile team environment with 2-week sprints and JIRA project management',
        'Applied MVVM architectural patterns and Android Jetpack components for modern development'
      ],
      technologies: ['Android', 'Kotlin', 'Clean Architecture', 'Unit Testing', 'Espresso', 'MVVM', 'Agile', 'JIRA']
    },
    {
      title: 'Junior Android Developer',
      company: 'Bazarkhodro',
      location: 'Tehran, Iran',
      period: 'Apr 2019 - Mar 2020',
      description: [
        'Developed buying and selling car Android application for 50K users, achieving 98% crash-free rate',
        'Solely developed advanced result filtering feature with 20+ options, resulting in 10% user growth',
        'Applied Agile methodologies with 2-week sprints and JIRA project management',
        'Enhanced application stability through systematic bug fixing and performance optimization'
      ],
      technologies: ['Android', 'Kotlin', 'Clean Architecture', 'MVVM', 'Agile', 'JIRA', 'Performance Optimization']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-tertiary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark-text mb-12">
            Professional Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-border transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-1/2 border-4 border-dark-primary shadow-lg"></div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-dark-secondary p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-dark-border hover:border-primary-500/50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-dark-text mb-2 sm:mb-0">
                        {exp.title}
                      </h3>
                      <span className="text-primary-400 font-medium text-sm">
                        {exp.period}
                      </span>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-primary-400 mb-1">
                        {exp.company}
                      </h4>
                      <p className="text-dark-textSecondary text-sm flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        {exp.location}
                      </p>
                    </div>

                    <ul className="text-dark-text mb-6 space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;