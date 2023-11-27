import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import img1 from '../../assets/img/gallery/1.jpg';
import img2 from '../../assets/img/gallery/2.jpg';
import img3 from '../../assets/img/gallery/3.jpg';

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

function DetailsCarousel({id, thumbnail, icon, heading, text}) {
    return (
        <div>
            <Swiper navigation pagination className="service-gallery">
                <SwiperSlide>
                    <div
                        className="single-service-photo bg-cover"
                        style={{ backgroundImage: `url(${thumbnail})` }}
                    />
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-service-photo bg-cover"
                        style={{ backgroundImage: `url(${thumbnail})` }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-service-photo bg-cover"
                        style={{ backgroundImage: `url(${thumbnail})` }}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default DetailsCarousel;
