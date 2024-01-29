import React from 'react';

function ServiceDownload({ link, text, icon }) {
    return (
        <>
            <a to={link} className="theme-btn">
                {icon}
                {text}
            </a>
        </>
    );
}

export default ServiceDownload;
