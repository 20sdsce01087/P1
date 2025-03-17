import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const [autoSlide, setAutoSlide] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    let slideTimer;
    if (autoSlide) {
      slideTimer = window.setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % 2);
      }, 3000);
    }
    return () => clearInterval(slideTimer);
  }, [autoSlide]);

  const newArrivals = [
    { id: 1, name: 'Gradient Graphic T-shirt', price: 299, image: '/Frame 34.png' },
    { id: 2, name: 'Polo with Tipping Details', price: 799, image: '/Frame 34-1.png' },
    { id: 3, name: 'Black Striped T-shirt', price: 245, image: '/Frame 38.png' },
    { id: 4, name: 'Skinny Fit Jeans', price: 249, image: '/Frame 38-1.png' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {/* Hero Section */}
          <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 px-4 sm:px-6 lg:px-8">
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <div className="flex flex-col space-y-4 mb-8">
                      <div className="text-gray-600">International Brands</div>
                      <div className="text-4xl font-bold">200+</div>
                      <div className="text-gray-600">High-Quality Products</div>
                      <div className="text-4xl font-bold">2,000+</div>
                      <div className="text-gray-600">Happy Customers</div>
                      <div className="text-4xl font-bold">30,000+</div>
                    </div>
                    <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                      You can have anything you want in life if you dress for it.
                    </h1>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <Link to="/shop" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 md:py-4 md:text-lg md:px-10">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>

          {/* Brand Logos */}
          <div className="bg-white py-15">
            <div className="w-full mx-auto px-0">
              <div className="grid grid-cols-9 gap-0 items-center justify-items-center w-full">
                <img src="/Group 19.jpg" alt="Brand logos" className="h-22 object-cover col-span-9 w-full object-center" />
              </div>
            </div>
          </div>

          {/* New Arrivals */}
          <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8 text-center">NEW ARRIVALS</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {newArrivals.map(product => (
                  <div 
                    key={product.id} 
                    className="group cursor-pointer" 
                    onClick={() => handleProductClick(product.id)}
                  >
                    <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-sm font-medium text-gray-900">₹{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;