import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import { Home } from '../Home/Home';
import { Shop } from '../Shop/Shop';
import Product from '../Shop/Product';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'shop/:category',
        element: <Shop />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'product/:id',
        element: <Product />
      }
    ]
  }
]);
