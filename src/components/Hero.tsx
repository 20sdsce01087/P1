import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div className="lg:w-1/2">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src="/Group 19.jpg"
                alt="Fashion Couple"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2 space-y-8">
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-1">200+</div>
                <div className="text-sm text-gray-600">International Brands</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">2,000+</div>
                <div className="text-sm text-gray-600">High-Quality Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">30,000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>

            {/* Headline and Description */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold leading-tight mb-4">
                You can have anything you want in life if you dress for it.
              </h1>
              <p className="text-gray-600 mb-8">
                Browse through our diverse range of meticulously crafted garments, designed to
                bring out your individuality and cater to your sense of style.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;