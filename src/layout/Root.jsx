import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import Copyright from '../pages/Copyright';

const Root = () => {
    return (
        <div className=' font-poppins'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            <Copyright></Copyright>
        </div>
    );
};

export default Root;