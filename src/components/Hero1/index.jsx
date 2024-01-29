import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import SwiperCore, { Autoplay, Lazy } from 'swiper';
import { Client, Databases } from "appwrite";
import 'swiper/components/lazy/lazy.min.css'; // Lazy modülünün stillerini içe aktarın
import Swiper from 'react-id-swiper';

SwiperCore.use([Autoplay, Lazy]); // Lazy modülünü Swiper'a ekleyin

function Hero1() {
  const client = new Client()
    .setEndpoint(process.env.REACT_APP_ENDPOINT)
    .setProject("654d24a6efcad9eb4ff2");

  const databases = new Databases(client);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await databases.listDocuments(
          "654d42331f1604783143",
          "65646b7549f9132d58c5",
        );

        if (isMounted) {
          setDocuments(response.documents);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching documents:', error);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };

  }, [databases]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const sortedHeroData = documents.slice().sort((a, b) => a.id - b.id);

  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    lazy: true, // Lazy load'u etkinleştirin
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  return (
    <section className="hero-slide-wrapper hero-1">
      <Swiper {...params} className="hero-slider-active owl-carousel">
        {sortedHeroData.map((slide, index) => (
          <div key={index}>
            <div className="single-slide bg-cover" data-swiper-parallax="10%" style={{ backgroundImage: `url(${slide.backgroundImage})` }}>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-8 col-xl-6">
                   
                  <div className="hero-contents">
                  <h1  style={{fontSize:'8vw'}}>{slide.title}</h1>
                                        <Link  to={slide.servicesLink} style={{color:'white',fontWeight:'semibold'}} className="theme-btn font-weight-bold">
                                            Hizmetlerimiz
                                        </Link>
                                        <Link to={slide.exploreLink} style={{backgroundColor:'#0071DE',border:'2px solid #0071DE',fontWeight:'medium',color:'white'}} className="theme-btn">
İncele                                        </Link>
                                    </div>
                   
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero1;
