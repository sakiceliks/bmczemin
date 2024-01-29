import React, { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { FaPaperPlane } from 'react-icons/fa';
import logo from '../../assets/img/logo.png';
import WidgetAbout from './WidgetAbout';
import WidgetGetinTouch from './WidgetGetinTouch';
import WidgetGetinTouchData from './WidgetGetinTouchData';
import WidgetNews from './WidgetNews';
import WidgetNewsData from './WidgetNewsData';

function Footer1() {
    // STATES
    const [email, setEmail] = useState('');

    // HANDLER
    const onchangeHandler = (e) => {
        setEmail(e.target.value);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <footer className="footer-1 footer-wrap">
            <div className="footer-widgets dark-bg">
                <div className="container">
                    <div className="row">
                        {/* ABOUT WIDGET */}
                        <WidgetAbout
                            text="Sektördeki 30 yıllık tecrübemizle ve gelişen yapı sistemlerindeki en güncel; sağlam, ekonomik, fonksiyonel, estetik bütünlüğü bir araya getirerek ticari ve yaşam alanlarınıza en avantajlı çözümü sunuyoruz. İhtiyaçlarınızı planlayarak size en uygun seçenekleri en yüksek standartlarda ve uygun fiyat garantisiyle sunuyoruz."
                            fbLink="/"
                            twitterLink="/"
                            instaLink="/"
                            youtubeLink="/"
                        />

                        {/* NEWS FEED WIDGET */}

                        <div className="col-md-6 col-xl-3 col-12">
                            <div className="single-footer-wid recent_post_widget">
                                <div className="wid-title">
                                    <h4>Bülten</h4>
                                </div>
                                <div className="recent-post-list">
                                    {WidgetNewsData.map((data) => (
                                        <WidgetNews
                                            key={data.id}
                                            thumbnail={data.thumbnail}
                                            meta={data.meta}
                                            heading={data.heading}
                                            link={data.link}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* NEWSLETTER WIDGET */}
                        <div className="col-md-6 col-xl-3 col-12">
                            <div className="single-footer-wid newsletter_widget">
                                <div className="wid-title">
                                    <h4>Bülten</h4>
                                </div>
                                <div className="newsletter_box">
                                    <p>
                                    En son güncellemelerimizi almak için bültenimize abone
                                    olun.
                                    </p>
                                    <form action="#">
                                        <input
                                            value={email}
                                            onChange={onchangeHandler}
                                            type="email"
                                            placeholder="Enter email address"
                                            required
                                        />
                                        <button
                                            className="submit-btn"
                                            type="submit"
                                            onSubmit={onSubmitHandler}
                                        >
                                            <FaPaperPlane />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3 col-12">
                            <div className="single-footer-wid ml-15 site_info_widget">
                                <div className="wid-title">
                                    <h4>İletişim</h4>
                                </div>
                                <div className="contact-us" />
                                {WidgetGetinTouchData.map((data) => (
                                    <WidgetGetinTouch
                                        key={data.id}
                                        icon={data.icon}
                                        heading={data.heading}
                                        text={data.text}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12">
                            <div className="copyright-info">
                                <p>
                                    &copy; Copyright By <a href="index.html">BMÇ ZEMİN</a> - 2024
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 text-center">
                            <div className="footer-logo">
                                <a href="#top">
                                    <img src={logo} alt="Dustrix" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block col-12">
                            <div className="scroll-up-btn text-md-right justify-content-end">
                                <a href="#top">
                                    <AiOutlineArrowUp />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer1;
