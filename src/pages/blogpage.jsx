import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import ServiceDetails from '../components/ServiceDetails';
import ServiceSidebar from '../components/ServiceSidebar';
import { useParams } from 'react-router-dom';
import servicesTwoData from '../components/Services2/servicesTwoData';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import BlogDetails from '../components/BlogDetails';
import GetBlog from '../components/AllBlogs';


function BlogPage() {

    

    return (
        <>
            <Header1 />
            <PageBanner
                bannerBg={bannerBg}
                heading="Faaliyet Alanlarımız"
                currentPage="Faaliyet Alanlarımız"
            />
          <GetBlog/>
            <Footer1 />
       </>
    );
}

export default BlogPage;
