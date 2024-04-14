import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Service from '../pages/Service';
import About from '../pages/About';
import Product from '../pages/Product';
import Property from '../pages/Property';
import Contact from '../pages/Contact';
import Privateroute from './Privateroute';
import Error from '../pages/Error';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('/fakedata.json')
      },
      {
        path:'/property/:id',
        element:<Privateroute><Property></Property></Privateroute>,
        loader:() => fetch('/fakedata.json')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/service',
        element:<Service></Service>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/product',
        element:<Product></Product>
      }
      ]
    },
  ]);

export default router;