import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/Page_header';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';
import ProductDetailsPage from './productDetails';

const DestinationDetailsPage = () => {
    return <div>
        <Navbar />
        {/* <PageHeader headertitle="Destinations Details"  /> */}
        
        <ProductDetailsPage />
        <Subscribe />
        <Footer />
    </div>
}

export default DestinationDetailsPage

