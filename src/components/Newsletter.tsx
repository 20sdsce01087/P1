import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <div className="relative bg-black py-24">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ transform: 'translateY(-98%)' }}>
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-20 text-black"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
            STAY UPTO DATE ABOUT<br />OUR LATEST OFFERS
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Subscribe to our newsletter and get exclusive offers, new arrival updates, and more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-4 w-full sm:w-96 bg-white text-black rounded-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-500 text-base"
            />
            <button className="bg-white text-black px-8 py-4 font-semibold rounded-lg sm:rounded-l-none hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-base">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ transform: 'translateY(98%)' }}>
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-20 text-black"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,234.7C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Newsletter;