import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About QuickCart</h1>
          <p className="text-xl text-gray-600">Your Ultimate Fashion Destination</p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At QuickCart, we believe that fashion is more than just clothing – it's a form of self-expression 
            and confidence. Our mission is to provide high-quality, trendy fashion that empowers individuals 
            to express their unique style while maintaining affordability and sustainability.
          </p>
        </div>

        {/* Company History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2020, QuickCart started as a small boutique in Rajkot, India. Through our commitment 
              to quality and customer satisfaction, we've grown into a leading online fashion destination. 
              Our journey has been marked by continuous innovation and a deep understanding of our customers' needs.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <ul className="text-gray-600 space-y-4">
              <li>• Quality: We source only the finest materials and partner with trusted manufacturers</li>
              <li>• Sustainability: Committed to reducing our environmental impact</li>
              <li>• Innovation: Constantly evolving to meet changing fashion trends</li>
              <li>• Customer Focus: Your satisfaction is our top priority</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <img
                src="/team-member1.jpg"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <img
                src="/team-member2.jpg"
                alt="Creative Director"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">Jane Smith</h3>
              <p className="text-gray-600">Creative Director</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <img
                src="/team-member3.jpg"
                alt="Head of Design"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">Mike Johnson</h3>
              <p className="text-gray-600">Head of Design</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <p className="text-gray-600">Products</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-gray-600">Brand Partners</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
              <p className="text-gray-600">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;