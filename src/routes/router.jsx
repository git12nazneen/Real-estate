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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('/fakedata.json')
      },
      {
        path:'/property/:id',
        element:<Property></Property>
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