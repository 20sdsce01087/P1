import React from 'react';
import { Link } from 'react-router-dom';

interface TopSellingProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductSelection: React.FC = () => {
  const topSellingProducts: TopSellingProduct[] = [
    {
      id: 1,
      name: 'Vertical Striped Shirt',
      price: 259,
      image: '/Frame 34.png'
    },
    {
      id: 2,
      name: 'College Graphic T-shirt',
      price: 299,
      image: '/Frame 34-1.png'
    },
    {
      id: 3,
      name: 'Loose Fit Bermuda Shorts',
      price: 469,
      image: '/Frame 38.png'
    },
    {
      id: 4,
      name: 'Fitted Skinny Jeans',
      price: 599,
      image: '/Frame 38-1.png'
    }
  ];

  const dressStyles = [
    { name: 'Casual', image: '/casual-style.jpg' },
    { name: 'Formal', image: '/formal-style.jpg' },
    { name: 'Party', image: '/ethnic-style.jpg' },
    { name: 'Gym', image: '/sports-style.jpg' }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'The quality was far beyond my expectations, and the fit is perfect! The shopping experience was seamless.',
      rating: 5
    },
    {
      name: 'Alex K.',
      text: 'I'm really satisfied with the clothing and the fast delivery. Will definitely shop here again!',
      rating: 5
    },
    {
      name: 'James L.',
      text: 'Great selection of styles and the customer service was exceptional. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Top Selling Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Top Selling</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {topSellingProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">₹ {product.price}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Browse by Dress Style */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Browse by Dress Style</h2>
        <div className="grid grid-cols-2 gap-4">
          {dressStyles.map(style => (
            <Link to={`/shop?style=${style.name.toLowerCase()}`} key={style.name} className="relative group overflow-hidden rounded-lg">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">{style.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Customer Testimonials */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Our Happy Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-medium text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSelection;