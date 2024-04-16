
import PageTitle from '../components/PageTitle';

import service from '../assets/service.jpg'
import service1 from '../assets/service1.jpg'
import service2 from '../assets/servie2.jpg'

const Service = () => {
    return (
        <div>
            <PageTitle title='Service'></PageTitle>
            
            <section className="p-4 lg:p-8 bg-gray-100 text-gray-900">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={service1} alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-rose-200">
                            <span className="text-xs uppercase text-gray-900">Join, it's free</span>
                            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                            <p className="my-6 text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src={service} alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-rose-200">
                            <span className="text-xs uppercase text-gray-900">Join, it's free</span>
                            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                            <p className="my-6 text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={service2} alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-rose-200">
                            <span className="text-xs uppercase text-gray-900">Join, it's free</span>
                            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                            <p className="my-6 text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;