import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      skills: ['Android', 'Flutter', 'Cross-Platform'],
      icon: '📱'
    },
    {
      title: 'Programming Languages',
      skills: ['Kotlin', 'Dart', 'Java', 'JavaScript', 'TypeScript'],
      icon: '💻'
    },
    {
      title: 'Architecture Patterns',
      skills: ['MVVM', 'MVP', 'MVI', 'Clean Architecture'],
      icon: '🏗️'
    },
    {
      title: 'Dependency Injection',
      skills: ['Dagger 2', 'Hilt', 'Koin', 'Koin Kiwi'],
      icon: '🔧'
    },
    {
      title: 'Version Control & DevOps',
      skills: ['Git', 'CI/CD', 'Automated Testing', 'Pipeline Management'],
      icon: '⚙️'
    },
    {
      title: 'APIs & Networking',
      skills: ['RESTful APIs', 'WebRTC', 'Google Services', 'Retrofit'],
      icon: '🔌'
    },
    {
      title: 'Testing',
      skills: ['Unit Testing', 'Espresso', 'Integration Testing'],
      icon: '🧪'
    },
    {
      title: 'Hardware & Connectivity',
      skills: ['BLE', 'Linux/Raspberry Pi', 'Device Integration', 'IoT Protocols'],
      icon: '🔗'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark-text mb-12">
            Technical Skills
          </h2>

          <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            With a strong foundation in mobile development and a diverse skill set across
            the full stack, I bring comprehensive expertise to create end-to-end solutions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-200">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group relative"
                    >
                      <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium border border-gray-700 hover:border-primary-400 hover:text-primary-400 transition-all duration-200 cursor-default">
                        {skill}
                      </span>

                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-primary-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skill highlights section */}
          <div className="mt-16 bg-gradient-to-r from-primary-700 to-primary-900 p-8 rounded-2xl text-white border border-primary-600/50">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Key Strengths
            </h3>

            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-4xl mb-3">🏗️</div>
                <h4 className="text-lg font-semibold mb-2">Enterprise Architecture</h4>
                <p className="text-blue-100 text-sm">
                  Clean Architecture implementation with MVVM/MVP/MVI patterns for enterprise-scale applications
                </p>
              </div>

              <div>
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="text-lg font-semibold mb-2">Production Deployment</h4>
                <p className="text-blue-100 text-sm">
                  CI/CD pipelines, automated testing with Unit/Espresso, and production-ready applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;