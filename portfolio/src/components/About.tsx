import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark-text mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Mobile Software Engineer with 4+ years of experience specializing in Android (Kotlin) and Flutter (Dart) development.
                Proven track record of delivering B2B/B2C applications with 50K+ installs and 98% crash-free rates using Clean Architecture
                and comprehensive testing strategies.
              </p>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                My technical expertise includes Android development, Flutter, MVVM/MVP/MVI patterns, dependency injection (Dagger/Hilt/Koin),
                unit and Espresso testing, IoT applications, and WebRTC implementation.
              </p>
            </div>

            <div className="bg-dark-tertiary p-8 rounded-2xl border border-dark-border">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Key Highlights
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-600 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-200">Experience</h4>
                    <p className="text-gray-300">
                      4+ years developing mobile applications with 50K+ user installs
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-600 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-200">Education</h4>
                    <p className="text-gray-300">
                      M.Eng. Business Management - Carleton University (2024)
                    </p>
                    <p className="text-gray-400 text-sm">
                      B.Eng. Computer Engineering - Shahrood University (2020)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-600 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-200">Languages</h4>
                    <p className="text-gray-300">
                      Persian (Native), English (Professional)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;