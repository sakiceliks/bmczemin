import React, { useEffect, useState } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaFilePdf, FaFilePowerpoint, FaFileWord, FaMapMarkerAlt } from 'react-icons/fa';
import ServiceCategory from './ServiceCategory';
import ServiceContact from './ServiceContact';
import ServiceDownload from './ServiceDownload';
import servicesTwoData from '../Services2/servicesTwoData';


import { Link,useLocation } from 'react-router-dom';





function ServiceSidebar() {
    const location = useLocation()



    const ServiceCategory = ({ link, category,slug }) => {
        const location = useLocation();
        const [currentService, setCurrentService] = useState(false);
      
        useEffect(() => {
          const pathWithoutPrefix = location.pathname;
          const index = pathWithoutPrefix.search(category.slug);
          setCurrentService(index > 0);
        }, [location.pathname, category.slug]);
      
        const liStyle = {
          backgroundColor: currentService ? 'green' : 'transparent',
        };
      
        const className = currentService ? 'servicesactive' : '';
        return (
            <li className={className}>
            <Link  to={`/hizmetler/${category.slug}`}>{category.heading}</Link>
          </li>
        );
      };

    return (
        <div className="service-details-sidebar">
            <div className="single-service-sidebar">
                <div className="sidebar-title">
                    <h3> Faaliyet Alanlarımız 

                    </h3>
                </div>
                <ul>
      {servicesTwoData.map((service) => (
        <ServiceCategory slug={service.slug}  key={service.id} link={`/hizmetler/${service.slug}`} category={service} />
      ))}
    </ul>
            </div>
            <div className="single-service-sidebar">
                <div className="sidebar-title">
                    <h3>Download Brochures</h3>
                </div>
                <div className="brochures-download">
                    <ServiceDownload
                        link="/services-details"
                        text="Download .PDF"
                        icon={<FaFilePdf style={{ marginTop: '-5px', marginRight: '5px' }} />}
                    />
                    <ServiceDownload
                        link="/services-details"
                        text="Download .DOC"
                        icon={<FaFileWord style={{ marginTop: '-5px', marginRight: '5px' }} />}
                    />
                    <ServiceDownload
                        link="/services-details"
                        text="Download .PPT"
                        icon={
                            <FaFilePowerpoint style={{ marginTop: '-5px', marginRight: '5px' }} />
                        }
                    />
                </div>
            </div>
            <div className="single-service-sidebar site_info_widget">
                <div className="sidebar-title">
                    <h3>Contact Us</h3>
                </div>
                <div className="contact-us">
                    <ServiceContact
                        title="Phone Number"
                        text="+90 531 281 29 58"
                        icon={<AiOutlinePhone />}
                    />
                    <ServiceContact
                        title="Email Address"
                        text="info@supportexam.com"
                        icon={<AiOutlineMail />}
                    />
                    <ServiceContact
                        title="Office Address"
                        text="14/A, Ping Tower, NYC"
                        icon={<FaMapMarkerAlt />}
                    />
                    {/* <div className="single-contact-info">
                        <div className="icon">
                            <i className="fal fa-phone" />
                        </div>
                        <div className="contact-info">
                            <span>Phone Number</span>
                            <p>+90 531 281 29 58</p>
                        </div>
                    </div>
                    <div className="single-contact-info">
                        <div className="icon">
                            <i className="fal fa-envelope" />
                        </div>
                        <div className="contact-info">
                            <span>Email Address</span>
                            <p>info@supportexam.com</p>
                        </div>
                    </div>
                    <div className="single-contact-info">
                        <div className="icon">
                            <i className="fal fa-map-marker-alt" />
                        </div>
                        <div className="contact-info">
                            <span>Office Address</span>
                            <p>14/A, Ping Tower, NYC</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default ServiceSidebar;
