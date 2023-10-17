import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// page import
import App from './App';
import Malware from './pages/malware';
import About from './pages/about'
import MalwareDetail from './pages/malwareDetail';

import MalwareData from './pages/malware.json'
// component import

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/malware",
    element: <Malware />
  },
  {
    path: "/malware/:name",
    element: <MalwareDetail malwareData={MalwareData}/>
  },
  {
    path: "/about",
    element: <About />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);