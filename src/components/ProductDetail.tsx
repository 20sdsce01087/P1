import React from 'react';

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
  const [selectedColor, setSelectedColor] = React.useState('olive');
  const [selectedSize, setSelectedSize] = React.useState('Large');
  const [quantity, setQuantity] = React.useState(1);

  const product: ProductDetailProps = {
    id: 1,
    name: 'One Life Graphic T-shirt',
    price: 260,
    description: 'This stylish t-shirt is perfect for any occasion. Collection is well co-ordinated with all bottom wear.',
    images: [
      '/product1.jpg',
      '/product1-alt1.jpg',
      '/product1-alt2.jpg'
    ],
    colors: ['olive', 'navy', 'black'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large']
  };

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
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-center object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group">
                <div className="relative w-full h-full">
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-center object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
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
          <button className="w-full mt-8 bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors">
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

      {/* Subscription Banner */}
      <div className="mt-24 bg-gray-50 py-12 px-8 rounded-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated with Latest Offers</h2>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter and get exclusive deals directly in your inbox</p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-md border-gray-300 focus:ring-black focus:border-black"
            />
            <button className="px-6 py-3 bg-black text-white rounded-r-md hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
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
      </footer>
    </div>
  );
};

export default ProductDetail;