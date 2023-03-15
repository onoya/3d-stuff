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
    element: <OpenWorldGame />,
  },
  {
    path: '/car-show',
    element: <CarShowApp />,
  },
  {
    path: '/basic',
    element: <BasicApp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
