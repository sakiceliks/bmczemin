import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import ContactForm from '../components/ContactForm';
import ContactUs from '../components/ContactUs';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';

function Contact() {
    return (
        <>
            <Header1 />
            <PageBanner bannerBg={bannerBg} heading="İletişim" currentPage="Contact" />
            <ContactUs />
            <ContactForm title="Mesaj Yaz " heading="İletişim" />
            <Footer1 />
        </>
    );
}

export default Contact;
