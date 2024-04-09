import React from 'react';
import Nav from '../shared/Nav';
import Banner from '../components/Banner/Banner';
import Footer from '../shared/Footer';
import Copyright from './Copyright';
import Faq from '../components/Faq';


const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <Faq></Faq>
            <Footer></Footer>
            <Copyright></Copyright>
        </div>
    );
};

export default Home;