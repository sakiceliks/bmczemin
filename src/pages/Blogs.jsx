import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import BlogPosts from '../components/BlogPosts';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import Blog1 from '../components/AllBlogs';
import blogOneData from '../components/Blog1/BlogOneData';
import BlogDetails from '../components/BlogDetails';

function Blogs() {
    return (
        <>
            <Header1 />
            <PageBanner bannerBg={bannerBg} heading="Blog" currentPage="Blog" />
            <BlogDetails/>
            <Footer1 />
        </>
    );
}

export default Blogs;
