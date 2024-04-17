import React from 'react';
import aboutImg from '../assets/abou1.jpg'
import { CiStar } from "react-icons/ci";
import { FaDigitalOcean } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import PageTitle from '../components/PageTitle';
import AboutHead from '../components/CommonHeader/AboutHead';

const About = () => {
    return (
        <div className='overflow-x-hidden'>
            <PageTitle title='About'></PageTitle>
            <AboutHead></AboutHead>
            <div>
            <div className="hero bg-rose-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div data-aos="fade-left" data-aos-delay="4000" className="max-w-lg card shrink-0 w-80 lg:w-full  ">
                        <div>
                            <img data-aos="zoom-in" className='rounded-full shadow-3xl border-white border-8 shadow-slate-500' src={aboutImg} alt="" />
                        </div>
                    </div>
                    <div data-aos="fade-right" className="max-w-lg flex-1 text-center lg:text-left space-y-6">
                        <h1 className='text-3xl font-extrabold'>Why should choose <br />
                            our agency?</h1>
                        <h2 className='text-red-800'> BrivIn offers a simple and straightforward solution for industrial property management, allowing you to focus on what matters most.</h2>
                        <p className='font-light text-sm'>At BrivIn, we specialize in providing comprehensive real estate solutions for clients involved in the power generation sector. With our deep understanding of the unique challenges and opportunities in this industry, we offer a range of services to support your power plant real estate needs</p>
                        <div className='flex flex-wrap lg:flex-row items-center justify-center border-8 border-red-800 py-6 px-5'>
                            <div className='flex-1'>
                                <div className='flex'>
                                    <div>
                                    <div className='bg-red-800 rounded-full p-2 font-extrabold text-4xl'><CiStar /></div>
                                  
                                    </div>
                                    <div className='ml-2'>
                                        <h1 className='text-sm font-bold'>Power  <br /> plants</h1>
                                        <p className='text-sm font-light text-red-800'>marketing</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1'>
                            <div className='flex'>
                                    <div>
                                    <div className='bg-red-800 rounded-full p-2 font-extralight text-4xl'> <FaDigitalOcean /></div>
                                    </div>
                                    <div className='ml-2'>
                                        <h1 className='text-sm font-bold'>Factories </h1>
                                        <p className='text-sm font-light text-red-800'>marketing</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1'>
                            <div className='flex'>
                                    <div>
                                    <div className='bg-red-800 rounded-full font-extralight p-2 text-4xl'> <SiAntdesign /></div>
                                    </div>
                                    <div className='ml-2'>
                                        <h1 className='text-sm font-bold'>Industrial<br /> parks</h1>
                                        <p className='text-sm font-light text-red-800'>marketing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;