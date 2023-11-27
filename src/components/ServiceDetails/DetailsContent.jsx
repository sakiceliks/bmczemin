import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import img1 from '../../assets/img/gallery/5.jpg';
import img2 from '../../assets/img/gallery/6.jpg';

function DetailsContent({ id, thumbnail, icon, heading, text }) {
    console.log(id);
    return (
        <>
            <h2>{heading}</h2>
            <p>
                {text}
            </p>

            <h2>Quality Construction</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsa!
                Repellendus at accusantium dolore rerum exercitationem iusto error? Odio deleniti in
                iste tenetur placeat excepturi eum officia ratione, vel aperiam?
            </p>
            <SRLWrapper>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <a href={img1} className="popup-gallery">
                            <img src={img1} alt="" />
                        </a>
                    </div>
                    <div className="col-md-6 col-12">
                        <a href={img2} className="popup-gallery">
                            <img src={img2} alt="" />
                        </a>
                    </div>
                </div>
            </SRLWrapper>

            <h2>What You Receive?</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto, ipsam
                deleniti recusandae error voluptatum animi, quo aliquam doloribus reprehenderit
                natus, illo neque earum. Ratione totam necessitatibus possimus tempore tempora?
            </p>

            <blockquote>
                Viral dreamcatcher keytar typewriter, aest hetic offal umami. Aesthetic polaroid pug
                pitchfork post-ironic.
            </blockquote>
        </>
    );
}

export default DetailsContent;
