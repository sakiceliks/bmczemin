import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function SevicesTwoCard({ thumbnail, icon,slug, id,heading, text }) {
    return (
        <div className="col-md-6 col-xl-4 col-12">
            <div className="single-service-card">
                <div
                    className="card-thumb bg-cover"
                    style={{
                        backgroundImage: `url(${thumbnail})`,
                    }}
                />
                <div className="content">
                    <div className="case-cat">
                    <Link to={`/hizmetler/${slug}`}>
{icon}</Link>
                    </div>
                    <h3 className="text-center mb-3">
                        <Link  to={`/hizmetler/${slug}`}>{heading}</Link>
                    </h3>
                    {/* <p>{text}</p> */}
                    <div className='d-grid gap-2'>
                    <Link to={`/hizmetler/${slug}`} style={{textAlign:'center'}} className="text-center btn btn-outline-primary serviceincele">
                        İncele <BsArrowRight />
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SevicesTwoCard;
