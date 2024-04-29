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
import AddProduct from './Components/Forms/AddProduct';
import MySpots from './Components/Profile/MySpots';
import UpdateProduct from './Components/Forms/UpdateProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage> </ErrorPage>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
        loader: () => fetch("http://localhost:4000/spots")
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/add-spots",
        element:<AddProduct></AddProduct>
      },
      {
        path: "/update-spots/:id",
        element:<UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`http://localhost:4000/spots/${params.id}`)
      },
      {
        path: "/my-spots",
        element: <MySpots></MySpots>
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
