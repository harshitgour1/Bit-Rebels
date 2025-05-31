
import { Link } from 'react-router-dom';
import { Accessibility, Mic, Camera, Image } from 'lucide-react';
import Navigation from '../components/Navigation';

const Index = () => {
  const features = [
    {
      id: 'sign2speak',
      title: 'Sign2Speak',
      description: 'Real-time sign language recognition that converts gestures into text and speech',
      icon: Camera,
      href: '/sign2speak',
      color: 'from-accessible-blue to-blue-600',
      bgGradient: 'bg-gradient-to-br from-accessible-blue-light to-blue-50'
    },
    {
      id: 'talkbuddy',
      title: 'TalkBuddy',
      description: 'Text-to-speech tool with customizable voices for communication assistance',
      icon: Mic,
      href: '/talkbuddy',
      color: 'from-accessible-green to-green-600',
      bgGradient: 'bg-gradient-to-br from-accessible-green-light to-green-50'
    },
    {
      id: 'seefor-me',
      title: 'SeeForMe',
      description: 'AI-powered image description service for visual accessibility support',
      icon: Image,
      href: '/seefor-me',
      color: 'from-accessible-purple to-purple-600',
      bgGradient: 'bg-gradient-to-br from-accessible-purple-light to-purple-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-accessible-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-20">
        <section className="relative overflow-hidden py-20 sm:py-32" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 
                id="hero-heading" 
                className="text-4xl sm:text-6xl lg:text-7xl font-bold text-accessible-gray-900 mb-6 leading-tight"
              >
                A friend that
                <span className="block bg-gradient-to-r from-accessible-blue to-accessible-purple bg-clip-text text-transparent pb-2.5">
                  Speaks, Sees and Signs
                </span>

              </h1>
              
              <p className="text-xl sm:text-2xl text-accessible-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Breaking down communication barriers with innovative assistive technology. 
                Sign language recognition, text-to-speech, and visual descriptions - all in one accessible platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/features"
                  className="btn-primary text-lg px-8 py-4 animate-scale-in"
                  aria-describedby="get-started-description"
                >
                  Get Started
                </Link>
                <span id="get-started-description" className="sr-only">
                  Navigate to feature selection page to choose your accessibility tool
                </span>
                
                <Link
                  to="/contact"
                  className="btn-secondary text-lg px-8 py-4 animate-scale-in"
                  style={{ animationDelay: '0.2s' }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          
          {/* Floating glass elements for visual interest */}
          <div className="absolute top-1/4 left-10 w-20 h-20 glass rounded-full animate-glass-float opacity-30" aria-hidden="true"></div>
          <div className="absolute top-1/3 right-10 w-16 h-16 glass rounded-full animate-glass-float opacity-20" style={{ animationDelay: '2s' }} aria-hidden="true"></div>
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 glass rounded-full animate-glass-float opacity-25" style={{ animationDelay: '4s' }} aria-hidden="true"></div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-t from-white to-accessible-gray-50" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold text-accessible-gray-900 mb-4">
                Accessibility Tools That Empower
              </h2>
              <p className="text-xl text-accessible-gray-600 max-w-2xl mx-auto">
                Choose from our suite of assistive technologies designed with universal access in mind
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Link
                    key={feature.id}
                    to={feature.href}
                    className="feature-card group focus:outline-none focus:ring-4 focus:ring-accessible-blue focus:ring-offset-4"
                    style={{ animationDelay: `${index * 0.2}s` }}
                    aria-describedby={`${feature.id}-description`}
                  >
                    <div className={`w-16 h-16 ${feature.bgGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent 
                        className="w-8 h-8 text-accessible-gray-700" 
                        aria-hidden="true"
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-accessible-gray-900 mb-4 group-hover:text-accessible-blue transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p 
                      id={`${feature.id}-description`}
                      className="text-accessible-gray-600 leading-relaxed text-lg"
                    >
                      {feature.description}
                    </p>
                    
                    <div className="mt-6 flex items-center text-accessible-blue font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Try {feature.title}
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-accessible-blue to-accessible-purple" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Break Down Barriers?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of users who are already experiencing the freedom of accessible communication
            </p>
            <Link
              to="/features"
              className="inline-flex items-center bg-white text-accessible-blue hover:bg-accessible-gray-50 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-4 focus:ring-offset-accessible-blue"
            >
              Start Using Sahaay AI Today
              <Accessibility className="w-6 h-6 ml-2" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-accessible-gray-900 text-white py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Accessibility className="h-8 w-8" aria-hidden="true" />
              <span className="text-xl font-bold">Sahaay AI</span>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-accessible-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accessible-gray-900 rounded"
                aria-label="Follow us on Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-accessible-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accessible-gray-900 rounded"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-accessible-gray-800 text-center text-accessible-gray-400">
            <p>&copy; 2024 Sahaay AI. Making the world more accessible for everyone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
