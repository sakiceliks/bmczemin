import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import MobileMenu from '../MobileMenu';
import OffsetMenu from '../OffsetMenu';
import MainMenu from './MainMenu';
import Topbar from './Topbar';
import Hero1 from '../Hero1';
import { FaTh } from 'react-icons/fa';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


function Header1() {
    const [offset, setOffset] = useState(false);
    const handleOffset = () => {
        setOffset(!offset);
    };


    const location = useLocation()
    return (
        <>
            <OffsetMenu
                handleOffset={handleOffset}
                className={offset ? 'offset-menu show' : 'offset-menu'}
            />
            <header className="header-wrap header-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-8 col-lg-3">
                            <div className="logo">
                                <Link to="/">
                                    <img src={Logo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-4 d-block d-lg-none">
                            <div className="mobile-nav-wrap">
                                <MobileMenu />
                            </div>
                            
                        </div>
                        
                        <div className="col-9 d-none d-md-block col-lg-9">
                        <button  type="button" onClick={handleOffset} className="new-menu-toggle d-inline-flex">
                            Menü 
                            <FaTh style={{marginLeft:'2px'}} />
                            
                        </button>           
                            <div className="header-contact-info text-lg-right">
                                <div className="single-element">
                                <Link style={{color:'white'}}>(+90) 531 281 29 58</Link>
                                    {/* <span>Hemen İletişime Geç</span> */}
                                </div>
                                <div className="single-element">
                                    <Link style={{color:'white'}}href="/">info@bmczemin.com.tr</Link>
                                    {/* <span>Mail Us Now</span> */}
                                </div>
                                <div className="header-btn d-inline">
                                    <Link to="/contact" className="theme-btn">
                                        İletişime Geç
                                    </Link>

                                                         </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </header>
            {location.pathname === '/' && <Hero1 />}
        </>
    );
}

export default Header1;
