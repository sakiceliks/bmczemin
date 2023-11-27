import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MenuContent = () => (
    <div className="mobile-menu-bottom">
        <ul>
            <li className="bottom-item">
                <AiOutlineMail className="icon" />
                info@bmczemin.com.tr
            </li>
            <li className="bottom-item">
                <AiOutlinePhone className="icon" />
                +90 531 281 29 58
            </li>
        </ul>
        <div className="bottom-btn">
            <Link to="/contact" className="d-btn theme-btn d-block text-white">
                Contact Us
            </Link>
        </div>
    </div>
);

export default MenuContent;
