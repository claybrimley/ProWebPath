import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const thumbnailRef = useRef(null);
  const [selectedBg, setSelectedBg] = useState(0);

  // Background images from vision expert agent
  const backgroundImages = [
    "https://images.unsplash.com/photo-1674027444485-cec3da58eef4",
    "https://images.unsplash.com/photo-1496096265110-f83ad7f96608",
    "https://images.unsplash.com/photo-1495592822108-9e6261896da8"
  ];

  // Function to download the thumbnail
  const downloadThumbnail = () => {
    const element = document.createElement("a");
    // Using html2canvas would be better, but for simplicity
    // we'll just provide a link to the background image
    element.href = backgroundImages[selectedBg];
    element.download = "mcp-thumbnail.jpg";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-400">
          YouTube Thumbnail Generator
        </h1>
        
        {/* Thumbnail Preview */}
        <div className="mb-8">
          <div 
            ref={thumbnailRef}
            className="relative w-full max-w-4xl mx-auto aspect-video bg-black overflow-hidden rounded-lg shadow-2xl"
            style={{ maxWidth: "1280px", height: "auto" }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${backgroundImages[selectedBg]})`,
                filter: "brightness(0.7)",
              }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
              {/* Channel Branding */}
              <div className="absolute top-5 left-5 bg-blue-600 py-1 px-3 rounded-md text-sm font-bold">
                CraftedCodeJoy
              </div>
              
              {/* Main Title */}
              <h1 className="text-5xl sm:text-6xl font-black mb-2 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                  API New Age:
                </span>
              </h1>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
                Mastering <span className="text-green-400">Model Context Protocol</span>
              </h2>
              
              {/* Subtitle */}
              <div className="text-xl sm:text-2xl font-medium mb-6 text-gray-200">
                Revolutionizing AI Model Integration & Automation
              </div>
              
              {/* Highlights */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm sm:text-base">
                <div className="bg-blue-900/60 text-blue-200 px-3 py-2 rounded-lg flex items-center">
                  <span className="mr-2 text-blue-400">✓</span> Solve AI resource access
                </div>
                <div className="bg-purple-900/60 text-purple-200 px-3 py-2 rounded-lg flex items-center">
                  <span className="mr-2 text-purple-400">✓</span> Standardize AI communication
                </div>
                <div className="bg-green-900/60 text-green-200 px-3 py-2 rounded-lg flex items-center">
                  <span className="mr-2 text-green-400">✓</span> Boost productivity
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Thumbnail Options</h2>
          
          {/* Background Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Background</h3>
            <div className="grid grid-cols-3 gap-3">
              {backgroundImages.map((img, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer h-20 rounded overflow-hidden border-2 ${
                    selectedBg === index ? 'border-blue-500' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedBg(index)}
                >
                  <img 
                    src={img} 
                    alt={`Background option ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Download Button */}
          <button
            onClick={downloadThumbnail}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:from-blue-600 hover:to-purple-700 hover:shadow-lg"
          >
            Download Thumbnail
          </button>
          
          <p className="mt-4 text-xs text-gray-400 text-center">
            For best results, take a screenshot of the thumbnail preview above.
            The download button provides the background image only.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;