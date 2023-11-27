import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import HeroBg1 from '../../assets/img/home1/hero1.jpg';
import HeroBg2 from '../../assets/img/home1/hero2.jpg';

function Hero1() {
    return (
        <section className="hero-slide-wrapper hero-1">
            <Swiper className="hero-slider-active owl-carousel">
                <SwiperSlide>
                    <div
                        className="single-slide bg-cover"
                        style={{ backgroundImage: `url(${HeroBg1})` }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8 col-xl-6">
                                    <div className="hero-contents">
                                        <h1>Dekoratif Beton</h1>
                                        <Link to="/services" style={{color:'white',fontWeight:'semibold'}} className="theme-btn font-weight-bold">
                                            Hizmetlerimiz{' '}
                                            <BsArrowRight style={{ marginLeft: '10px' }} />
                                        </Link>
                                        <Link to="/about" style={{backgroundColor:'#0071DE',border:'2px solid #0071DE',fontWeight:'medium',color:'white'}} className="theme-btn">
İncele                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-slide bg-cover"
                        style={{ backgroundImage: `url(${HeroBg2})` }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8 col-xl-6">
                                    <div className="hero-contents">
                                        <h1> Spor Zemin Sistemleri</h1>
                                        <Link to="/services" className="theme-btn font-weight-bold">
                                            Hizmetlerimiz{' '}
                                            <BsArrowRight style={{ marginLeft: '10px' }} />
                                        </Link>
                                        <Link to="/about" className="theme-btn black">
İncele                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Hero1;
