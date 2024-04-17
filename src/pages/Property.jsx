import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaHandPointRight } from "react-icons/fa";
import PageTitle from '../components/PageTitle';
const Property = () => {

    const properties = useLoaderData()
    console.log(properties)
    const { id } = useParams();
    // const idInt = parseInt(id);
    const property = properties.find(property => property.id === id)
    console.log(property)

    return (
        <div className='max-w-6xl mx-auto my-5'>
            <PageTitle title='Property'></PageTitle>
           <div className="card lg:card-side bg-rose-100 shadow-xl">
            <figure><img className='w-96 h-96' src={property.image} alt="Album"/></figure>
            <div className="card-body space-y-3">
                <h2 className="card-title font-extrabold text-2xl text-red-800">{property.segment_name}</h2>
                <h5  className='text-xl font-semibold'>{property.description}</h5>
                <h1 className='text-xl font-light'>There are many facilites in our estates collection.Such as:</h1>
                <ul>
                    <li className='flex items-center '><span className='mr-3'><FaHandPointRight /></span> {property.facilities[0]}</li>
                    <li className='flex items-center'><span className='mr-3'><FaHandPointRight /></span> {property.facilities[1]}</li>
                </ul>
                <div className="flex flex-wrap space-x-5">
                <button className="btn bg-rose-400 rounded-3xl font-light"><span>Status:</span> {property.status}</button>
                <button className="btn bg-black rounded-3xl font-light text-white"><span>Price:</span> {property.price}</button>
                <button className="btn bg-rose-400 rounded-3xl font-light"><span>Area:</span> {property.area}</button>
               
              
                </div>
            </div>
            </div>
        </div>
    );
};

export default Property;