import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';
import AboutUs from './components/AboutUs';

export const router = createBrowserRouter([{
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