import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function ServiceCategory({ link, category,slug }) {
    const location = useLocation();
    const currentService = location.pathname.includes(category);

    const liStyle = {
        backgroundColor: currentService ? 'blue !important' : 'transparent !important',
    };


    console.log(slug);
    return (
        <li style={liStyle}>
            <Link to={link}>{category},aaa</Link>
        </li>
    );
}

export default ServiceCategory;
