
import { Link } from 'react-router-dom';
import { Camera, Mic, Image, ArrowUp } from 'lucide-react';
import Navigation from '../components/Navigation';

const Features = () => {
  const features = [
    {
      id: 'sign2speak',
      title: 'Sign2Speak',
      description: 'Advanced sign language recognition technology that converts hand gestures into real-time text and speech output. Perfect for communication with hearing individuals.',
      longDescription: 'Our AI-powered system recognizes American Sign Language (ASL) and other sign languages, providing instant translation to help bridge communication gaps.',
      icon: Camera,
      href: '/sign2speak',
      gradient: 'from-accessible-blue to-blue-600',
      bgColor: 'bg-accessible-blue-light',
      features: ['Real-time recognition', 'Multiple sign languages', 'Voice output', 'Text display']
    },
    {
      id: 'talkbuddy',
      title: 'TalkBuddy',
      description: 'Comprehensive text-to-speech solution with multiple voice options and customizable settings. Ideal for individuals with speech difficulties or vocal fatigue.',
      longDescription: 'Type your message and let TalkBuddy speak for you with natural-sounding voices. Save frequently used phrases for quick access.',
      icon: Mic,
      href: '/talkbuddy',
      gradient: 'from-accessible-green to-green-600',
      bgColor: 'bg-accessible-green-light',
      features: ['Natural voices', 'Saved phrases', 'Adjustable speed', 'Multiple languages']
    },
    {
      id: 'seefor-me',
      title: 'SeeForMe',
      description: 'AI-powered visual assistance that provides detailed descriptions of images, documents, and scenes. Essential for users with visual impairments.',
      longDescription: 'Upload any image and receive comprehensive audio or text descriptions. Perfect for understanding visual content in documents, photos, and environments.',
      icon: Image,
      href: '/seefor-me',
      gradient: 'from-accessible-purple to-purple-600',
      bgColor: 'bg-accessible-purple-light',
      features: ['Image analysis', 'Scene description', 'Text recognition', 'Audio output']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-accessible-gray-50 to-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 text-center" aria-labelledby="features-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 
              id="features-heading" 
              className="text-4xl sm:text-5xl font-bold text-accessible-gray-900 mb-6 animate-fade-in"
            >
              Choose Your Accessibility Tool
            </h1>
            <p className="text-xl text-accessible-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Select the tool that best fits your communication needs. Each is designed with accessibility and ease of use as top priorities.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12" aria-label="Available accessibility tools">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <article 
                    key={feature.id}
                    className="feature-card h-full flex flex-col animate-scale-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Icon and Title */}
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent 
                          className="w-8 h-8 text-accessible-gray-700" 
                          aria-hidden="true"
                        />
                      </div>
                      <h2 className="text-2xl font-bold text-accessible-gray-900 group-hover:text-accessible-blue transition-colors">
                        {feature.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-accessible-gray-600 mb-4 leading-relaxed flex-grow">
                      {feature.description}
                    </p>

                    <p className="text-accessible-gray-500 mb-6 text-sm leading-relaxed">
                      {feature.longDescription}
                    </p>

                    {/* Feature List */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-accessible-gray-700 mb-3 uppercase tracking-wide">
                        Key Features
                      </h3>
                      <ul className="space-y-2" role="list">
                        {feature.features.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-sm text-accessible-gray-600">
                            <svg 
                              className="w-4 h-4 text-accessible-green mr-2 flex-shrink-0" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={feature.href}
                      className={`w-full bg-gradient-to-r ${feature.gradient} text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200 text-center inline-block group`}
                      aria-describedby={`${feature.id}-description`}
                    >
                      <span className="flex items-center justify-center">
                        Try {feature.title}
                        <svg 
                          className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                    
                    <span id={`${feature.id}-description`} className="sr-only">
                      Navigate to {feature.title} tool page
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 bg-gradient-to-r from-accessible-gray-100 to-accessible-gray-50" aria-labelledby="help-heading">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 id="help-heading" className="text-3xl font-bold text-accessible-gray-900 mb-6">
              Need Help Getting Started?
            </h2>
            <p className="text-lg text-accessible-gray-600 mb-8 leading-relaxed">
              Our support team is here to help you make the most of Sahaay AI's features. 
              Get personalized assistance and learn best practices for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Contact Support
              </Link>
              <a
                href="#features-heading"
                className="btn-secondary flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features-heading')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <ArrowUp className="w-5 h-5 mr-2" aria-hidden="true" />
                Back to Top
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Features;
