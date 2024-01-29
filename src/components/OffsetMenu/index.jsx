import React from 'react';
import { AiOutlineMail, AiOutlinePhone,AiOutlineWhatsApp  } from 'react-icons/ai';
import {
    FaClock,
    FaDribbble,
    FaFacebookF,
    FaLinkedinIn,
    FaMap,
    FaPlus,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import menuData from '../MobileMenu/menuData';
import AnaMenu from './menu';
function OffsetMenu({ className, handleOffset }) {
    return (
        <div className={className}>
            <span id="offset-menu-close-btn">
                <FaPlus onClick={handleOffset} />
            </span>
            <div className="offset-menu-wrapper text-white">
                <div className="offset-menu-header">
                    <div className="offset-menu-logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                </div>
                
                <div className="offset-menu-section">
                {menuData.map((item, index) => (
                            <AnaMenu item={item} key={index} />
                        ))}
                        <div className='col-md-12 text-center'>
                        <Link to="/contact" className="btn btn-success btn-lg mt-30 d-inline-flex align-center justify-content-between">
                      <AiOutlineWhatsApp style={{marginRight:'15px'}} size={30} />  İletişime Geç
                    </Link>
                        </div>
                   
                </div>
                {/* <ul  className='list-group list-group-light'>
                            <li className='list-group-item list-group-item-dark flex-column text-center align-items-center'>  <Link style={{color:'black!important'}}>(+90) 531 281 29 58</Link></li>
                                <li className='list-group-item list-group-item-dark flex-column text-center align-items-center '> <Link style={{color:'black'}}href="/">info@bmczemin.com.tr</Link></li>
                           </ul> */}
                {/* <div className="offset-menu-section">
                    <h3>Contact Info</h3>
                    <ul>
                        <li>
                            <span>
                                <FaMap />
                            </span>
                            Rock St 12, Newyork City, USA
                        </li>
                        <li>
                            <span>
                                <AiOutlinePhone />
                            </span>
                            (000) 000-000-0000
                        </li>
                        <li>
                            <span>
                                <AiOutlineMail />
                            </span>
                            info@modinatheme.com
                        </li>
                        <li>
                            <span>
                                <FaClock />
                            </span>
                            Week Days: 09.00 to 18.00
                        </li>
                        <li>
                            <span>
                                <FaClock />
                            </span>
                            Sunday: Closed
                        </li>
                    </ul>
                </div> */}
              
            </div>
        </div>
    );
}

export default OffsetMenu;
