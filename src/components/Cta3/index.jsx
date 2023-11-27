import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import bgImg from '../../assets/img/subscribe_bg.jpg';

function Cta3() {
    return (
        <section className="cta-wrapper">
            <div className="container">
                <div
                    className="cta-content cta-style-2 bg-cover"
                    style={{ backgroundImage: `url(${bgImg})` }}
                >
                    <div className="row align-items-center text-center text-lg-left justify-content-center">
                        <div className="col-lg-7">
                            <h1>Online Teklif Al</h1>
                        </div>
                        <div className="col-lg-4 pl-lg-0 mt-4 mt-lg-0">
                            <div className="contact-info">
                                <div className="icon">
                                    <AiOutlinePhone style={{ color: '#f86048' }} />
                                </div>
                                <div className="contact-number">
                                    <a href="/home-2">(+90) 531 281 29 58</a>
                                    <span>Hemen İletişime Geç</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta3;
