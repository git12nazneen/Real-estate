import Banner from '../components/Banner/Banner';
import Faq from '../components/Faq';
import { useLoaderData } from 'react-router-dom';
import Estate from '../components/Estate';
import PageTitle from '../components/PageTitle';


const Home = () => {

    const estates = useLoaderData()
    console.log(estates)

    return (
        <div>
            <PageTitle title='Home Page'></PageTitle>
            <Banner></Banner>
             <div className="space-y-2 text-center py-8 bg-gray-100">
                    <h2 className="text-3xl font-bold text-red-800">Estates</h2>
                    <p className="font-serif text-xl text-gray-800">See our many categories industry.</p>
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
        </div>
    );
};

export default Home;