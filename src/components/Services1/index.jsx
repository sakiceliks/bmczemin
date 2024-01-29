import React from 'react';
import ServicesOneCard from './ServicesOneCard';
import servicesOneData from './servicesOneData';
import servicesTwoData from '../Services2/servicesTwoData';

function Services1() {
    return (
        <section style={{backgroundColor:'#232628'}} className="services-wrapper services-1  section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="section-title text-center">
                            {/* <span>Services</span> */}
                            <p style={{color:'black'}}>Hizmetlerimiz</p>
                            <h1 style={{color:'#ff462e'}}>Faaliyet Alanlarımız</h1>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {servicesTwoData.map((item) => (
                        <ServicesOneCard
                            key={item.id}
                            slug={item.slug}
                            id={item.id}
                            bgImg={item.thumbnail}
                            icon={item.icon}
                            heading={item.heading}
                            btnText="İncele"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services1;
