import React from 'react';
import { Route, Switch, useParams, useRouteMatch, useHistory } from 'react-router-dom';
import FaqAccordion from '../FaqAccordion';
import DetailsCarousel from './DetailsCarousel';
import DetailsContent from './DetailsContent';
import servicesTwoData from '../Services2/servicesTwoData';

function ServiceDetails() {
    // const { id } = useParams(); // URL'den parametreleri al

    // // id'ye göre ilgili servisi bul
    // const service = servicesTwoData.find((item) => item.id === id);
  
    // // Servis bulunamazsa, isteğinize göre bir işlem yapabilirsiniz.
    // if (!service) {
    //   return <p>Service not found!</p>;
    // }


    const { path } = useRouteMatch();
    const history = useHistory();


    const { slug } = useParams();

    // slug'e göre ilgili servisi bul
    const service = servicesTwoData.find((item) => item.slug === slug);
  
    // Servis bulunamazsa, isteğinize göre bir işlem yapabilirsiniz.
    if (!service) {
      return <p>Service not found!</p>;
    }
  return (
    <div className="service-details-content-wrapper pl-0 pl-md-4">
      <div>
      <DetailsCarousel {...service} />
      <DetailsContent {...service} />
      </div>
      <div className="faq-content pl-0 pl-md-4">
        <h2>Sıkça Sorulan Sorular</h2>
        <FaqAccordion
          question={service.question1}
          answer={service.answer1}
        />
          <FaqAccordion
                    question={service.question2}
                    answer={service.answer2}
                />
                <FaqAccordion
                    question={service.question3}
                    answer={service.answer3}
                />
                <FaqAccordion
                   question={service.question4}
                   answer={service.answer4}
                />
                  <FaqAccordion
                   question={service.question5}
                   answer={service.answer5}
                />
   
      </div>
    </div>
  );
}

export default ServiceDetails;