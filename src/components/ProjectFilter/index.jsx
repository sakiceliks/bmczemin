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
                            <span></span>
                            {/* <p>Portfolio</p> */}
                            <h1>Projelerimiz</h1>
                        </div>
                    </div>
                </div>

                <div className="row mb-20">
                    <div className="col-12 col-lg-12 text-center">
                        <div className="portfolio-cat-filter">
                            <CategoryBtn
                                className={category === 'all' ? 'btn-active' : null}
                                name="all"
                                label=" Tümü"
                                handleSetCategory={setCategory}
                            />
                            <CategoryBtn
                                className={category === 'baski-betonu' ? 'btn-active' : null}
                                name="baski-betonu"
                                label="Baskı Betonu"
                                handleSetCategory={setCategory}
                            />
                             <CategoryBtn
                                className={category === 'epoksi-zemin' ? 'btn-active' : null}
                                name="epoksi-zemin"
                                label="Epoksi Zemin"
                                handleSetCategory={setCategory}
                            />
                            <CategoryBtn
                                className={category === 'stone-carpet' ? 'btn-active' : null}
                                name="stone-carpet"
                                label='Taş Halı Kaplama'
                                handleSetCategory={setCategory}
                            />
                            <CategoryBtn
                                className={category === 'sbr-kaucuk' ? 'btn-active' : null}
                                name="sbr-kaucuk"
                                label="SBR Kauçuk"
                                handleSetCategory={setCategory}
                            />
                            <CategoryBtn
                                className={category === 'mikro-beton' ? 'btn-active' : null}
                                name="mikro-beton"
                                label="Mikro Beton"
                                handleSetCategory={setCategory}
                            />
                             <CategoryBtn
                                className={category === 'dekoratif-beton' ? 'btn-active' : null}
                                name="dekoratif-beton"
                                label="Dekoratif Baskı Betonu"
                                handleSetCategory={setCategory}
                            />
                             <CategoryBtn
                                className={category === 'beton-silimi' ? 'btn-active' : null}
                                name="beton-silimi"
                                label="Beton Silimi"
                                handleSetCategory={setCategory}
                            />

                                                            <CategoryBtn
                                className={category === 'spor-zemin' ? 'btn-active' : null}
                                name="spor-zemin"
                                label="Spor Zemin Sistemleri"
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
