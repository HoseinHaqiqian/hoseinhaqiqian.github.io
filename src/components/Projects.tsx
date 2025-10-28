import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  link?: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Flutter Event Calendar',
      category: 'mobile',
      description: 'Persian Calendar Flutter package with comprehensive date handling and event management capabilities for Persian users.',
      image: '📅',
      technologies: ['Flutter', 'Dart', 'Package Development', 'Open Source'],
      features: [
        'Persian calendar support',
        'Event management system',
        'Flutter package publishing',
        '1K+ GitHub stars',
        'Community maintained'
      ],
      link: 'https://github.com/novaday-co/flutter_event_calendar'
    },
    {
      id: 2,
      title: 'Inspection - Form Validation',
      category: 'mobile',
      description: 'Flutter validation library for form inputs with comprehensive validation rules and easy integration.',
      image: '✅',
      technologies: ['Flutter', 'Dart', 'Validation', 'Open Source'],
      features: [
        'Form validation library',
        'Custom validation rules',
        'Easy integration',
        'Comprehensive documentation',
        '100+ GitHub stars'
      ],
      link: 'https://github.com/novaday-co/inspection'
    },
    {
      id: 3,
      title: 'Clock of Clocks',
      category: 'mobile',
      description: 'Animated numeric clock application built with Flutter, featuring creative animations and time display.',
      image: '🕐',
      technologies: ['Flutter', 'Dart', 'Animations', 'UI Design'],
      features: [
        'Animated time display',
        'Creative UI design',
        'Flutter animations',
        'Personal project',
        'Open source'
      ],
      link: 'https://github.com/HoseinHaqiqian/clock_of_clocks'
    },
    {
      id: 4,
      title: 'ESP Graph',
      category: 'mobile',
      description: 'Android application connecting ESP modules via BLE to draw real-time data charts for IoT monitoring.',
      image: '📊',
      technologies: ['Android', 'Kotlin', 'BLE', 'IoT', 'Real-time Data'],
      features: [
        'BLE connectivity',
        'Real-time data visualization',
        'ESP module integration',
        'IoT application',
        'Chart rendering'
      ]
    },
    {
      id: 5,
      title: 'IoT Flutter Application',
      category: 'mobile',
      description: 'Flutter application for remotely controlling IoT devices with enhanced user experience and performance optimization.',
      image: '🏠',
      technologies: ['Flutter', 'Dart', 'IoT', 'Remote Control', 'Performance'],
      features: [
        'IoT device control',
        'Remote connectivity',
        'Performance optimization',
        'User-friendly interface',
        'B2B application'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-dark-tertiary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark-text mb-4">
            Featured Projects
          </h2>

          <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            A selection of my recent work showcasing expertise in mobile app development,
            cross-platform solutions, and full-stack applications.
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm opacity-75">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border border-gray-700"
              >
                {/* Project image/placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden">
                  <span className="text-6xl">{project.image}</span>
                  <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-dark-text">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-primary-900/50 text-primary-300 text-xs font-medium rounded-full border border-primary-700/50">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-200 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-200 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700 text-gray-200 text-xs font-medium rounded border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium text-center"
                >
                  View on GitHub
                </a>
              ) : (
                <button className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium">
                  View Project Details
                </button>
              )}
                </div>
              </div>
            ))}
          </div>

          </div>
      </div>
    </section>
  );
};

export default Projects;