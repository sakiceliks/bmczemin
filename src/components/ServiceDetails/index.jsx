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
        <h2>What Is Include?</h2>
        <FaqAccordion
          question="100% Satisfaction Guarantee."
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
        />
          <FaqAccordion
                    question="100% Satisfaction Guarantee."
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                />
                <FaqAccordion
                    question="Accurate Testing Processes."
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                />
                <FaqAccordion
                    question="35+ Years Of Experience."
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                />
      </div>
    </div>
  );
}

export default ServiceDetails;