import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Layout;