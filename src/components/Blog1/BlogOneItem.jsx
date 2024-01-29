import React from 'react';
import { Link } from 'react-router-dom';

function BlogOneItem({ thumb, day, month, category, author, title, slug }) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="single-blog-card">
                    <div
                        className="featured-img bg-cover"
                        style={{
                            backgroundImage: `url(${thumb})`,
                        }}
                    />
                    <div className="post-content">
                        <div className="post-date">
                            <span>{day}</span>
                            {month}
                        </div>
                        <div style={{display:'flex',flexDirection:'column'}} className="post-meta">
                        <Link to={`/blogs/${slug}`} className="post-cat">
                                {category}
                            </Link>{' '}
                            
                            <Link to={`/blogs/${slug}`} className="post-author">
                                {author}
                            </Link>
                        </div>
                        <h3>
                        <Link to={`/blogs/${slug}`}>{title}</Link>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogOneItem;
