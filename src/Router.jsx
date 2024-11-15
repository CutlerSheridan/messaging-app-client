import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Auth from './components/Auth';
import Error404 from './components/Error404';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: (
        <App>
          <Error404 />
        </App>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'auth',
          element: <Auth />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
