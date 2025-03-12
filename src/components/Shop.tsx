import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
}

const Shop: React.FC = () => {
  const [sortBy, setSortBy] = React.useState('Most Popular');
  const [priceRange, setPriceRange] = React.useState([0, 1200]);
  const [selectedSize, setSelectedSize] = React.useState<string[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      price: 545,
      image: '/Frame 34.png'
    },
    {
      id: 2,
      name: 'Polo with Tipping Details',
      price: 680,
      image: '/Frame 34-1.png'
    },
    {
      id: 3,
      name: 'Black Striped T-shirt',
      price: 520,
      image: '/Frame 38.png'
    },
    {
      id: 4,
      name: 'Skinny Fit Jeans',
      price: 740,
      image: '/Frame 38-1.png'
    },
    {
      id: 5,
      name: 'Checkered Shirt',
      price: 580,
      image: '/Frame 64.png'
    },

    {
      id: 7,
      name: 'Vertical Striped Shirt',
      price: 512,
      image: '/bestseller1.jpg'
    },
    {
      id: 8,
      name: 'Courage Graphic T-shirt',
      price: 445,
      image: '/Frame 63.png'
    },
    {
      id: 9,
      name: 'Loose Fit Bermuda Shorts',
      price: 800,
      image: '/casual-style.jpg'
    }
  ];

  const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];
  const dressStyles = ['Casual', 'Formal', 'Party', 'Gym'];

  const toggleSize = (size: string) => {
    setSelectedSize(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        {/* Filters */}
        <div className="w-64 flex-shrink-0">
          <h2 className="font-medium mb-4">Filters</h2>
          
          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Categories</h3>
            <div className="space-y-2">
              <button className="text-sm text-gray-600 hover:text-black block">T-shirts</button>
              <button className="text-sm text-gray-600 hover:text-black block">Shirts</button>
              <button className="text-sm text-gray-600 hover:text-black block">Shorts</button>
              <button className="text-sm text-gray-600 hover:text-black block">Hoodie</button>
              <button className="text-sm text-gray-600 hover:text-black block">Jeans</button>
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Price</h3>
            <input
              type="range"
              min="0"
              max="1200"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>

          {/* Size */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Size</h3>
            <div className="grid grid-cols-2 gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`text-sm px-3 py-1 border rounded-md ${selectedSize.includes(size) ? 'bg-black text-white' : 'text-gray-600 hover:border-black'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Dress Style */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Dress Style</h3>
            <div className="space-y-2">
              {dressStyles.map(style => (
                <button key={style} className="text-sm text-gray-600 hover:text-black block">
                  {style}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">
            Apply Filter
          </button>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Casual</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border-none focus:ring-0"
              >
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="group relative">
                <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 transition-opacity duration-300">
                  <div className="relative w-full h-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-center object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    ₹ {product.price}
                    {product.originalPrice && (
                      <span className="ml-2 line-through text-gray-400">
                        ₹ {product.originalPrice}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;