import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <div className="relative bg-black py-12">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ transform: 'translateY(-98%)' }}>
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-12 text-black"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,64L60,64C120,64,240,64,360,69.3C480,75,600,85,720,80C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight leading-tight">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <p className="text-gray-300 mb-6 text-sm">
            Subscribe to our newsletter and get exclusive offers and updates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-0 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 w-full sm:w-72 bg-white text-black rounded-md sm:rounded-r-none focus:outline-none focus:ring-1 focus:ring-white/50 placeholder-gray-500 text-sm"
            />
            <button className="bg-white text-black px-6 py-2 font-medium rounded-md sm:rounded-l-none hover:bg-gray-200 transition-all duration-200 text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ transform: 'translateY(98%)' }}>
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-12 text-black"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0L60,5.3C120,11,240,21,360,26.7C480,32,600,32,720,26.7C840,21,960,11,1080,10.7C1200,11,1320,21,1380,26.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Newsletter;