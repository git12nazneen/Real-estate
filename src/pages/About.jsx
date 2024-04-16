import React from 'react';
import aboutImg from '../assets/abou1.jpg'
import { CiStar } from "react-icons/ci";
import { FaDigitalOcean } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import PageTitle from '../components/PageTitle';

const About = () => {
    return (
        <div>
            <PageTitle title='About'></PageTitle>
            <div>
            <div className="hero bg-rose-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="max-w-lg card shrink-0 w-80 lg:w-full  ">
                        <div>
                            <img className='rounded-full shadow-3xl border-white border-8 shadow-slate-500' src={aboutImg} alt="" />
                        </div>
                    </div>
                    <div className="max-w-lg flex-1 text-center lg:text-left space-y-6">
                        <h1 className='text-3xl font-extrabold'>Why should choose <br />
                            our agency?</h1>
                        <h2 className='text-red-800'>Lorem ipsum, dolor sit amet consectetur adipisicing.</h2>
                        <p className='font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quidem magnam ipsum atque. Eius fugit necessitatibus earum labore eum voluptas? Sint porro iusto nemo cum? Alias sed, autem cumque voluptate in maiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, dolorem!</p>
                        <div className='flex flex-wrap lg:flex-row items-center justify-center border-8 border-red-800 py-6 px-5'>
                            <div className='flex-1'>
                                <div className='flex'>
                                    <div>
                                    <div className='bg-red-800 rounded-full p-2 font-extrabold text-4xl'><CiStar /></div>
                                  
                                    </div>
                                    <div className='ml-2'>
                                        <h1 className='text-sm font-bold'>Leader in <br /> digital</h1>
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
                                        <h1 className='text-sm font-bold'>Leader in <br /> digital</h1>
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
                                        <h1 className='text-sm font-bold'>Leader in <br /> digital</h1>
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