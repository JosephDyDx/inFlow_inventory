import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Sign_In from './pages/Sign_In';
import './style.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Sign_Up from './pages/Sign_Up';
import Forgotpassword from './pages/ForgotPassword/Forgotpassword';
import PasswordReset from './pages/ForgotPassword/PasswordReset';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "sign_in",
    element: <Sign_In/>,
  },
  {
    path: "sign_up",
    element: <Sign_Up/>,
  },
  {
    path: "forgotpassword",
    element: <Forgotpassword/>,
  },
  {
    path: "passwordreset",
    element: <PasswordReset/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} /> 
);

