import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

function AuthorWidget({
    title,
    authorImg,
    authorName,
    text,
    fbLink,
    twitterLink,
    instaLink,
    linkedinLink,
    YoutubeLink,
}) {
    return (
        <div className="single-sidebar-widget author-box-widegts">
            <div className="wid-title">
                <h3>{title}</h3>
            </div>
            <div className="author-info text-center">
                <div
                    className="author-img"
                    style={{
                        backgroundImage: `url(${authorImg})`,
                    }}
                />
                <h4>{authorName}</h4>
                <p>{text}</p>
                <div className="social-profile">
                    <a to={fbLink}>
                        <FaFacebookF />
                    </a>
                    <a to={twitterLink}>
                        <FaTwitter />
                    </a>
                    <a to={instaLink}>
                        <FaInstagram />
                    </a>
                    <a to={linkedinLink}>
                        <FaLinkedinIn />
                    </a>
                    <a to={YoutubeLink}>
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AuthorWidget;
