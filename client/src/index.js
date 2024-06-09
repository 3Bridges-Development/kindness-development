import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import ErrorPage from "./error-page";
import Home from "./Views/Home";
import Services from "./Views/Services";
import Academy from "./Views/Academy";
import WaysToHelp from './Views/WaysToHelp';
import CheckoutForm from './Components/CheckoutForm'
import './index.css';




const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/services",
        element: <Services />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/academy",
        element: <Academy />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/waysToHelp",
        element: <CheckoutForm />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
