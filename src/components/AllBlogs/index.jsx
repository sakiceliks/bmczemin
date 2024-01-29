import { useEffect, useState } from 'react';
import { Client, Databases, ID } from "appwrite";

import blogOneData from './BlogOneData';
import BlogOneItem from './BlogOneItem';
import { Route, Switch, useParams, useRouteMatch, useHistory } from 'react-router-dom';

function GetBlog() {

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

    return (
        <section className="blog-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="section-title text-center">
                            {/* <span>News</span>
                            <p>News Feed</p> */}
                            <h1>Blog</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                {documents.map((data) => (
                        <BlogOneItem
                            key={data.$id}
                            thumb={data.thumbnail}  
                            date={data.date}
                            month={data.month}
                            category={data.category}
                            author={data.author}
                            title={data.title}
                            link={data.slug}
                            slug={data.slug}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default GetBlog;
