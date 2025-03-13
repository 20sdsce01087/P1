import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const [autoSlide, setAutoSlide] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    let slideTimer: number;
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

          {/* Rest of the component */}
          <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8">TOP SELLING</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group bg-white p-4 rounded-lg">
                  <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden relative">
                    <img src="/bestseller1.jpg" alt="Bestseller" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Vertical Striped Shirt</h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">₹259</p>
                </div>
                <div className="group bg-white p-4 rounded-lg">
                  <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden relative">
                    <img src="/Frame 63.png" alt="Bestseller" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Loose Fit Bermuda Shorts</h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">₹800</p>
                </div>
                <div className="group bg-white p-4 rounded-lg">
                  <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden relative">
                    <img src="/Frame 63.png" alt="Bestseller" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Loose Fit Bermuda Shorts</h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">₹800</p>
                </div>
                <div className="group bg-white p-4 rounded-lg">
                  <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden relative">
                    <img src="/Frame 64.png" alt="Bestseller" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Checkered Shirt</h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">₹580</p>
                </div>
              </div>
            </div>
          </div>

          {/* Browse by Style */}
          <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-12 text-center tracking-tight">BROWSE BY dress STYLE</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg">
                  <img src="/casual-style.jpg" alt="Casual" className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h3 className="text-3xl font-bold mb-3">Casual</h3>
                    <p className="text-lg font-medium text-white/90">Everyday Comfort</p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg">
                  <img src="/formal-style.jpg" alt="Formal" className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h3 className="text-3xl font-bold mb-3">Formal</h3>
                    <p className="text-lg font-medium text-white/90">Professional Excellence</p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg">
                  <img src="/sports-style.jpg" alt="Party" className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h3 className="text-3xl font-bold mb-3">Party</h3>
                    <p className="text-lg font-medium text-white/90">Night Life Ready</p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg">
                  <img src="/ethnic-style.jpg" alt="Gym" className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h3 className="text-3xl font-bold mb-3">Gym</h3>
                    <p className="text-lg font-medium text-white/90">Active Lifestyle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Happy Customers */}
          <div className="bg-gray-50 py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8 text-center">OUR HAPPY CUSTOMERS</h2>
              <div className="relative">
                <div 
                  className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar transition-transform duration-500 ease-in-out" 
                  style={{ 
                    transform: `translateX(-${slideIndex * 100}%)`,
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none' 
                  }}
                  onMouseEnter={() => setAutoSlide(false)}
                  onMouseLeave={() => setAutoSlide(true)}
                >
                  <div className="flex-none w-full md:w-1/3 px-4 snap-center">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                          <img src="/Group 19.jpg" alt="Sarah M." className="w-full h-full object-cover" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-medium text-gray-900">Sarah Mitchell</h3>
                          <p className="text-sm text-gray-500">Fashion Enthusiast</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">"The quality of their clothes is exceptional! I've been shopping here for months, and every piece I've bought has exceeded my expectations. The customer service is also top-notch."</p>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex-none w-full md:w-1/3 px-4 snap-center">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-semibold">
                          <span>RK</span>
                        </div>
                        <div className="ml-4">
                          <h3 className="font-medium text-gray-900">Raj Kumar</h3>
                          <p className="text-sm text-gray-500">Regular Customer</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">"Quick delivery and amazing collection! I love how they keep updating their inventory with the latest trends. The fit is always perfect, and the prices are reasonable."</p>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex-none w-full md:w-1/3 px-4 snap-center">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-semibold">
                          <span>AP</span>
                        </div>
                        <div className="ml-4">
                          <h3 className="font-medium text-gray-900">Aisha Patel</h3>
                          <p className="text-sm text-gray-500">Style Blogger</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">"As a fashion blogger, I'm very particular about where I shop. QuickCart has become my go-to destination for trendy outfits. Their collection is always on point!"</p>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-6 space-x-2">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setSlideIndex(index)}
                      className={`h-2 w-2 rounded-full transition-colors ${slideIndex === index ? 'bg-black' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {[1, 2, 3, 4].map(id => (
    <div key={id} className="group relative">
      <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={`/related-product${id}.jpg`}
            alt={`Related product ${id}`}
            className="w-full h-full object-center object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm text-gray-700">Related Product {id}</h3>
        <p className="mt-1 text-sm text-gray-500">₹ 220</p>
      </div>
    </div>
  ))}
</div>
