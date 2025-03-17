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
  }
]);