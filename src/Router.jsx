import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from 'react-router-dom';
import App from './App';
import Home from './components/Home';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
