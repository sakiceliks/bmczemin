import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { HiLocationMarker } from "react-icons/hi";
import { IoIosBusiness } from "react-icons/io";

function FilterItem({ image, name, price, heading }) {
    return (
        <div className="col-xl-3 col-md-6 grid-item bedroom">
            <div className="single-cause-item">
                <div className="cause-bg bg-cover" style={{ backgroundImage: `url(${image})` }}>
                    <Link to="/project-details" className="icon">
                        <BsArrowRight />
                    </Link>
                </div>
                <div className="cause-content">
                    <div className="cause-meta d-flex">
                        <div className="author mr-15"><IoIosBusiness className='mb-1 mr-1'/>{name}</div>|
                        <div className="project-amount ml-15 d-inline-flex align-center "><HiLocationMarker className='mb-1 mr-1'/>{price}</div>
                    </div>
                    <h4>
                        <Link to="/project-details">{heading}</Link>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default FilterItem;
