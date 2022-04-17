import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import ClientsReview from '../ClientsReview/ClientsReview';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <ClientsReview/>
            <Footer/>
    
        </div>
    );
};

export default Home;