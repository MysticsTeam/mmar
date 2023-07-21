import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// page import
import App from './App';
import Malware from './pages/malware'

// component import

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/malware",
    element: <Malware />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);