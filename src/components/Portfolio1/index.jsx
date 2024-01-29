import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Client, Databases } from "appwrite";
import PortfolioOneSlide from './PortfolioOneSlide';

SwiperCore.use([Navigation]);

function Porfolio1() {



    const client = new Client()
    .setEndpoint("https://process.env.REACT_APP_ENDPOINT")
    .setProject("654d24a6efcad9eb4ff2");

  const databases = new Databases(client);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await databases.listDocuments(
          "654d42331f1604783143",
          "656e068f066426eb2993",
        );

    
          setDocuments(response.documents);
          setLoading(false);
        
      } catch (error) {
        console.error('Error fetching documents:', error);
        setLoading(false);
      }
    };

    fetchData();

 

  }, [databases]);

  if (loading) {
    return <div>Loading...</div>;
  }


  const sortedHeroData = documents.slice().sort((a, b) => a.id - b.id);

  console.log(documents);
    return (
        <section style={{backgroundColor:'#1a202c'}} className="portfolio-section section-padding pt-0">
            <div className="container">
                <div className="project-wrapper">
                    <Swiper navigation className="portfolio-carousel-active owl-carousel">
                        {documents.map((data) => (
                            <SwiperSlide key={data.$id}>
                                <PortfolioOneSlide
                                    image={data.image}
                                    imgLink={data.imgLink}
                                    category={data.category}
                                    client={data.client}
                                    title={data.heading}
                                    desc={data.desc}
                                    btnText={data.btnText}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Porfolio1;
