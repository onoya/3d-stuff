import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BasicApp from './basics/BasicApp';
import CarShowApp from './carShow/CarShowApp';
import './globals.css';
import OpenWorldGame from './openWorld';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicApp />,
  },
  {
    path: '/car-show',
    element: <CarShowApp />,
  },
  {
    path: '/open-world',
    element: <OpenWorldGame />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
