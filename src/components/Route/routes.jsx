import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import { Home } from '../Home/Home';
import { Shop } from '../Shop/Shop';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'shop',
        element: <Shop />
      }
    ]
  }
]);
