import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Pages/Root';
import Home from './Components/Pages/Home';
import Register from './Components/Forms/Register';
import ErrorPage from './Components/Pages/ErrorPage';
import AuthProvider from './Providers/AuthProvider';
import Login from './Components/Forms/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage> </ErrorPage>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element:<Login></Login>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
