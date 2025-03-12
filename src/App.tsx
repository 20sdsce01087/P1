import { Link } from 'react-router-dom';

function App() {
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
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block">200+</span>
                      <span className="block text-primary">2,000+</span>
                      <span className="block">30,000+</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      You can have anything you want in life if you dress for it.
                    </p>
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
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/Group 19.jpg" alt="Fashion model" />
            </div>
          </div>

          {/* Brand Logos */}
          <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-5 gap-8 items-center justify-items-center">
                <img src="/images (1) 1.png" alt="Adidas" className="h-12 object-contain" />
                <img src="/nike.png" alt="Nike" className="h-12 object-contain" />
                <img src="/versace.png" alt="Versace" className="h-12 object-contain" />
                <img src="/Frame 32.png" alt="Calvin Klein" className="h-12 object-contain" />
                <img src="/Frame 33.png" alt="Gucci" className="h-12 object-contain" />
              </div>
            </div>
          </div>

          {/* New Arrivals */}
          <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8">NEW ARRIVALS</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group">
                  <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden relative">
                    <img src="/Frame 34.png" alt="Product" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Gradient Graphic T-shirt</h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">₹299</p>
                </div>
                <div className="group">
                  <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden relative">
                    <img src="/Frame 34-1.png" alt="Product" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Polo with Tipping Details</h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">₹799</p>
                </div>
                <div className="group">
                  <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden relative">
                    <img src="/Frame 38.png" alt="Product" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Black Striped T-shirt</h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">₹245</p>
                </div>
                <div className="group">
                  <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden relative">
                    <img src="/Frame 38-1.png" alt="Product" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Skinny Fit Jeans</h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">₹249</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Selling */}
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
                    <img src="/Frame 60.png" alt="Bestseller" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Courage Graphic T-shirt</h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">₹445</p>
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
              <h2 className="text-2xl font-bold mb-8 text-center">BROWSE BY DRESS STYLE</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative group overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105">
                  <img src="/casual-style.jpg" alt="Casual" className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-white text-2xl font-bold mb-2">Casual</span>
                    <span className="text-white/80 text-sm">Everyday Comfort</span>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105">
                  <img src="/formal-style.jpg" alt="Formal" className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-white text-2xl font-bold mb-2">Formal</span>
                    <span className="text-white/80 text-sm">Professional Excellence</span>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105">
                  <img src="/sports-style.jpg" alt="Party" className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-white text-2xl font-bold mb-2">Party</span>
                    <span className="text-white/80 text-sm">Night Life Ready</span>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105">
                  <img src="/ethnic-style.jpg" alt="Gym" className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-white text-2xl font-bold mb-2">Gym</span>
                    <span className="text-white/80 text-sm">Active Lifestyle</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Happy Customers */}
          <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8 text-center">OUR HAPPY CUSTOMERS</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-600 mb-4">"The quality of their products is amazing. I'm a regular customer now!"</p>
                  <div className="flex items-center">
                    <img src="/customer1.jpg" alt="Customer" className="h-10 w-10 rounded-full" />
                    <div className="ml-3">
                      <h4 className="text-sm font-medium">John D.</h4>
                      <div className="flex text-yellow-400">
                        <span>★★★★★</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add more testimonials */}
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
