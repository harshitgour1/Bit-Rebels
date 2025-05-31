import { useState } from 'react';
import { Bell, Accessibility, Search } from 'lucide-react';
import Navigation from '../components/Navigation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const faqItems = [
    {
      question: 'How accurate is the sign language recognition?',
      answer: 'Our Sign2Speak tool achieves 95%+ accuracy for common ASL signs in good lighting conditions. We continuously improve our AI models based on user feedback.'
    },
    {
      question: 'Can I use TalkBuddy offline?',
      answer: 'TalkBuddy requires an internet connection for the best voice quality and features. However, basic text-to-speech functionality works offline using your device\'s built-in voices.'
    },
    {
      question: 'What image formats does SeeForMe support?',
      answer: 'SeeForMe accepts JPG, PNG, GIF, and WebP formats up to 10MB in size. For best results, use clear, well-lit images with minimal blur.'
    },
    {
      question: 'Is Sahaay AI free to use?',
      answer: 'Yes! Sahaay AI is completely free to use. We believe accessibility tools should be available to everyone who needs them.'
    },
    {
      question: 'Can I suggest new features?',
      answer: 'Absolutely! We love hearing from our users. Use the contact form below or reach out to our support team with your ideas and feedback.'
    }
  ];

  const supportResources = [
    {
      title: 'User Guide',
      description: 'Complete guide to using all Sahaay AI features',
      icon: Search
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for each tool',
      icon: Accessibility
    },
    {
      title: 'Accessibility Resources',
      description: 'Additional resources and community support',
      icon: Bell
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-accessible-gray-50 to-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 text-center" aria-labelledby="contact-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 id="contact-heading" className="text-4xl sm:text-5xl font-bold text-accessible-gray-900 mb-6 animate-fade-in">
              Contact & Support
            </h1>
            <p className="text-xl text-accessible-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We're here to help you get the most out of Sahaay AI. Reach out with questions, feedback, or suggestions.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <section aria-labelledby="contact-form-heading">
              <div className="glass-strong rounded-2xl p-8">
                <h2 id="contact-form-heading" className="text-2xl font-bold text-accessible-gray-900 mb-6">
                  Get in Touch
                </h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl" role="alert">
                    <p className="text-green-800 font-medium">
                      ✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-accessible-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border-2 border-accessible-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-accessible-blue focus:border-accessible-blue transition-all"
                      aria-describedby="name-help"
                    />
                    <p id="name-help" className="mt-1 text-sm text-accessible-gray-500">
                      Enter your full name so we know how to address you
                    </p>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-accessible-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border-2 border-accessible-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-accessible-blue focus:border-accessible-blue transition-all"
                      aria-describedby="email-help"
                    />
                    <p id="email-help" className="mt-1 text-sm text-accessible-gray-500">
                      We'll use this to respond to your message
                    </p>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-accessible-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border-2 border-accessible-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-accessible-blue focus:border-accessible-blue transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="feature-request">Feature Request</option>
                      <option value="accessibility-feedback">Accessibility Feedback</option>
                      <option value="bug-report">Bug Report</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-accessible-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full p-3 border-2 border-accessible-gray-300 rounded-xl resize-none focus:outline-none focus:ring-4 focus:ring-accessible-blue focus:border-accessible-blue transition-all"
                      placeholder="Please describe your question, feedback, or how we can help you..."
                      aria-describedby="message-help"
                    />
                    <p id="message-help" className="mt-1 text-sm text-accessible-gray-500">
                      Provide as much detail as possible to help us assist you better
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accessible-blue hover:bg-blue-600 disabled:bg-accessible-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </section>

            {/* Support Resources & FAQ */}
            <div className="space-y-8">
              
              {/* Emergency Help */}
              <section className="glass-strong rounded-2xl p-6 bg-gradient-to-r from-accessible-orange-light to-yellow-50 border-2 border-accessible-orange" aria-labelledby="emergency-help">
                <h2 id="emergency-help" className="text-xl font-bold text-accessible-gray-900 mb-4">
                  🆘 Need Immediate Help?
                </h2>
                <p className="text-accessible-gray-700 mb-4">
                  If you're experiencing technical difficulties and need immediate assistance using our accessibility tools:
                </p>
                <button
                  onClick={() => alert('This would open a live chat or emergency support system')}
                  className="w-full bg-accessible-orange hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-yellow-200"
                >
                  Get Immediate Help
                </button>
              </section>

              {/* Support Resources */}
              <section aria-labelledby="support-resources">
                <h2 id="support-resources" className="text-2xl font-bold text-accessible-gray-900 mb-6">
                  Help Center
                </h2>
                <div className="space-y-4">
                  {supportResources.map((resource, index) => {
                    const IconComponent = resource.icon;
                    return (
                      <div key={index} className="glass rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-accessible-blue-light rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-accessible-blue" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-accessible-gray-900 mb-1">
                              {resource.title}
                            </h3>
                            <p className="text-sm text-accessible-gray-600">
                              {resource.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* FAQ */}
              <section aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="text-2xl font-bold text-accessible-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <details key={index} className="glass rounded-xl p-4 group">
                      <summary className="font-semibold text-accessible-gray-900 cursor-pointer list-none flex items-center justify-between">
                        <span>{item.question}</span>
                        <svg 
                          className="w-5 h-5 text-accessible-gray-500 group-open:rotate-180 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-3 text-accessible-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
