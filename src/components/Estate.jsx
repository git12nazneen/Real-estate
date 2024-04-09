import React from 'react';
import { Link } from 'react-router-dom';

const Estate = ({estate}) => {

    const {estate_title, image, description, price, area, facilities, location,id} = estate

    return (
        <div className=''>
          <section className="py-6 sm:py-3 bg-gray-100 text-gray-800">
            <div className="container px-6 py-2  space-y-8 ">
               
                <div className='bg-gray-100 '>
                    <article className="flex flex-col bg-rose-200">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src={estate.image} />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-gray-800">{estate.estate_title}</a>
                            <h3 className="flex-1 py-2 text-lg leading-snug">{estate.description.slice(0,61)}</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                <span>{estate.price}</span>
                                <span>{estate.area}</span>
                            </div>
                            <div className='py-2'>
                                <small>Our facilities:</small>
                                <ul className='text-sm font-light'>
                                    <li>1.{estate.facilities[0]}</li>
                                    <li>2.{estate.facilities[1]}</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 items-center">
                               
                                <span>{estate.location.slice(0,10)}</span>
                                <Link to={`/property/${id}`}>
                                <span><button className='btn text-white bg-rose-800'>View Property</button></span>
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Estate;