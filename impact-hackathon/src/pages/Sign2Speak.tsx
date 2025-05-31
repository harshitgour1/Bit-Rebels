import { useState, useRef } from 'react';
import { Camera, Play, Mic } from 'lucide-react';
import Navigation from '../components/Navigation';

const Sign2Speak = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [recentTranscriptions, setRecentTranscriptions] = useState([
    'Hello, how are you today?',
    'Thank you for your help',
    'Good morning everyone'
  ]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startRecognition = async () => {
    setIsRecording(true);
    
    // Simulate camera access
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      // Simulate sign recognition after 3 seconds
      setTimeout(() => {
        const simulatedText = "Hello, nice to meet you!";
        setRecognizedText(simulatedText);
        setRecentTranscriptions(prev => [simulatedText, ...prev.slice(0, 4)]);
      }, 3000);
      
    } catch (error) {
      console.error('Camera access denied:', error);
      // Fallback for demo
      setTimeout(() => {
        const simulatedText = "Camera demo - Hello world!";
        setRecognizedText(simulatedText);
        setRecentTranscriptions(prev => [simulatedText, ...prev.slice(0, 4)]);
      }, 2000);
    }
  };

  const stopRecognition = () => {
    setIsRecording(false);
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accessible-blue-light to-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 text-center" aria-labelledby="page-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-accessible-blue rounded-2xl flex items-center justify-center mr-4">
                <Camera className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h1 id="page-heading" className="text-4xl sm:text-5xl font-bold text-accessible-gray-900">
                Sign2Speak
              </h1>
            </div>
            <p className="text-xl text-accessible-gray-600 leading-relaxed">
              Real-time sign language recognition that converts your gestures into text and speech
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Camera Section */}
            <section aria-labelledby="camera-section">
              <h2 id="camera-section" className="text-2xl font-bold text-accessible-gray-900 mb-6">
                Camera Feed
              </h2>
              
              <div className="glass-strong rounded-2xl p-6">
                <div className="relative aspect-video bg-accessible-gray-900 rounded-xl mb-6 overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                    aria-label="Live camera feed for sign language recognition"
                  />
                  
                  {!isRecording && (
                    <div className="absolute inset-0 flex items-center justify-center bg-accessible-gray-800 bg-opacity-75">
                      <div className="text-center text-white">
                        <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" aria-hidden="true" />
                        <p className="text-lg">Camera will activate when you start recognition</p>
                      </div>
                    </div>
                  )}
                  
                  {isRecording && (
                    <div className="absolute top-4 right-4 flex items-center bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" aria-hidden="true"></div>
                      Recording
                    </div>
                  )}
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={isRecording ? stopRecognition : startRecognition}
                    className={`flex-1 font-semibold py-4 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                      isRecording
                        ? 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-200'
                        : 'bg-accessible-blue hover:bg-blue-600 text-white focus:ring-blue-200'
                    }`}
                    aria-describedby="recognition-button-description"
                  >
                    {isRecording ? 'Stop Recognition' : 'Start Sign Recognition'}
                  </button>
                  <span id="recognition-button-description" className="sr-only">
                    {isRecording 
                      ? 'Stop the sign language recognition and camera feed' 
                      : 'Begin sign language recognition using your camera'
                    }
                  </span>
                </div>
                
                <div className="mt-4 text-sm text-accessible-gray-600 bg-accessible-gray-50 p-4 rounded-lg">
                  <p className="font-medium mb-2">📋 Tips for best results:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Ensure good lighting on your hands</li>
                    <li>• Keep hands within the camera frame</li>
                    <li>• Sign at a comfortable, clear pace</li>
                    <li>• Position camera at chest level</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Recognition Results */}
            <section aria-labelledby="results-section">
              <h2 id="results-section" className="text-2xl font-bold text-accessible-gray-900 mb-6">
                Live Transcription
              </h2>
              
              <div className="glass-strong rounded-2xl p-6 mb-6">
                <div className="min-h-[200px] bg-white rounded-xl p-6 border-2 border-accessible-gray-200">
                  {recognizedText ? (
                    <div>
                      <p className="text-lg text-accessible-gray-900 leading-relaxed mb-4">
                        {recognizedText}
                      </p>
                      <button
                        onClick={() => speakText(recognizedText)}
                        className="flex items-center bg-accessible-green text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-200"
                        aria-label={`Speak the recognized text: ${recognizedText}`}
                      >
                        <Mic className="w-4 h-4 mr-2" aria-hidden="true" />
                        Speak
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-accessible-gray-500">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-accessible-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Camera className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <p>Recognized signs will appear here...</p>
                        <p className="text-sm mt-2">Start recognition to begin translating sign language</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Recent Transcriptions */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-accessible-gray-900 mb-4">
                  Recent Transcriptions
                </h3>
                <div className="space-y-3" role="list" aria-label="List of recent sign language transcriptions">
                  {recentTranscriptions.map((text, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between bg-white p-4 rounded-lg border border-accessible-gray-200 hover:shadow-md transition-shadow"
                      role="listitem"
                    >
                      <p className="text-accessible-gray-700 flex-grow mr-4">{text}</p>
                      <button
                        onClick={() => speakText(text)}
                        className="flex-shrink-0 p-2 text-accessible-blue hover:bg-accessible-blue-light rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accessible-blue focus:ring-offset-2"
                        aria-label={`Speak: ${text}`}
                      >
                        <Play className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sign2Speak;
