import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'haqiqianhosein@gmail.com',
      link: 'mailto:haqiqianhosein@gmail.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/hosein-haqiqian-22812789',
      link: 'https://www.linkedin.com/in/hosein-haqiqian-22812789/'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/HoseinHaqiqian',
      link: 'https://github.com/HoseinHaqiqian'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark-text mb-4">
            Get In Touch
          </h2>

          <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-dark-text mb-8">
                Let's Connect
              </h3>

              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm passionate about creating innovative mobile solutions and would love to
                discuss how I can help bring your ideas to life. Whether you're looking for
                a mobile app developer, consultant, or just want to chat about technology,
                I'm here to help.
              </p>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 group border border-gray-700"
                  >
                    <span className="text-2xl mr-4">{method.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-200 group-hover:text-primary-400">
                        {method.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability indicator */}
              <div className="mt-8 p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg border border-green-700/50">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <h4 className="font-semibold text-dark-text">Available for Projects</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Currently open to freelance opportunities and full-time positions.
                  Let's discuss how I can contribute to your team!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-dark-text mb-8">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 text-gray-200 placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 text-gray-200 placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 text-gray-200 placeholder-gray-500"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 resize-none text-gray-200 placeholder-gray-500"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 transform hover:scale-[1.02] font-medium shadow-lg"
                >
                  Send Message
                </button>
              </form>

              <p className="text-sm text-gray-400 mt-4 text-center">
                I'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;