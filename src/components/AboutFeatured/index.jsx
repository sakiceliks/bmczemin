import React, { useState } from 'react';
import { FaHardHat, FaPlay, FaRoad } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import aboutImg from '../../assets/img/about_us.jpg';
import btnImg from '../../assets/img/skill_bg.jpg';
import IconBox from './IconBox';

function AboutFeatured() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="EZ9DrY43wtw"
                onClose={() => setOpen(false)}
            />
            <section className="about-featured-wrapper section-bg section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-5 col-12">
                            <div
                                className="about-promo bg-cover"
                                style={{ backgroundImage: `url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/b0099b184608815.6554f122bb4fd.jpg')` }}
                            >
                                <div
                                    className="skill-popup-video d-flex justify-content-center align-items-center bg-cover"
                                    style={{ backgroundImage: `url(${btnImg})` }}
                                >
                                    <div className="video-play-btn">
                                        <button
                                            type="button"
                                            className="modal-btn"
                                            onClick={() => setOpen(true)}
                                        >
                                            <FaPlay />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
                            <div className="block-contents ml-lg-5">
                                <span>HAKKIMIZDA
</span>
                                <h1 style={{color:'#ff462e'}}>Biz Kimiz?</h1>
                                <h4>
                                Sektördeki 30 yıllık tecrübemizle ve gelişen yapı sistemlerindeki en güncel; sağlam, ekonomik, fonksiyonel, estetik bütünlüğü bir araya getirerek ticari ve yaşam alanlarınıza en avantajlı çözümü sunuyoruz. İhtiyaçlarınızı planlayarak size en uygun seçenekleri en yüksek standartlarda ve uygun fiyat garantisiyle sunuyoruz.
                                </h4>
                            </div>

                            <div className="icon-boxs ml-lg-5">
                                <IconBox
                                    icon={<FaHardHat />}
                                    heading="Zemin Betonları"
                                    text="Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt"
                                />
                                <IconBox
                                    icon={<FaRoad />}
                                    heading="Beton Parlatma"
                                    text="Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt"
                                /> <IconBox
                                icon={<FaHardHat />}
                                heading="Zemin Betonları"
                                text="Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt"
                            />
                            <IconBox
                                icon={<FaRoad />}
                                heading="Beton Parlatma"
                                text="Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt"
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutFeatured;
