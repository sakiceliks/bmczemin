/* eslint-disable react/jsx-no-duplicate-props */
"use client";
import { Client, Databases, ID } from "appwrite";
import { useEffect, useState } from 'react';


import BlogOneItem from './BlogOneItem';

function Blog1() {
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
      }, []);
    return (
        <section style={{backgroundColor:'#1a202c'}} className="blog-section section-padding">
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
                {documents.slice(0, 6).map((data) => (
                        <BlogOneItem
                            key={data.$id}
                            thumb={data.thumbnail}
                            date={data.date}
                            category={data.category}
                            author={data.author}
                            month={data.month}
                            day={data.day}
                            title={data.slug}
                            slug={data.slug}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog1;
