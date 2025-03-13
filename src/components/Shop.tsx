import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  style: string;
  sizes: string[];
}

const Shop: React.FC = () => {
  const [sortBy, setSortBy] = React.useState('Most Popular');
  const [priceRange, setPriceRange] = React.useState([0, 1200]);
  const [selectedSize, setSelectedSize] = React.useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('');
  const [selectedStyle, setSelectedStyle] = React.useState<string>('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 9;

  const allProducts: Product[] = [
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      price: 545,
      image: '/Frame 34.png',
      category: 'T-shirts',
      style: 'Casual',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 2,
      name: 'Polo with Tipping Details',
      price: 680,
      image: '/Frame 34-1.png',
      category: 'T-shirts',
      style: 'Casual',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 3,
      name: 'Black Striped T-shirt',
      price: 520,
      image: '/Frame 38.png',
      category: 'T-shirts',
      style: 'Casual',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 4,
      name: 'Skinny Fit Jeans',
      price: 740,
      image: '/Frame 38-1.png',
      category: 'Jeans',
      style: 'Casual',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 5,
      name: 'Checkered Shirt',
      price: 580,
      image: '/new image/faith-yarn-hgtWvsq5e2c-unsplash.jpg',
      category: 'Shirts',
      style: 'Casual',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 6,
      name: 'Urban Fashion Wear',
      price: 890,
      image: '/new image/alex-haigh-fEt6Wd4t4j0-unsplash.jpg',
      category: 'T-shirts',
      style: 'Party',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 7,
      name: 'Vertical Striped Shirt',
      price: 512,
      image: '/bestseller1.jpg',
      category: 'Shirts',
      style: 'Formal',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 8,
      name: 'Casual Wear Collection',
      price: 445,
      image: '/Frame 63.png',
      category: 'T-shirts',
      style: 'Casual',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 9,
      name: 'Summer Collection',
      price: 800,
      image: '/casual-style.jpg',
      category: 'Shorts',
      style: 'Casual',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 10,
      name: 'Urban Street Style',
      price: 890,
      image: '/dom-hill-nimElTcTNyY-unsplash.jpg',
      category: 'Hoodie',
      style: 'Casual',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 11,
      name: 'Classic Denim Jacket',
      price: 1100,
      image: '/christian-bolt-VW5VjskNXZ8-unsplash.jpg',
      category: 'Jeans',
      style: 'Casual',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 12,
      name: 'Premium Cotton Blazer',
      price: 1200,
      image: '/formal-style.jpg',
      category: 'Shirts',
      style: 'Formal',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 13,
      name: 'Traditional Ethnic Wear',
      price: 950,
      image: '/ethnic-style.jpg',
      category: 'Shirts',
      style: 'Party',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 14,
      name: 'Sports Collection',
      price: 780,
      image: '/sports-style.jpg',
      category: 'T-shirts',
      style: 'Gym',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 15,
      name: 'Casual Street Wear',
      price: 670,
      image: '/new image/haryo-setyadi-acn5ERAeSb4-unsplash.jpg',
      category: 'Hoodie',
      style: 'Casual',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 16,
      name: 'Modern Fashion Collection',
      price: 920,
      image: '/new image/kate-skumen-PJRabkuH3_Q-unsplash.jpg',
      category: 'Shirts',
      style: 'Party',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 17,
      name: 'Contemporary Style',
      price: 850,
      image: '/new image/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.jpg',
      category: 'T-shirts',
      style: 'Party',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 18,
      name: 'Urban Collection',
      price: 790,
      image: '/new image/meysam-jarahkar-NMYG69BG_Jg-unsplash.jpg',
      category: 'Hoodie',
      style: 'Casual',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 19,
      name: 'Street Fashion',
      price: 680,
      image: '/new image/rock-staar-2XcbGfYShfk-unsplash.jpg',
      category: 'T-shirts',
      style: 'Casual',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 20,
      name: 'Fashion Forward',
      price: 920,
      image: '/felipe-galvan-AhfrA5VQNpM-unsplash.jpg',
      category: 'Shirts',
      style: 'Party',
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
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
    setCurrentPage(1);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(prev => prev === category ? '' : category);
    setCurrentPage(1);
  };

  const handleStyleClick = (style: string) => {
    setSelectedStyle(prev => prev === style ? '' : style);
    setCurrentPage(1);
  };

  const handleApplyFilter = () => {
    setCurrentPage(1);
  };

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesStyle = !selectedStyle || product.style === selectedStyle;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSize = selectedSize.length === 0 || product.sizes.some(size => selectedSize.includes(size));
    
    return matchesCategory && matchesStyle && matchesPrice && matchesSize;
  });

  const navigate = useNavigate();

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
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
              <button
                onClick={() => handleCategoryClick('T-shirts')}
                className={`text-sm ${selectedCategory === 'T-shirts' ? 'text-black font-medium' : 'text-gray-600'} hover:text-black block`}
              >
                T-shirts
              </button>
              <button
                onClick={() => handleCategoryClick('Shirts')}
                className={`text-sm ${selectedCategory === 'Shirts' ? 'text-black font-medium' : 'text-gray-600'} hover:text-black block`}
              >
                Shirts
              </button>
              <button
                onClick={() => handleCategoryClick('Shorts')}
                className={`text-sm ${selectedCategory === 'Shorts' ? 'text-black font-medium' : 'text-gray-600'} hover:text-black block`}
              >
                Shorts
              </button>
              <button
                onClick={() => handleCategoryClick('Hoodie')}
                className={`text-sm ${selectedCategory === 'Hoodie' ? 'text-black font-medium' : 'text-gray-600'} hover:text-black block`}
              >
                Hoodie
              </button>
              <button
                onClick={() => handleCategoryClick('Jeans')}
                className={`text-sm ${selectedCategory === 'Jeans' ? 'text-black font-medium' : 'text-gray-600'} hover:text-black block`}
              >
                Jeans
              </button>
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
                <button
                  key={style}
                  onClick={() => handleStyleClick(style)}
                  className={`text-sm ${selectedStyle === style ? 'text-black font-medium' : 'text-gray-600'} hover:text-black block`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleApplyFilter}
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
          >
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
            {filteredProducts
              .slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
              .map(product => (
              <div 
                key={product.id} 
                className="group relative cursor-pointer" 
                onClick={() => handleProductClick(product.id)}
              >
                <div className="aspect-w-4 aspect-h-5 rounded-md overflow-hidden group-hover:opacity-75 transition-opacity duration-300">
                  <div className="relative w-full h-[400px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-center object-cover transition-transform duration-300 group-hover:scale-110"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">₹{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              Previous
            </button>
            <span className="px-4 py-2 border rounded-md bg-gray-100">
              Page {currentPage} of {Math.ceil(allProducts.length / productsPerPage)}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(Math.ceil(allProducts.length / productsPerPage), prev + 1))}
              disabled={currentPage === Math.ceil(allProducts.length / productsPerPage)}
              className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;