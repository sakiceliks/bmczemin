/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import CategoryBtn from './CategoryBtn';
import FilterItem from './FilterItem';
import projectFilterData from './projectFilterData';

function ProjectFilter() {
    // STATES
    const [category, setCategory] = useState('all');
    const [filteredItem, setFilteredItem] = useState([]);

    useEffect(() => {
        category === 'all'
            ? setFilteredItem(projectFilterData)
            : setFilteredItem(projectFilterData.filter((data) => data.category === category));
    }, [category]);

    return (
        <section className="portfolio-wrapper-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 text-center">
                        <div className="section-title-2">
                            <span>Portfolio</span>
                            <p>Portfolio</p>
                            <h1>Our Case Study</h1>
                        </div>
                    </div>
                </div>

                <div className="row mb-20">
                    <div className="col-12 col-lg-12 text-center">
                        <div className="portfolio-cat-filter">
                            <CategoryBtn
                                className={category === 'all' ? 'btn-active' : null}
                                name="all"
                                label="Veiw All"
                                handleSetCategory={setCategory}
                            />
                            <CategoryBtn
                                className={category === 'bedroom' ? 'btn-active' : null}
                                name="bedroom"
                                label="Bedrooms Making"
                                handleSetCategory={setCategory}
                            />
                            <CategoryBtn
                                className={category === 'floor' ? 'btn-active' : null}
                                name="floor"
                                label="Floor Making"
                                handleSetCategory={setCategory}
                            />
                            <CategoryBtn
                                className={category === 'office' ? 'btn-active' : null}
                                name="office"
                                label="Office Making"
                                handleSetCategory={setCategory}
                            />
                            <CategoryBtn
                                className={category === 'home' ? 'btn-active' : null}
                                name="home"
                                label="Home Making"
                                handleSetCategory={setCategory}
                            />
                        </div>
                    </div>
                </div>

                <div className="row grid">
                    {filteredItem.map(
                        (item, length) =>
                            length <= '7' && (
                                <FilterItem
                                    key={item.id}
                                    image={item.image}
                                    price={item.price}
                                    name={item.name}
                                    heading={item.heading}
                                    category={item.category}
                                />
                            )
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProjectFilter;
