import { useState } from 'react';
import { Mic, Play, Upload } from 'lucide-react';
import Navigation from '../components/Navigation';

const TalkBuddy = () => {
  const [message, setMessage] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('default');
  const [recentMessages, setRecentMessages] = useState([
    'Hello, how can I help you today?',
    'Thank you for your assistance',
    'I would like to order lunch please',
    'Good morning everyone'
  ]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const voiceOptions = [
    { id: 'default', name: 'Default Voice', description: 'Standard clear voice' },
    { id: 'female', name: 'Sarah', description: 'Friendly female voice' },
    { id: 'male', name: 'David', description: 'Professional male voice' },
    { id: 'young', name: 'Alex', description: 'Youthful and energetic' }
  ];

  const speakMessage = (text: string = message) => {
    if (!text.trim()) return;
    
    if ('speechSynthesis' in window) {
      // Stop any current speech
      speechSynthesis.cancel();
      
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Configure voice based on selection
      const voices = speechSynthesis.getVoices();
      if (selectedVoice === 'female') {
        const femaleVoice = voices.find(voice => voice.name.includes('Female') || voice.name.includes('Samantha'));
        if (femaleVoice) utterance.voice = femaleVoice;
      } else if (selectedVoice === 'male') {
        const maleVoice = voices.find(voice => voice.name.includes('Male') || voice.name.includes('Alex'));
        if (maleVoice) utterance.voice = maleVoice;
      }
      
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      
      utterance.onerror = () => {
        setIsSpeaking(false);
      };
      
      speechSynthesis.speak(utterance);
      
      // Add to recent messages if it's a new message
      if (text === message && text.trim() && !recentMessages.includes(text.trim())) {
        setRecentMessages(prev => [text.trim(), ...prev.slice(0, 4)]);
        setMessage('');
      }
    }
  };

  const stopSpeaking = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const quickPhrases = [
    'Hello, how are you?',
    'Thank you very much',
    'Excuse me',
    'Please help me',
    'I need assistance',
    'Have a great day!'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-accessible-green-light to-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 text-center" aria-labelledby="page-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-accessible-green rounded-2xl flex items-center justify-center mr-4">
                <Mic className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h1 id="page-heading" className="text-4xl sm:text-5xl font-bold text-accessible-gray-900">
                TalkBuddy
              </h1>
            </div>
            <p className="text-xl text-accessible-gray-600 leading-relaxed">
              Your personal text-to-speech assistant for clear communication
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          
          {/* Main Input Section */}
          <section className="glass-strong rounded-2xl p-8 mb-8" aria-labelledby="input-section">
            <h2 id="input-section" className="text-2xl font-bold text-accessible-gray-900 mb-6">
              Type Your Message
            </h2>
            
            <div className="space-y-6">
              {/* Text Input */}
              <div>
                <label htmlFor="message-input" className="block text-sm font-medium text-accessible-gray-700 mb-2">
                  Message to speak
                </label>
                <textarea
                  id="message-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type what you want to say here..."
                  className="w-full h-32 p-4 border-2 border-accessible-gray-300 rounded-xl resize-none text-lg focus:outline-none focus:ring-4 focus:ring-accessible-green focus:border-accessible-green transition-all"
                  aria-describedby="message-help"
                />
                <p id="message-help" className="mt-2 text-sm text-accessible-gray-500">
                  Enter your message and choose a voice, then click Speak to hear it aloud
                </p>
              </div>

              {/* Voice Selection */}
              <div>
                <label htmlFor="voice-select" className="block text-sm font-medium text-accessible-gray-700 mb-2">
                  Choose Voice
                </label>
                <select
                  id="voice-select"
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                  className="w-full p-3 border-2 border-accessible-gray-300 rounded-xl text-lg focus:outline-none focus:ring-4 focus:ring-accessible-green focus:border-accessible-green transition-all"
                  aria-describedby="voice-help"
                >
                  {voiceOptions.map(voice => (
                    <option key={voice.id} value={voice.id}>
                      {voice.name} - {voice.description}
                    </option>
                  ))}
                </select>
                <p id="voice-help" className="mt-2 text-sm text-accessible-gray-500">
                  Select the voice that sounds best for your needs
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => speakMessage()}
                  disabled={!message.trim() || isSpeaking}
                  className="flex-1 bg-accessible-green hover:bg-green-600 disabled:bg-accessible-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-200 flex items-center justify-center"
                  aria-describedby="speak-button-description"
                >
                  <Mic className="w-5 h-5 mr-2" aria-hidden="true" />
                  {isSpeaking ? 'Speaking...' : 'Speak Message'}
                </button>
                
                {isSpeaking && (
                  <button
                    onClick={stopSpeaking}
                    className="px-6 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-red-200"
                  >
                    Stop
                  </button>
                )}
                
                <span id="speak-button-description" className="sr-only">
                  Convert your typed message to speech using the selected voice
                </span>
              </div>
            </div>
          </section>

          {/* Quick Phrases */}
          <section className="glass rounded-2xl p-6 mb-8" aria-labelledby="quick-phrases">
            <h3 id="quick-phrases" className="text-xl font-semibold text-accessible-gray-900 mb-4">
              Quick Phrases
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" role="list" aria-label="Quick phrase buttons">
              {quickPhrases.map((phrase, index) => (
                <button
                  key={index}
                  onClick={() => speakMessage(phrase)}
                  className="text-left p-3 bg-white hover:bg-accessible-green-light border border-accessible-gray-200 rounded-lg transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accessible-green focus:ring-offset-2"
                  role="listitem"
                  aria-label={`Speak quick phrase: ${phrase}`}
                >
                  <span className="text-accessible-gray-700">{phrase}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Recent Messages */}
          <section className="glass rounded-2xl p-6" aria-labelledby="recent-messages">
            <h3 id="recent-messages" className="text-xl font-semibold text-accessible-gray-900 mb-4">
              Recent Messages
            </h3>
            <div className="space-y-3" role="list" aria-label="Recent messages with play buttons">
              {recentMessages.map((msg, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between bg-white p-4 rounded-lg border border-accessible-gray-200 hover:shadow-md transition-shadow group"
                  role="listitem"
                >
                  <p className="text-accessible-gray-700 flex-grow mr-4">{msg}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => speakMessage(msg)}
                      className="flex-shrink-0 p-2 text-accessible-green hover:bg-accessible-green-light rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accessible-green focus:ring-offset-2 group-hover:scale-110"
                      aria-label={`Speak message: ${msg}`}
                    >
                      <Play className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <button
                      onClick={() => setMessage(msg)}
                      className="flex-shrink-0 p-2 text-accessible-gray-500 hover:bg-accessible-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accessible-gray-400 focus:ring-offset-2"
                      aria-label={`Copy message to input: ${msg}`}
                    >
                      <Upload className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TalkBuddy;
