import { useState, useRef } from 'react';
import { Image, Upload, Mic, Camera } from 'lucide-react';
import Navigation from '../components/Navigation';
// import UploadForm from "../components/UploadForm";

const SeeForMe = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
      setDescription('');
    };
    reader.readAsDataURL(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      handleImageUpload(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      handleImageUpload(file);
    }
  };


    const analyzeImage = () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const sampleDescription = "This image shows a person sitting at a wooden desk in a bright, modern office space. They are using a silver laptop computer and appear to be focused on their work. There's a white coffee mug on the desk beside the laptop, and natural light is coming through large windows in the background. The person is wearing a blue button-up shirt and has dark hair. The overall atmosphere suggests a productive work environment with clean, minimalist design elements.";
      setDescription(sampleDescription);
      setIsAnalyzing(false);
    }, 3000);
  };
  // const analyzeImage = async () => {
  //   if (!selectedImage || !fileInputRef.current?.files?.[0]) return;
  
  //   setIsAnalyzing(true);
  
  //   const formData = new FormData();
  //   formData.append("file", fileInputRef.current.files[0]);
  
  //   try {
  //     const response = await fetch("http://localhost:8000/describe-image", {
  //       method: "POST",
  //       body: formData,
  //     });
      
  //     if (!response.ok) throw new Error("Image analysis failed");
  
  //     const result = await response.json();
  //     setDescription(result.description);
  
  //     // Optional: Automatically play audio (cross-origin policies may affect this)
  //     const audio = new Audio(`http://localhost:8000/docs/${result.audio_file_path.split('/').pop()}`);
  //     audio.play();
  
  //   } catch (error) {
  //     console.error("Error analyzing image:", error);
  //     alert("Failed to analyze image. Please try again.");
  //   }
  
  //   setIsAnalyzing(false);
  // };
  

  const speakDescription = () => {
    if (description && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(description);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    setDescription('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accessible-purple-light to-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 text-center" aria-labelledby="page-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-accessible-purple rounded-2xl flex items-center justify-center mr-4">
                <Image className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h1 id="page-heading" className="text-4xl sm:text-5xl font-bold text-accessible-gray-900">
                SeeForMe
              </h1>
            </div>
            <p className="text-xl text-accessible-gray-600 leading-relaxed">
              AI-powered image descriptions for visual accessibility
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Image Upload Section */}
            <section aria-labelledby="upload-section">
              <h2 id="upload-section" className="text-2xl font-bold text-accessible-gray-900 mb-6">
                Upload Image
              </h2>
              
              <div className="glass-strong rounded-2xl p-6">
                {!selectedImage ? (
                  <div
                    className={`border-3 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer ${
                      dragActive 
                        ? 'border-accessible-purple bg-accessible-purple-light' 
                        : 'border-accessible-gray-300 hover:border-accessible-purple hover:bg-accessible-purple-light'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    role="button"
                    tabIndex={0}
                    aria-label="Click to upload image or drag and drop"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        fileInputRef.current?.click();
                      }
                    }}
                  >
                    <Upload className="w-16 h-16 mx-auto mb-4 text-accessible-gray-400" aria-hidden="true" />
                    <h3 className="text-xl font-semibold text-accessible-gray-700 mb-2">
                      Upload an Image
                    </h3>
                    <p className="text-accessible-gray-500 mb-4">
                      Drag and drop your image here, or click to browse
                    </p>
                    <p className="text-sm text-accessible-gray-400">
                      Supports: JPG, PNG, GIF (max 10MB)
                    </p>
                    
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      aria-label="Select image file"
                    />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="relative">
                      <img
                        src={selectedImage}
                        alt="Uploaded image for analysis"
                        className="w-full max-h-96 object-contain rounded-xl bg-accessible-gray-100"
                      />
                    </div>
                    
                    <div className="flex gap-3">
                      <button
                        onClick={analyzeImage}
                        disabled={isAnalyzing}
                        className="flex-1 bg-accessible-purple hover:bg-purple-600 disabled:bg-accessible-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-purple-200"
                      >
                        {isAnalyzing ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Analyzing...
                          </span>
                        ) : (
                          'Describe Image'
                        )}
                      </button>
                      
                      <button
                        onClick={clearImage}
                        className="px-4 py-3 bg-accessible-gray-300 hover:bg-accessible-gray-400 text-accessible-gray-700 rounded-xl transition-colors focus:outline-none focus:ring-4 focus:ring-accessible-gray-200"
                        aria-label="Remove image and start over"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Quick Camera Option */}
              <div className="mt-6 glass rounded-2xl p-4">
                <h3 className="text-lg font-semibold text-accessible-gray-900 mb-3">
                  Take Photo
                </h3>
                <button
                  onClick={() => {
                    // This would open camera in a real implementation
                    alert('Camera feature would open here. For demo, please use image upload.');
                  }}
                  className="w-full flex items-center justify-center py-3 px-4 bg-white hover:bg-accessible-gray-50 border-2 border-accessible-gray-300 rounded-xl transition-colors focus:outline-none focus:ring-4 focus:ring-accessible-gray-200"
                >
                  <Camera className="w-5 h-5 mr-2 text-accessible-gray-600" aria-hidden="true" />
                  Use Camera
                </button>
              </div>
            </section>

            {/* Results Section */}
            <section aria-labelledby="results-section">
              <h2 id="results-section" className="text-2xl font-bold text-accessible-gray-900 mb-6">
                Image Description
              </h2>
              
              <div className="glass-strong rounded-2xl p-6">
                {description ? (
                  <div>
                    <div className="bg-white rounded-xl p-6 border-2 border-accessible-gray-200 mb-4">
                      <h3 className="text-lg font-semibold text-accessible-gray-900 mb-3">
                        Description:
                      </h3>
                      <p className="text-accessible-gray-700 leading-relaxed text-base" tabIndex={0}>
                        {description}
                      </p>
                    </div>
                    
                    <button
                      onClick={speakDescription}
                      className="w-full flex items-center justify-center bg-accessible-green hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-green-200"
                      aria-label="Read the image description aloud"
                    >
                      <Mic className="w-5 h-5 mr-2" aria-hidden="true" />
                      Read Description Aloud
                    </button>
                  </div>
                ) : (
                  <div className="min-h-[300px] flex items-center justify-center text-accessible-gray-500">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accessible-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Image className="w-8 h-8" aria-hidden="true" />
                      </div>
                      <p className="text-lg mb-2">No image uploaded yet</p>
                      <p className="text-sm">Upload an image to get a detailed description</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Usage Tips */}
              <div className="mt-6 glass rounded-2xl p-4">
                <h3 className="text-lg font-semibold text-accessible-gray-900 mb-3">
                  💡 Tips for Best Results
                </h3>
                <ul className="space-y-2 text-sm text-accessible-gray-600">
                  <li>• Use clear, well-lit images</li>
                  <li>• Avoid blurry or heavily distorted photos</li>
                  <li>• Images with text work great for document reading</li>
                  <li>• Complex scenes may take longer to analyze</li>
                  <li>• Use the audio feature for hands-free descriptions</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SeeForMe;
