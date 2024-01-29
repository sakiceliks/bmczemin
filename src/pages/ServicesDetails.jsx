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


function ServicesDetails() {

    
    const Location =  useLocation();
    const currentLocation = Location.pathname
    const remainingString = currentLocation.split("/hizmetler/")[1];
    const formattedString = remainingString
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
    console.log(formattedString);
    return (
        <>
            <Header1 />
            <PageBanner
                bannerBg={bannerBg}
                heading={formattedString}
                currentPage="Faaliyet Alanlarımız"
            />
            <section className="service-details-wrapper  section-bg section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 mt-5 mt-md-0 col-12 order-2 order-md-1">
                            <ServiceSidebar />
                        </div>
                        <div className="col-lg-9 col-md-8 col-12 order-1 order-md-2">
                            <ServiceDetails data={servicesTwoData} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer1 />
        </>
    );
}

export default ServicesDetails;
