
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
import Profile from '../pages/Profile';

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
        element:<Privateroute><Service></Service></Privateroute>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/product',
        element:<Product></Product>
      },
      {
        path:'/profile',
        element:<Privateroute><Profile></Profile></Privateroute>
      }
      ]
    },
  ]);

export default router;