import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Shop from './components/Shop.tsx';
import Cart from './components/Cart.tsx';
import Contact from './components/Contact.tsx';
import ProductDetail from './components/ProductDetail.tsx';
import Layout from './components/Layout.tsx';
import Login from './components/Login.tsx';
import Register from './components/Register.jsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import NotFound from './components/NotFound.jsx';
import AboutUs from './components/AboutUs.jsx';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminProducts from './components/admin/AdminProducts';
import AdminOrders from './components/admin/AdminOrders';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <ErrorBoundary><NotFound /></ErrorBoundary>
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'product/:id',
        element: <ProductDetail />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'about',
        element: <AboutUs />
      }
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />
      },
      {
        path: 'products',
        element: <AdminProducts />
      },
      {
        path: 'orders',
        element: <AdminOrders />
      }
    ]
  }
]);