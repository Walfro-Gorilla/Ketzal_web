import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/Page_header';
import BlogList from './blog-components/blog-v2';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

const BlogV3 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog"  />
        <BlogList />
        <Subscribe />
        <Footer />
    </div>
}

export default BlogV3

