import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

interface ProductDetailProps {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
}

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [selectedColor, setSelectedColor] = React.useState('olive');
  const [selectedSize, setSelectedSize] = React.useState('Large');
  const [quantity, setQuantity] = React.useState(1);

  const products = [
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      price: 545,
      description: 'This stylish t-shirt features a unique gradient design. Perfect for casual wear and everyday comfort.',
      images: ['/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png', '/Frame 38-1.png'],
      colors: ['olive', 'navy', 'black'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 2,
      name: 'Polo with Tipping Details',
      price: 680,
      description: 'Classic polo shirt with modern tipping details. Great for both casual and semi-formal occasions.',
      images: ['/Frame 34-1.png', '/Frame 34.png', '/Frame 38.png', '/Frame 38-1.png'],
      colors: ['navy', 'white', 'black'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 3,
      name: 'Black Striped T-shirt',
      price: 520,
      description: 'Trendy striped t-shirt in black. Features a modern fit and comfortable fabric.',
      images: ['/Frame 38.png', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38-1.png'],
      colors: ['black', 'gray', 'navy'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 4,
      name: 'Skinny Fit Jeans',
      price: 740,
      description: 'Modern skinny fit jeans with perfect stretch and comfort. Ideal for a sleek, contemporary look.',
      images: ['/Frame 38-1.png', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png'],
      colors: ['blue', 'black', 'gray'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 5,
      name: 'Checkered Shirt',
      price: 580,
      description: 'Classic checkered shirt with a modern twist. Perfect for both casual and semi-formal occasions.',
      images: ['/Frame 64.png', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png'],
      colors: ['red', 'blue', 'black'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 6,
      name: 'Urban Fashion Wear',
      price: 890,
      description: 'Contemporary urban fashion that makes a bold statement. Features premium materials and expert craftsmanship.',
      images: ['/new image/alex-haigh-fEt6Wd4t4j0-unsplash.jpg', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png'],
      colors: ['black', 'gray', 'white'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 7,
      name: 'Vertical Striped Shirt',
      price: 512,
      description: 'Sophisticated vertical striped shirt that adds a touch of elegance to your wardrobe.',
      images: ['/bestseller1.jpg', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png'],
      colors: ['white', 'blue', 'black'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 8,
      name: 'Casual Wear Collection',
      price: 445,
      description: 'Comfortable and stylish casual wear perfect for everyday activities.',
      images: ['/Frame 63.png', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png'],
      colors: ['white', 'gray', 'black'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 9,
      name: 'Summer Collection',
      price: 800,
      description: 'Light and breezy summer wear designed for maximum comfort in warm weather.',
      images: ['/casual-style.jpg', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png'],
      colors: ['beige', 'white', 'blue'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 10,
      name: 'Urban Street Style',
      price: 890,
      description: 'Contemporary urban style that combines comfort with street fashion trends.',
      images: ['/dom-hill-nimElTcTNyY-unsplash.jpg', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png'],
      colors: ['black', 'gray', 'white'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 11,
      name: 'Classic Denim Jacket',
      price: 1100,
      description: 'Timeless denim jacket with modern details. Perfect for layering and casual outings.',
      images: ['/christian-bolt-VW5VjskNXZ8-unsplash.jpg', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png'],
      colors: ['blue', 'black', 'gray'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 12,
      name: 'Premium Cotton Blazer',
      price: 1200,
      description: 'Sophisticated cotton blazer perfect for formal occasions. Features premium tailoring.',
      images: ['/formal-style.jpg', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png'],
      colors: ['black', 'navy', 'gray'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 13,
      name: 'Traditional Ethnic Wear',
      price: 950,
      description: 'Elegant ethnic wear combining traditional designs with modern comfort.',
      images: ['/ethnic-style.jpg', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png'],
      colors: ['maroon', 'gold', 'blue'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 14,
      name: 'Sports Collection',
      price: 780,
      description: 'High-performance sportswear designed for comfort and functionality.',
      images: ['/sports-style.jpg', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png'],
      colors: ['black', 'blue', 'red'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 15,
      name: 'Casual Street Wear',
      price: 670,
      description: 'Trendy street wear that combines style with everyday comfort.',
      images: ['/new image/haryo-setyadi-acn5ERAeSb4-unsplash.jpg', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png'],
      colors: ['black', 'white', 'gray'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 16,
      name: 'Modern Fashion Collection',
      price: 920,
      description: 'Contemporary fashion pieces that define modern style and elegance.',
      images: ['/new image/kate-skumen-PJRabkuH3_Q-unsplash.jpg', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png'],
      colors: ['black', 'white', 'beige'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 17,
      name: 'Contemporary Style',
      price: 850,
      description: 'Modern and sophisticated pieces for the fashion-forward individual.',
      images: ['/new image/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.jpg', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png'],
      colors: ['white', 'black', 'gray'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 18,
      name: 'Urban Collection',
      price: 790,
      description: 'Urban-inspired fashion that captures the essence of city life.',
      images: ['/new image/meysam-jarahkar-NMYG69BG_Jg-unsplash.jpg', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png'],
      colors: ['black', 'gray', 'white'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 19,
      name: 'Street Fashion',
      price: 680,
      description: 'Bold street fashion that makes a statement.',
      images: ['/new image/rock-staar-2XcbGfYShfk-unsplash.jpg', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png'],
      colors: ['black', 'white', 'red'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
      id: 20,
      name: 'Fashion Forward',
      price: 920,
      description: 'Cutting-edge fashion pieces that set trends.',
      images: ['/felipe-galvan-AhfrA5VQNpM-unsplash.jpg', '/Frame 34.png', '/Frame 34-1.png', '/Frame 38.png'],
      colors: ['black', 'white', 'gray'],
      sizes: ['Small', 'Medium', 'Large', 'X-Large']
    }
  ];

  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
          <p className="mt-2 text-gray-600">The product you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/shop')} 
            className="mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
          >
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  const updateQuantity = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="lg:w-1/2 space-y-4">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group">
            <div className="relative w-full h-full">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-center object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div 
                key={index} 
                className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group cursor-pointer ${selectedImageIndex === index ? 'ring-2 ring-black' : ''}`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="relative w-full h-full">
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-center object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-2 text-3xl text-gray-900">₹{product.price}</p>
          <p className="mt-4 text-gray-600">{product.description}</p>

          {/* Color Selection */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Color</h3>
            <div className="flex space-x-3 mt-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-transparent'}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Select Size</h3>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-4 text-sm font-medium rounded-md ${selectedSize === size ? 'bg-black text-white' : 'border border-gray-300 text-gray-700 hover:border-black'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
            <div className="flex items-center border rounded-md w-32 mt-2">
              <button
                onClick={() => updateQuantity(-1)}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="flex-1 text-center text-gray-800">{quantity}</span>
              <button
                onClick={() => updateQuantity(1)}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={() => {
              if (product) {
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  size: selectedSize,
                  color: selectedColor,
                  image: product.images[selectedImageIndex],
                  quantity: quantity
                });
              }
            }} 
            className="w-full mt-8 bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* You might also like */}
      <div className="mt-16">
        <h2 className="text-xl font-bold text-gray-900 mb-6">You might also like</h2>
        <div className="relative">
          <div className="overflow-x-auto hide-scrollbar">
            <div className="inline-flex space-x-6 min-w-full py-2">
              {[1, 2, 3, 4, 5, 6].map(id => (
                <div key={id} className="group w-64 flex-shrink-0">
                  <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
                    <img
                      src={`/related-product${id}.jpg`}
                      alt={`Related product ${id}`}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm text-gray-700 hover:text-black cursor-pointer">Related Product {id}</h3>
                    <p className="mt-1 text-sm font-medium text-gray-900">₹ 220</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer
      <footer className="mt-24 border-t pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">About Us</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">Store Locations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Help</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Order Status</a></li>
              <li><a href="#" className="hover:text-black">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">FAQs</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Size Guide</a></li>
              <li><a href="#" className="hover:text-black">Payment Options</a></li>
              <li><a href="#" className="hover:text-black">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default ProductDetail;