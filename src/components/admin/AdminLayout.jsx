import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FiHome, FiBox, FiShoppingBag, FiLogOut } from 'react-icons/fi';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate('/login');
  };

  const navItems = [
    { path: '/admin', icon: <FiHome size={20} />, label: 'Dashboard' },
    { path: '/admin/products', icon: <FiBox size={20} />, label: 'Products' },
    { path: '/admin/orders', icon: <FiShoppingBag size={20} />, label: 'Orders' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h1 className={`text-xl font-bold ${!isSidebarOpen && 'hidden'}`}>QuickCart Admin</h1>
        </div>
        <nav className="mt-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-black transition-colors"
            >
              <span className="mr-3">{item.icon}</span>
              <span className={`${!isSidebarOpen && 'hidden'}`}>{item.label}</span>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-black transition-colors"
          >
            <span className="mr-3"><FiLogOut size={20} /></span>
            <span className={`${!isSidebarOpen && 'hidden'}`}>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden mb-4 p-2 bg-white rounded-lg shadow-md"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;