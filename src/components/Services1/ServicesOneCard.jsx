import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function ServicesOneCard({ bgImg, icon, id,heading, btnText,slug }) {
    return (
        <div className="col-lg-3 col-md-6 p-3 mb-3">
            <div className="w-100 h-100 p-3  single-service-item service-1">
                <div
                    className="service-bg bg-cover"
                    style={{
                        backgroundImage: `url(${bgImg})`,
                    }}
                />
                <div style={{opacity:'0'}} className="icon">
                    <img src={icon} alt="icon" />
                </div>
<div className='bg-black bg-opacity-50 rounded-3 p-3 w-auto'>
<h3>{heading}</h3>

</div>
                <Link className="justify-content-center d-inline-flex" to={`/hizmetler/${slug}`}>
                    <span>{btnText}</span>
                    <BsArrowRight style={{ fontSize: '18px' }} />
                </Link>
            </div>
        </div>
    );
}

export default ServicesOneCard;
