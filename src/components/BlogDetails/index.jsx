import React from 'react';
import { FaComments } from 'react-icons/fa';
import thumb1 from '../../assets/img/blog/p1.jpg';
import thumb2 from '../../assets/img/blog/p2.jpg';
import BlogSidebar from '../BlogSidebar';
import CommentInput from './CommentInput';
import bannerBg from '../../assets/img/page-banner.jpg';
import { useEffect, useState } from 'react';
import { Client, Databases, ID } from "appwrite";
import Comments from './Comments';
import RelatedPost from './RelatedPost';
import SinglePost from './SinglePost';
import TagShare from './TagShare';
import blogOneData from '../Blog1/BlogOneData';
import { useLocation, useParams } from 'react-router-dom';
import Header1 from '../Header1';
import PageBanner from '../PageBanner';
function BlogDetails() {
    const client = new Client()
    .setEndpoint("https://process.env.REACT_APP_ENDPOINT") // Appwrite Endpoint
    .setProject("654d24a6efcad9eb4ff2");
    
    const databases = new Databases(client);
    
    let promise = databases.listDocuments(
        "654d42331f1604783143",
        "654d42463d470160bb95",
    );
    
    promise.then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });

    const [documents, setDocuments] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            client
            .setEndpoint("https://process.env.REACT_APP_ENDPOINT") // Appwrite Endpoint
            .setProject('654d24a6efcad9eb4ff2');
      
            const databases = new Databases(client);
      
            const response = await databases.listDocuments(
                "654d42331f1604783143",
                "654d42463d470160bb95",
            );
      
            setDocuments(response.documents);
          } catch (error) {
            console.error('Error fetching documents:', error);
          }
        };
      
        fetchData();
      }, [documents]);
    const Location =  useLocation();
    const currentLocation = Location.pathname
    const remainingString = currentLocation.split("/blogs/")[1];
    const formattedString = remainingString
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
    console.log(formattedString);

    const { slug } = useParams();

    // slug'e göre ilgili servisi bul
    const blog = documents.find((item) => item.slug === slug);
  
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // Servis bulunamazsa, isteğinize göre bir işlem yapabilirsiniz.

    return (
        <>
        <Header1 />
        <PageBanner
            bannerBg={bannerBg}
            heading={formattedString}
            currentPage="Faaliyet Alanlarımız"
        />
        <section className="blog-wrapper news-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="blog-post-details border-wrap">
                            <SinglePost {...blog}/>
                            <TagShare
                                tag1="water"
                                tag2="charity"
                                tag3="donate"
                                fbLink="/"
                                twitterLink=""
                                instaLink=""
                                linkedInLink=""
                            />

                            <div className="related-post-wrap">
                                <h3>Releted Post</h3>

                                <div className="row">
                                    <RelatedPost
                                        thumbnail={thumb1}
                                        postDate="27th March 2021"
                                        title="How To Provide Fresh Water In Nigeria"
                                        text="Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing."
                                        postLink="/news-details"
                                    />
                                    <RelatedPost
                                        thumbnail={thumb2}
                                        postDate="27th March 2021"
                                        title="How To Provide Fresh Water In Nigeria"
                                        text="Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing."
                                        postLink="news-deitals"
                                    />
                                </div>
                            </div>
                            {/* COMMENTS */}
                            <div className="comment-form-wrap mt-40">
                                <h3>Post Comment</h3>

                                <form action="#" className="comment-form">
                                    <div className="single-form-input">
                                        <textarea placeholder="Type your comments...." />
                                    </div>
                                    <CommentInput type="text" placeholder="Type your name..." />
                                    <CommentInput type="email" placeholder="Type your email..." />
                                    <CommentInput type="text" placeholder="Type your websitee..." />
                                    <button
                                        onSubmit={handleSubmit}
                                        className="submit-btn"
                                        type="submit"
                                    >
                                        <FaComments
                                            style={{ marginTop: '-5px', marginRight: '10px' }}
                                        />
                                        Post Comment
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* SIDEBAR */}
                    <BlogSidebar {...blog}/>
                </div>
            </div>
        </section>
        </>
    );
}

export default BlogDetails;
