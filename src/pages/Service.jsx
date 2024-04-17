
import PageTitle from '../components/PageTitle';

import service from '../assets/service.jpg'
import service1 from '../assets/service1.jpg'
import service2 from '../assets/servie2.jpg'
import ServiceHead from '../components/CommonHeader/ServiceHead';

const Service = () => {
    return (
        <div>
            <PageTitle title='Service'></PageTitle>
            <ServiceHead></ServiceHead>
            <section className="p-4 lg:p-8 bg-gray-100 text-gray-900">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img data-aos="zoom-out" src={service1} alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-rose-200">
                            <span className="text-xs uppercase text-gray-900">Warhouse</span>
                            <h3 className="text-3xl font-bold">Property Management</h3>
                            <p className="my-6 text-gray-900"> Our experienced property management team ensures the efficient operation and maintenance of industrial properties, providing proactive maintenance, tenant relations management, and financial oversight to maximize asset performance.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img data-aos="zoom-out" src={service} alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-rose-200">
                            <span className="text-xs uppercase text-gray-900">Cold storage</span>
                            <h3 className="text-3xl font-bold">Customized Solutions</h3>
                            <p className="my-6 text-gray-900">Recognizing that every client and every property is unique, we provide personalized solutions tailored to your specific needs and objectives, delivering results that exceed expectations.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img data-aos="zoom-out" src={service2} alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-rose-200">
                            <span className="text-xs uppercase text-gray-900">Power production</span>
                            <h3 className="text-3xl font-bold">Site Identification and Acquisition</h3>
                            <p className="my-6 text-gray-900">We assist clients in identifying suitable sites for power plant development, considering factors such as proximity to fuel sources, transmission infrastructure, environmental considerations, and regulatory requirements.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;