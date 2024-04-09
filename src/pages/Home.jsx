import React from 'react';
import Nav from '../shared/Nav';
import Banner from '../components/Banner/Banner';
import Footer from '../shared/Footer';
import Copyright from './Copyright';
import Faq from '../components/Faq';

import { useLoaderData } from 'react-router-dom';
import Estate from '../components/Estate';


const Home = () => {

    const estates = useLoaderData()
    console.log(estates)

    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
             <div className="space-y-2 text-center py-8 bg-gray-100">
                    <h2 className="text-3xl font-bold text-red-800">Estates</h2>
                    <p className="font-serif text-sm text-gray-400">See our many categories industry.</p>
                </div>
           <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 bg-gray-100 mx-auto">
           {
                estates.map(estate => <Estate
                key={estate.id}
                estate={estate}
                ></Estate>)
            }
           </div>
           
            <Faq></Faq>
            <Footer></Footer>
            <Copyright></Copyright>
        </div>
    );
};

export default Home;