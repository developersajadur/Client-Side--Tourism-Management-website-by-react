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
import TourDetails from './Components/Pages/ToursRoutes/TourDetails';
import Spots from './Components/Pages/ToursRoutes/Spots';
import AddCountry from './Components/Forms/AddCountry';
import Countrys from './Components/Pages/Countrys/Countrys';
import CountrysSports from './Components/Pages/Countrys/CountrysSports';
import Contact from './Components/Pages/Contact';
import Blogs from './Components/Pages/Blogs/Blogs';
import BlogDetails from './Components/Pages/Blogs/BlogDetails';


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
      },
      {
        path: "/spot-details/:id",
        element: <TourDetails></TourDetails>,
        loader: ({params}) => fetch(`http://localhost:5173/spot-details/${params.id}`)
      },
      {
        path: "/spots",
        element: <Spots></Spots>,
        loader: () => fetch("http://localhost:4000/spots")
      },
      {
        path: "/countrys",
        element: <Countrys></Countrys>,
        loader:() => fetch("http://localhost:4000/countrys")
      },
      {
        path: "/add-country",
        element: <AddCountry></AddCountry>
      },
      {
        path: "/countrys/:countryName",
        element:<CountrysSports></CountrysSports>,
        loader:({params}) => fetch(`http://localhost:4000/countrys/${params.countryName}`)
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>,
        loader: () => fetch("/public/blog.json")
      },
      {
        path:"/blog/:blogId",
        element: <BlogDetails></BlogDetails>,
        loader:() => fetch("/public/blog.json")
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
