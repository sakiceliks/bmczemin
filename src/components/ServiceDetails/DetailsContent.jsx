import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import img1 from '../../assets/img/gallery/5.jpg';
import img2 from '../../assets/img/gallery/6.jpg';

function DetailsContent({ id, thumbnail, icon, heading, content,slogan,areause,cover1,cover2 }) {
    console.log(id);
    return (
        <>
            <h2>{heading}</h2>
            <p>
                {content}
            </p>

            <h2>{heading} Neden Tercih Edilir ve Nerelerde kullanılır?</h2>
            <p>
               {areause}
            </p>
            <SRLWrapper>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <a to={cover1} className="popup-gallery">
                            <img src={cover1} alt="" />
                        </a>
                    </div>
                    <div className="col-md-6 col-12">
                        <a to={cover2} className="popup-gallery">
                            <img src={cover2} alt="" />
                        </a>
                    </div>
                </div>
            </SRLWrapper>

            {/* <h2>What You Receive?</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto, ipsam
                deleniti recusandae error voluptatum animi, quo aliquam doloribus reprehenderit
                natus, illo neque earum. Ratione totam necessitatibus possimus tempore tempora?
            </p> */}

            <blockquote>
               {slogan}
            </blockquote>
        </>
    );
}

export default DetailsContent;
