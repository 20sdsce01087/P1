import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <div className="bg-black py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
          <p className="text-gray-400 mb-8">Subscribe to our newsletter and get exclusive offers, new arrival updates, and more.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-3 w-full sm:w-96 bg-white text-black rounded-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-500"
            />
            <button className="bg-white text-black px-8 py-3 font-medium rounded-md sm:rounded-l-none hover:bg-gray-200 transition duration-300 transform hover:translate-y-[-2px]">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;