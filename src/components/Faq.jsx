import React from 'react';
import faq from '../assets/faq.jpg'

const Faq = () => {
    return (
        <div className=''>
          <div className="hero min-h-screen  max-w-6xl mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className='w:6/6 lg:w-3/6 space-y-5 '>
                        <h1 className='text-red-800 font-extrabold text-3xl text-center lg:text-left'>Frequiently Asked Questions</h1>
                        <small className=' font-light text-center lg:text-left'>Here are some frequently asked questions (FAQs) related to industrial facilities like warehouses, factories, production plants, industrial parks, cold storage facilities, power plants, etc., along with their answers:</small>
                         <div className="collapse collapse-plus bg-rose-200">
                        <input type="radio" name="my-accordion-3" defaultChecked /> 
                        <div className="collapse-title ">
                           <p className='text-xl font-normal '>1. What safety measures should be in place in industrial facilities?</p>
                        </div>
                        <div className="collapse-content "> 
                            <p className='text-xs font-light'>Industrial facilities should have proper safety protocols in place, including regular safety inspections, employee training programs, emergency response plans, and the use of personal protective equipment (PPE) such as helmets, goggles, and gloves.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-plus bg-gray-200">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title ">
                           <p className='text-xl font-normal'>2. How are power plants transitioning to cleaner energy sources?</p>
                        </div>
                        <div className="collapse-content"> 
                            <p className='text-xs font-light'>Power plants are increasingly adopting cleaner energy sources such as renewable energy (solar, wind, hydroelectric), natural gas, and nuclear power to reduce greenhouse gas emissions and environmental impact. This transition involves upgrading infrastructure, investing in new technologies, and diversifying energy generation portfolios.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-plus bg-gray-200">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title ">
                           <p className='text-xl font-normal'>3. What strategies are employed to optimize production efficiency in factories?</p>
                        </div>
                        <div className="collapse-content"> 
                            <p className='text-xs font-light'>Strategies for optimizing production efficiency include implementing lean manufacturing principles, automating repetitive tasks, improving supply chain management, reducing waste and downtime, conducting continuous process improvement initiatives, and investing in employee training and skill development.</p>
                        </div>
                        </div>
                </div>
                <div className='w:6/6 lg:w-3/6'>
                   <div className=' '>
                     <img className='rounded-t-full h-full border-red-800 border-8 shadow-lg shadow-gray-700' src={faq} alt="" />
                     </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Faq;