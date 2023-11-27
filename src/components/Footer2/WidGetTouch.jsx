import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';

function WidGetTouch() {
    return (
        <div className="single-footer-wid site_info_widget">
            <div className="wid-title">
                <h4>İletişim</h4>
            </div>
            <div className="contact-us">
                <div className="single-contact-info">
                    <div className="icon">
                        <i className="fal fa-phone" />
                        <AiOutlinePhone />
                    </div>
                    <div className="contact-info">
                        <span>Phone Number</span>
                        <p>+90 531 281 29 58</p>
                    </div>
                </div>
                <div className="single-contact-info">
                    <div className="icon">
                        <i className="fal fa-envelope" />
                        <AiOutlineMail />
                    </div>
                    <div className="contact-info">
                        <span>Email Address</span>
                        <p>info@supportexam.com</p>
                    </div>
                </div>
                <div className="single-contact-info">
                    <div className="icon">
                        <FaMapMarkerAlt />
                    </div>
                    <div className="contact-info">
                        <span>Office Address</span>
                        <p>14/A, Ping Tower, NYC</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WidGetTouch;
