import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AgeImg from '../../assets/img/age.png';

function Promo() {
    return (
        <section className="promo-featured-wrapper section-padding section-bg">
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-6 col-12 text-center">
                        <img src={AgeImg} alt="age" />
                        {/* <h5>
                            Years Of Experience With <b>Creative Team</b>
                        </h5> */}
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="block-contents ml-xl-5 mt-5 mt-xl-0">
                            <span>Zeminlerinizde estetiği ve dayanıklılığı bir araya getiren mükemmel çözümler sunuyoruz.</span>
                            <h1>Her Zeminin Özel Çözümü.</h1>
                            <h4>
                            Zeminlerinizde estetiği ve dayanıklılığı bir araya getiren mükemmel çözümler sunuyoruz.

                            </h4>
                            <p>
                            Profesyonel zemin kaplamaları hizmetimizle yaşam alanlarınızı yeniden şekillendiriyoruz. Sektördeki deneyimimiz ve uzman ekibimizle her projeye özel çözümler sunarak, beklentilerinizi en üst düzeyde karşılıyoruz.
                            </p>
                            <Link to="/contact" className="d-inline-flex theme-btn">
                                İletişime Geç
                                <BsArrowRight style={{ fontSize: '20px', marginLeft: '15px' }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;
