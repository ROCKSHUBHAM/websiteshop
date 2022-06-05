import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../images/portfolio-1.jpg'
import img2 from '../images/portfolio-2.jpg'

import img3 from '../images/portfolio-3.jpg'

import img4 from '../images/portfolio-4.jpg'

import img5 from '../images/portfolio-5.jpg'

import img6 from '../images/portfolio-6.jpg'

const Products = () => {
    return (
        <div>
            <div id="portfolio" className="portfolio min-vh-100 pt-5">

                <div className="container mt-5" data-aos="fade-up">

                    <header className="section-header my-4">
                        <h1 className='border-bottom border-5 border-danger d-inline'>Portfolio</h1>
                    </header>
                    <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        <Link to="/productview" className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={img1} className="img-fluid" alt="..." />
                                <div className="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>
                        <Link to="/productview" className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={img2} className="img-fluid" alt="..." />
                                <div className="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>

                        <Link to="/productview" className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={img3} className="img-fluid" alt="..." />
                                <div className="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>

                        <Link to="/productview" className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={img4} className="img-fluid" alt="..." />
                                <div className="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>

                        <Link to="/productview" className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={img5} className="img-fluid" alt="..." />
                                <div className="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>

                        <Link to="/productview" className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={img6} className="img-fluid" alt="..." />
                                <div className="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>

                        <Link to="/productview" className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={img1} className="img-fluid" alt="..." />
                                <div className="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>

                        <Link to="/productview" className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={img2} className="img-fluid" alt="..." />
                                <div className="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>

                        <Link to="/productview" className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={img3} className="img-fluid" alt="..." />
                                <div className="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Products